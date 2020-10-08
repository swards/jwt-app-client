import React from 'react'
import { UsersList } from './UsersList'
import { Page } from 'components/Page'

export const Users = () => {
  return (
    <Page>
      <h1>Users Page</h1>
      <UsersList />
    </Page>
  )
}
