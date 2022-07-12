import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

export const colors = {
  whiteSmoke: "#F6F6F6",
  androidGreen: "#afc13c",
  seaweed: "#373f29",
  fireEngineRed: "#d61a19",
  frenchBlue: "#0066be",
  darkGrey: "#575756",
  brightSun: "#ffda3e",
}

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

export const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: "2",
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
}

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
}

export const space = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
}

export const typo = {
  xLarge: "40px",
  large: "30px",
  regular: "20px",
  small: "15px",
  lineXLarge: "48px",
  lineLarge: "32px",
  lineRegular: "24px",
  lineSmall: "16px",
}

export const layout = {
  spacing: 8,
}

export const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-family: Roboto, sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        overflow-x: hidden;
      }

      p {
        line-height: 1.4;
      }

      h3 {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-style: normal;
        text-transform: uppercase;
        font-size: 1.125rem;
      }

      table {
        border-spacing: 0;
        border-collapse: collapse;

        tr:nth-of-type(even) {
          background: #f6f6f6;
        }

        tr td {
          border: 1px solid #dcdcdc;
          padding: 10px 20px;
        }
      }

      .body-noscroll-class {
        overflow: hidden;
      }

      #cookie-bar {
        background: #000 !important;
        font-family: Roboto, sans-serif;

        p {
          font-family: Roboto, sans-serif;
        }
      }

      #cookie-bar-button {
        background-color: ${colors.androidGreen} !important;
      }

      #cookie-bar-button-no {
        background-color: ${colors.fireEngineRed} !important;
      }

      @keyframes fadeInFromBottom {
        0% {
          opacity: 0;
          transform: translateY(50%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      [data-inviewport="scale-in"] {
        transition: 2s;
        transform: scale(0.1);
      }
      [data-inviewport="scale-in"].is-inViewport {
        transform: scale(1);
      }

      [data-inviewport="fade-in-left"] {
        transition: 1.2s;
        transform: translateX(-200px);
        opacity: 0;
      }
      [data-inviewport="fade-in-left"].is-inViewport {
        display: block;
        transform: translateX(0);
        opacity: 1;
      }

      [data-inviewport="fade-in-right"] {
        transition: 1.2s;
        transform: translateX(200px);
        opacity: 0;
      }
      [data-inviewport="fade-in-right"].is-inViewport {
        transform: translateX(0);
        opacity: 1;
      }

      [data-inviewport="fade-in-bottom"] {
        transition: 1.2s;
        transform: translateY(100px);
        opacity: 0;
      }
      [data-inviewport="fade-in-bottom"].is-inViewport {
        transform: translateY(0);
        opacity: 1;
      }

      [data-inviewport="fade-rotate"] {
        transition: 2s;
        opacity: 0;
      }
      [data-inviewport="fade-rotate"].is-inViewport {
        transform: rotate(180deg);
        opacity: 1;
      }

      [data-inviewport="fade-in"] {
        transition: 2s;
        opacity: 0;
      }
      [data-inviewport="fade-in"].is-inViewport {
        opacity: 1;
      }
    `}
  />
)

export const Img = styled(GatsbyImage)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.45rem;
`

export const ContainerExtraLarge = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  padding: 0 1.45rem;
`

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  transition: all 0.5s;
  transform: translateX(
    ${({ sidebarVisible }) => (sidebarVisible ? "300px" : 0)}
  );
`

export const SidebarButtonWrapper = styled.div`
  padding: ${space[4]};
  background-color: white;
  position: fixed;
  z-index: 11;
  left: 0;
  top: 0;

  svg {
    cursor: pointer;
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};
  grid-auto-flow: row dense;
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor};` : null};

  & > :nth-of-type(4n - 1) {
    grid-column-start: 2;
  }

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: ${({ gap }) => (gap ? gap : "2.5rem")};
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

export const LeftTwoThirds = styled.div`
  display: grid;
  grid-template-columns: 1fr 66%;
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const RightTwoThirds = styled.div`
  display: grid;
  grid-template-columns: 66% 1fr;
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const AlternatingTwoThirdsGrid = styled.div`
  display: grid;
  grid-template-columns: 66% 1fr;
  grid-auto-flow: row dense;
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};

  & > :nth-child(4n - 1) {
    grid-column-start: 2;
  }

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const ThreeThirdsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor};` : null};

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: ${({ gap }) => (gap ? gap : "2.5rem")};
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

export const Button = styled.button`
  color: ${({ color }) => (color ? color : "white")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "0px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "black"};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 20px;
  font-size: 0.8125em;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  white-space: normal;
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #f6f6f6;
    color: #717171;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  color: black;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  font-size: 0.8125rem;
  border: 1pt solid black;
  border-radius: 0px;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  background-color: RGBA(255, 255, 255, 0);
`

export const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  font-size: 0.8125rem;
  border: 1pt solid black;
  border-radius: 0px;
  font-family: Roboto, sans-serif;
  background-color: RGBA(255, 255, 255, 0);
`

export const Textarea = styled.textarea`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  font-size: 0.8125rem;
  border: 1pt solid black;
  border-radius: 0px;
  font-family: Roboto, sans-serif;
  background-color: RGBA(255, 255, 255, 0);
`

export const Fieldset = styled.fieldset`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  font-size: 0.8125rem;
  border: 1pt solid black;
  border-radius: 0px;
  font-family: Roboto, sans-serif;
  background-color: RGBA(255, 255, 255, 0);
`

export const SmallLine = styled.hr`
  margin: 20px auto;
  border-width: 1px 0 0 0;
  width: 100px;
  clear: both;
  border-top: solid ${({ color }) => (color ? color : "black")};
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  margin: 0 0 0;
  line-height: 1.4;
  color: ${({ color }) => (color ? color : "white")};
  text-transform: uppercase;
  animation: 1s ease-out 0s 1 fadeInFromBottom;

  :after {
    border-top: solid #1c1d1d;
    border-width: 1px 0 0 0;
    width: 50px;
  }

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  margin: 0 0 0;
  line-height: 1.4;
  color: ${colors.androidGreen};
  text-transform: uppercase;
  animation: 1s ease-out 0s 1 fadeInFromBottom;

  :after {
    border-top: solid #1c1d1d;
    border-width: 1px 0 0 0;
    width: 50px;
  }

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2rem;
  }
