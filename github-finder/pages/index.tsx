import { useRef, useState } from 'react'

import Layout from '@/components/Layout'
import Search from '@/components/Search'
import User from '@/components/User'

export default function Home() {
  const [username, setUsername] = useState<string>('')

  return (
    <Layout>
      <Search setUsername={setUsername} />
      <User username={username} />
    </Layout>
  )
}
