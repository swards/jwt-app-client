import React, { createContext, useContext } from 'react'
import { node, arrayOf, oneOfType } from 'prop-types'
import { useAuth } from './useAuth'

const AuthContext = createContext({})
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}
