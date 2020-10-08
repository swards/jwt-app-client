import React, { useState } from 'react'
import styles from './components/App/App.module.scss'

export const App = () => {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [users, setUsers] = useState('')

  const login = async () => {
    const response = await window.fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
    const jwt = response.headers.get('Authorization')
    setToken(jwt)
  }

  const getUsers = async () => {
    const response = await window.fetch('http://localhost:4000/users', {
      headers: {
        Authorization: `${token}`
      }
    })
    const data = await response.json()
    setUsers(data)
  }

  const user = async () => {
    const response = await window.fetch('http://localhost:4000/current', {
      headers: {
        Authorization: `${token}`
      }
    })
    const data = await response.json()
    console.log(data)
  }

  const signup = async () => {
    const response = await window.fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          username
        }
      })
    })
  }

  const signupForm = () => {
    return (
      <div>
        <h3>Sign up</h3>
        <div>
          Email:{' '}
          <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
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
        <button onClick={signup}>Sign up</button>
      </div>
    )
  }

  const loginForm = () => {
    return (
      <div>
        <h3>Log in</h3>
        <div>
          Email:{' '}
          <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
        </div>
        <div>
          Password:{' '}
          <input
            name="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Log In</button>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <div>
        {token ? <button onClick={getUsers}>Users</button> : null}
        {token ? <button onClick={user}>Current</button> : null}
      </div>
    </div>
  )
}
