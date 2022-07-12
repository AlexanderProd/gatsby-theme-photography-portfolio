import { Link } from "gatsby"
import React from "react"

import { useSiteMetadata } from "../../utils/hooks"
import { Categories, Content, Subtitle, Title, Wrapper } from "./styles"

const linkStyle = {
  textDecoration: "none",
}

const Sidebar = ({ categories }) => {
  const { title } = useSiteMetadata()

  return (
    <Wrapper>
      <Content>
        <Link to="/" style={linkStyle}>
          <Title>{title}</Title>
        </Link>
        <Subtitle>Categories</Subtitle>
        <nav>
          <Categories>
            {categories.map(({ node: { name } }) => {
              if (name === "Main") return null
              return (
                <Link
                  key={name}
                  to={`/${name}`}
                  style={linkStyle}
                  activeStyle={{
                    color: "blue",
                  }}
                >
                  <li>{name}</li>
                </Link>
              )
            })}
          </Categories>
        </nav>
      </Content>
    </Wrapper>
  )
}

export default Sidebar
