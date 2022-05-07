import React from 'react'
import styled from 'styled-components'
import { Navigation } from './navigation'

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 950px;
`

export const Header = () => {
  return (
    <SiteHeader>
      <Navigation />
    </SiteHeader>
  )
}
