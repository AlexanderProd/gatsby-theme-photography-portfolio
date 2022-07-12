import styled from "@emotion/styled"

import { fontSizes, space } from "../../utils/styles"

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: #111;
  padding: ${space[4]};
`

export const Content = styled.div`
  width: 300px;
`

export const Title = styled.h1`
  color: white;
  margin-top: ${space[16]};
`

export const Subtitle = styled.h2`
  color: white;
`

export const Categories = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    color: white;
    text-decoration: none;
    font-size: ${fontSizes.lg};
  }
`
