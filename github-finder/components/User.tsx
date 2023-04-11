import { useEffect, useState } from 'react'

import Card from './Card'
import { fetcher } from '@/utils'
import useSwr from 'swr'
import { Data, User } from './types'

interface Props {
  username: string
}

export default function User({ username }: Props) {
  const [errorMessage, setErrorMessage] = useState('')
  const { data, error, isValidating } = useSwr<Data, Boolean>(
    username && `/api/user?username=${username}`,
    fetcher
  )

  useEffect(() => {
    if (error) {
      setErrorMessage('No matches found')
    } else {
      setErrorMessage('')
    }
  }, [error])

  if (isValidating)
    return <p className="m-4 flex items-center justify-center">Loading...</p>

  if (data?.user === undefined && !errorMessage)
    return (
      <p
        className="m-4 flex items-center justify-center"
        data-testid="no-user-message"
      >
        Search some user
      </p>
    )

  return (
    <div data-testid="user-component">
      {errorMessage && !isValidating ? (
        <p
          className="m-4 flex items-center justify-center"
          data-testid="error-message"
        >
          {errorMessage}
        </p>
      ) : (
        <Card user={data?.user} />
      )}
    </div>
  )
}
