import type { NextApiRequest, NextApiResponse } from 'next'
import { gql, request } from 'graphql-request'

import { ResponseData } from './types'

const query = gql`
  query findUser($username: String!) {
    user(login: $username) {
      id
      avatarUrl
      bio
      name
      username: login
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
        ownerAffiliations: OWNER
      ) {
        totalCount
        nodes {
          url
          name
          stargazerCount
          forkCount
        }
      }
    }
  }
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { username } = req.query

  if (!username)
    return res.status(400).json({ message: 'Username is required' })

  const result: any = await request(
    'https://api.github.com/graphql',
    query,
    {
      username,
    },
    { authorization: `Bearer ${process.env.TOKEN}` }
  )

  res.send(result)
}
