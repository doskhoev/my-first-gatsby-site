import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Navigation } from './navigation'

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 950px;
`

const Title = styled.h2`
  background: #aabbcc;
  padding: 20px;
  margin: 0;
`

export const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteHeader>
      <Title>{data.site.siteMetadata?.title}</Title>
      <Navigation />
    </SiteHeader>
  )
}
