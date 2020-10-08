export const getUsers = async token => {
  return await window.fetch('http://localhost:4000/users', {
    headers: {
      Authorization: token
    }
  })
}
