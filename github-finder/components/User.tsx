import { useEffect, useState } from 'react'

import Card from './Card'
import { Data } from './types'

interface Props {
  data: Data
}

export default function User({ data }: Props) {
  return (
    <div data-testid="user-component">
      <Card user={data?.user} />
    </div>
  )
}