`

export const ButtonWrapper = styled.div`
  width: auto;
`

export const QuantityInput = styled.input`
  font-family: Roboto, sans-serif;
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: center;
  color: black;
  border: 1px solid black;
  border-radius: 0;
  -webkit-border-radius: 0;
  border-left: 0px;
  border-right: 0px;
  font-size: 18px;
  line-height: 1.563;
  max-width: 50px;
`

export const QuantityButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: center;
  color: black;
  border: 1px solid #343535;
  font-size: 18px;
  line-height: 1.563;
  min-width: 15px;
  width: 25px;
  transition: 0.2s;

  &:hover {
    color: white;
    background-color: #343535;
  }
`

export const Spacer = styled.div`
  height: ${({ height }) => (height ? height : "2rem")};
`

export const FourFourthsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: ${({ gap }) => (gap ? gap : "2.5rem")};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor};` : null};

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: ${({ gap }) => (gap ? gap : "2.5rem")};
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

export const H1 = styled.h1`
  font-weight: 700;
  font-style: normal;
  font-size: ${fontSizes["4xl"]};

  @media (max-width: ${breakpoints.s}px) {
    font-size: ${fontSizes["3xl"]};
  }
`

export const H2 = styled.h2`
  font-weight: 700;
  font-style: normal;
  font-size: ${fontSizes["3xl"]};
  text-transform: uppercase;
  color: ${({ color }) => (color ? color : "black")};

  @media (max-width: ${breakpoints.s}px) {
    font-size: ${fontSizes["2xl"]};
  }
`

export const H3 = styled.h3`
  font-weight: 600;
  font-style: normal;
  font-size: ${fontSizes["2xl"]};

  @media (max-width: ${breakpoints.s}px) {
    font-size: ${fontSizes["xl"]};
  }
`

export const Center = styled.div`
  text-align: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : colors.darkGrey};
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ right }) => (right ? `align-items: flex-end;` : null)}
  ${({ right }) => (right ? `text-align: right;` : null)}

  @media (max-width: ${breakpoints.l}px) {
    text-align: left;
    align-items: flex-start;
  }
`
