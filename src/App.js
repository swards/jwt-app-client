import React, { useState } from 'react';
import styles from './App.module.scss';

export const App = () => {
  const [ token, setToken ] = useState('')


  const login = async () => {
    const response = await window.fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: 'user@example.com',
          password: 'password'
        }
      })
    })
    const jwt = response.headers.get('Authorization')
    setToken(jwt)
  }

  const users = async () => {
    const response = await window.fetch('http://localhost:4000/users', {
      headers: {
        "Authorization" : `${token}`
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className={styles.app}>
      <button onClick={login}>Log in</button>
      { token ? <button onClick={users}>Users</button> : null }
    </div>
  );
}
