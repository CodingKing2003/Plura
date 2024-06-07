import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

type Props = {
    params: { agencyId: string }
  }

const page = async({params}:Props) => {
    const authUser=await currentUser();
    if(!authUser) return null;

    const userDetails = await db.user.findUnique({
        where: {
          email: authUser.emailAddresses[0].emailAddress,
        },
      })
    
      if (!userDetails) return null
      const agencyDetails = await db.agency.findUnique({
        where: {
          id: params.agencyId,
        },
        include: {
          SubAccount: true,
        },
      })
    
      if (!agencyDetails) return null
    
      const subAccounts = agencyDetails.SubAccount

  return (
    <div>page</div>
  )
}

export default page