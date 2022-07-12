import React from "react"

export const CloseIcon = ({ size = 32, color, onClick }) => (
  <svg
    height={size}
    viewBox="0 0 32 32"
    width={size}
    style={{ color }}
    onClick={onClick}
  >
    <polygon
      points="26.3,6.5 25.5,5.7 16,15.3 6.5,5.7 5.7,6.5 15.3,16 5.7,25.5 6.5,26.3 16,16.7 25.5,26.3 26.3,25.5 16.7,16 "
      stroke="currentColor"
      fill="currentColor"
    />
  </svg>
)

export const HamburgerIcon = ({ size = 32, color, onClick }) => (
  <svg
    height={size}
    viewBox="0 0 32 32"
    width={size}
    style={{ color }}
    onClick={onClick}
  >
    <path
      d="M2,8h28 M2,16h28 M2,24h28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
)
