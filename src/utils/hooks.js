import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function getWindowDimensions() {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }
    // fallback for headless build process
    return {
      width: 1920,
      height: 1080,
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

export const useOuterClick = (onOuterClick, innerRef) => {
  useEffect(
    () => {
      // only add listener, if the element exists
      if (innerRef.current) {
        document.addEventListener("click", handleClick)
      }

      // unmount previous first in case inputs have changed
      return () => document.removeEventListener("click", handleClick)

      function handleClick(e) {
        innerRef.current &&
          !innerRef.current.contains(e.target) &&
          onOuterClick(e)
      }
    },
    [onOuterClick, innerRef] // invoke again, if inputs have changed
  )
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return site.siteMetadata
}

export const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}

export const useInViewportAnimation = () =>
  useEffect(() => {
    const targets = []

    const inViewport = (entries, observer) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting && !targets.find(elem => elem === target)) {
          target.classList.remove("hidden")
          target.classList.toggle("is-inViewport", isIntersecting)
          targets.push(target)
        }
      })
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
    const Observer = new IntersectionObserver(inViewport, options)

    const elementsInViewport = document.querySelectorAll("[data-inviewport]")
    elementsInViewport.forEach(elem => Observer.observe(elem))
  }, [])

export const useScript = src => {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle")
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus("idle")
        return
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`)
      if (!script) {
        // Create script
        script = document.createElement("script")
        script.src = src
        script.async = true
        script.setAttribute("data-status", "loading")
        // Add script to document body
        document.body.appendChild(script)
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = event => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          )
        }
        script.addEventListener("load", setAttributeFromEvent)
        script.addEventListener("error", setAttributeFromEvent)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"))
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = event => {
        setStatus(event.type === "load" ? "ready" : "error")
      }
      // Add event listeners
      script.addEventListener("load", setStateFromEvent)
      script.addEventListener("error", setStateFromEvent)
      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent)
          script.removeEventListener("error", setStateFromEvent)
        }
      }
    },
    [src] // Only re-run effect if script src changes
  )
  return status
}

export const useSessionStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(keyName)

      if (value) {
        return JSON.parse(value)
      } else {
        window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = newValue => {
    try {
      window.sessionStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (err) {}
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export function useKeyPress(targetKey, callback) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }) // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    if (callback && keyPressed) callback()
  }, [callback, keyPressed])

  return keyPressed
}
