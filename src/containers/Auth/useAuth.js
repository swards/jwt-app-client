import { postLogin } from './services/postLogin'
import { postSignup } from './services/postSignup'
import { deleteToken } from './services/deleteToken'
import { postConfirmation } from './services/postConfirmation'
import { useState } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState('')
  const [currentUser, setCurrentUser] = useState('')

  const login = async ({ email, password }) => {
    const response = await postLogin(email, password)
    const body = await response.json()
    setCurrentUser(body)
    setToken(response.headers.get('Authorization'))
  }

  const signup = async params => {
    const response = await postSignup(params)
    console.log(response)
  }

  const confirm = async params => {
    await postConfirmation(params)
  }

  const logout = async () => {
    await deleteToken()
    setToken('')
  }

  return { login, logout, signup, confirm, currentUser, token }
}
