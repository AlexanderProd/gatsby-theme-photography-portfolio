import styled from "@emotion/styled"
import { space } from "../../utils/styles"

import { leftIcon, gridIcon, rightIcon } from "./icons"

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  overflow-x: hidden;
`

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 11;
  right: 0;
  top: 0;
  padding: ${space[4]};

  svg {
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
`

export const ThreeThirdsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row dense;
`

export const Third = styled.div`
  heigh: 100%;
  width: 100%;
  ${({ left, isLight }) =>
    left ? `cursor: url("${leftIcon(isLight)}") 16 16, pointer;` : null}
  ${({ middle, isLight }) =>
    middle ? `cursor: url("${gridIcon(isLight)}") 16 16, pointer;` : null}
  ${({ right, isLight }) =>
    right ? `cursor: url("${rightIcon(isLight)}") 16 16, pointer;` : null}
`
