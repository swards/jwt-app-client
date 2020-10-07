export const Login = () => {
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
  return
}