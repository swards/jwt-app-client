import React from 'react'
import { Link } from '@reach/router'
import styles from './AppHeader.module.scss'
import { useAuthContext } from '../../containers/Auth'

export const AppHeader = () => {
  const { currentUser } = useAuthContext()
  return (
    <div className={styles.header}>
      <div className={styles.branding}>JWT App</div>
      <div className={styles.nav}>
        {currentUser ? <div>Welcome {currentUser.username}</div> : null}
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}
