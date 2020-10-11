import Jsona from 'jsona'
import { postLogin } from './services/postLogin'
import { postSignup } from './services/postSignup'
import { deleteToken } from './services/deleteToken'
import { getConfirmation } from './services/getConfirmation'
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

  const confirm = async token => {
    try {
      const dataFormatter = new Jsona()
      const response = await getConfirmation(token)
      const responseData = await response.json()
      console.log(responseData)
      return dataFormatter.deserialize(responseData)
    } catch {
      return 'Something went wrong, the token may not be good anymore'
    }
  }

  const logout = async () => {
    await deleteToken()
    setToken('')
  }

  return { login, logout, signup, confirm, currentUser, token }
}
