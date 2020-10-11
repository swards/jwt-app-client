export const getConfirmation = token => {
  return window.fetch(`http://localhost:4000/confirmation?confirmation_token=${token}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}
