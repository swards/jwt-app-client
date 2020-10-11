import React from 'react'
import queryString from 'query-string'
import { Page } from 'components/Page'
import { ConfirmForm } from './ConfirmForm'

export const Confirm = ({ location }) => {
  const params = queryString.parse(location.search)
  return (
    <Page>
      <h1>Confirm you email address</h1>
      <ConfirmForm token={params.confirmation_token} />
    </Page>
  )
}
