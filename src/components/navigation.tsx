import { Link } from 'gatsby'
import * as React from 'react'

export const Navigation = () => {
  return (
    <div>
      <Link to="/">{'Главная'}</Link>
      <Link to="/about">{'О нас'}</Link>
    </div>
  )
}
