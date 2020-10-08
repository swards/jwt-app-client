import React from 'react'
import { AuthProvider } from 'containers/Auth'
import { UsersProvider } from 'containers/Users'
import { Routes } from 'pages/Routes'
import { AppHeader } from 'components/AppHeader'
import styles from './App.module.scss'

export const App = () => {
  return (
    <AuthProvider>
      <UsersProvider>
        <div className={styles.app}>
          <AppHeader />
          <Routes />
        </div>
      </UsersProvider>
    </AuthProvider>
  )
}
