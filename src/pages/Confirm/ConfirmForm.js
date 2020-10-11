import React, { useEffect, useState } from 'react'
import { string } from 'prop-types'
import { useAuthContext } from 'containers/Auth'

export const ConfirmForm = ({ token }) => {
  const [user, setUser] = useState()
  const { confirm } = useAuthContext()

  const confirmUser = async () => {
    const foundUser = await confirm(token)
    setUser(foundUser)
  }

  useEffect(() => {
    confirmUser()
  }, [token, confirm])

  if (user) {
    return <div>{user.username} you are in!</div>
  }

  return <div>Confirming, hang on one sec...</div>
}

ConfirmForm.propTypes = {
  token: string
}

ConfirmForm.defaultProps = {
  token: ''
}
