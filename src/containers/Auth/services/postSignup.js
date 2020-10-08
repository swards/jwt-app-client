export const postSignup = ({ email, password, username }) => {
  return window.fetch('http://localhost:4000/signup', {
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
