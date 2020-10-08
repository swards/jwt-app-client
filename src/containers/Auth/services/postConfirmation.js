export const postConfirmation = params => {
  return window.fetch('http://localhost:4000/confirmation', {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
}
