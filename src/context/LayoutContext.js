import React, { useState } from "react"

export const defaultLayoutContext = {
  sidebarVisible: false,
  toggleSidebar: () => {},
}

const LayoutContext = React.createContext(defaultLayoutContext)

export const LayoutProvider = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(
    defaultLayoutContext.sidebarVisible
  )

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const layout = {
    sidebarVisible,
    toggleSidebar,
  }

  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  )
}

export default LayoutContext
