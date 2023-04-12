import { useEffect, useState } from 'react'

import { Data } from '@/components//types'
import Error from '@/components/Error'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import NoUser from '@/components/NoUser'
import Search from '@/components/Search'
import User from '@/components/User'
import { fetcher } from '@/utils'
import useSwr from 'swr'

export default function Home() {
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState<string>('')
  const { data, error, isValidating } = useSwr<Data, Boolean>(
    username && `/api/user?username=${username}`,
    fetcher
  )

  useEffect(() => {
    if (error) {
      setErrorMessage('No user found')
    } else {
      setErrorMessage('')
    }
  }, [error])
  return (
    <Layout>
      <Search setUsername={setUsername} />
      {error && <Error message={errorMessage} />}
      {isValidating && <Loader />}
      {data?.user === undefined && !error && !isValidating && <NoUser />}
      {!error && data !== undefined && !isValidating && <User data={data} />}
    </Layout>
  )
}
