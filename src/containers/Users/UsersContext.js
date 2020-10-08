import React, { createContext, useContext } from 'react'
import { node, arrayOf, oneOfType } from 'prop-types'
import { useUsers } from './useUsers'

const UsersContext = createContext({})
export const useUsersContext = () => useContext(UsersContext)

export const UsersProvider = ({ children }) => {
  return <UsersContext.Provider value={useUsers()}>{children}</UsersContext.Provider>
}

UsersProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}
