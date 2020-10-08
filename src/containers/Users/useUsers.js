import { useEffect, useState } from 'react'
import { getUsers } from './services/getUsers'
import { useAuthContext } from 'containers/Auth'

export const useUsers = () => {
  const { token } = useAuthContext()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await getUsers(token)
      const users = await response.json()
      setUsers(users)
    }
    if (token) {
      loadUsers()
    }
  }, [token])

  return { users }
}
