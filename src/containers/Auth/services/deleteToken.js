export const deleteToken = () => {
  return window.fetch('http://localhost:4000/login', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}
