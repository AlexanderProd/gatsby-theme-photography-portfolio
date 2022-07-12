import React from "react"

import { LayoutProvider } from "../context/LayoutContext"
import { GlobalStyle } from "../utils/styles"

const Layout = ({ children }) => (
  <LayoutProvider>
    <GlobalStyle />
    {children}
  </LayoutProvider>
)

export default Layout
