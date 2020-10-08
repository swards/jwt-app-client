import React from 'react'
import { useUsersContext } from 'containers/Users'

export const UsersList = () => {
  const { users } = useUsersContext()

  if (!users || !users.length) {
    return <div>No users found</div>
  }

  return (
    <ul>
      {users.map(user => (
        <li>{user.username}</li>
      ))}
    </ul>
  )
}
