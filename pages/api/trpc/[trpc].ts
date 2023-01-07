import * as trpcNext from '@trpc/server/adapters/next';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/_app';
import { getSession } from 'next-auth/react';
import {prisma} from '../../../prisma/client'
// export API handler
// @see https://trpc.io/docs/api-handler

export const createContext = async (opts: CreateNextContextOptions) => {
    const session = await getSession({ req: opts.req });
   
    return {
      session,
      prisma
    };
  };

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});