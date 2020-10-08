import React from 'react'
import { Link } from '@reach/router'

export const NotFound = () => (
  <div>
    <p>Feeling out of place?</p>
    <Link to="/">
      <span role="img" aria-label="Home">
        🏠
      </span>
      {` `}
      Head back home
    </Link>
  </div>
)
