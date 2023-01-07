// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../prisma/client'
import { User } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>){

  res.status(200).json(await prisma.user.findMany())
}
