import React, { useState } from 'react'
import { useAuthContext } from 'containers/Auth'

export const SignupForm = () => {
  const { signup } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSignup = event => {
    signup({ email, password, username })
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSignup}>
      <div>
        Email: <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      </div>
      <div>
        Password:{' '}
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        Username:{' '}
        <input
          name="username"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  )
}
