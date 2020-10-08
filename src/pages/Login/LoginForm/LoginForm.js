import React, { useState } from 'react'
import { useAuthContext } from 'containers/Auth'

export const LoginForm = () => {
  const { login } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = event => {
    login({ email, password })
    event.preventDefault()
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        Email: <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      </div>
      <div>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  )
}
