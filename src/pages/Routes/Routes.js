import React from 'react'
import { Router } from '@reach/router'
import { useAuthContext } from 'containers/Auth'
import { Home } from 'pages/Home'
import { Users } from 'pages/Users'
import { NotFound } from 'pages/NotFound'
import { Signup } from 'pages/Signup'
import { Login } from 'pages/Login'
import styles from './Routes.module.scss'

export const Routes = () => {
  const { currentUser } = useAuthContext()

  return (
    <Router className={styles.routeContents} primary={false}>
      <Home path="/" currentUser={currentUser} />
      <Users path="/users" />
      <Login path="/login" />
      <Signup path="/signup" />
      <NotFound default />
    </Router>
  )
}
