export const postLogin = (email, password) => {
  return window.fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      user: {
        email,
        password
      }
    })
  })
}