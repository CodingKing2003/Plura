import Unauthorized from '@/components/unauthorized'
import { verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children:React.ReactNode,
    params:{subaccountId:string}
}

const SubAccountLayout = async(props: Props) => {

    const agencyId=await verifyAndAcceptInvitation();
    if(!agencyId) return <Unauthorized />
    const user=await currentUser();

    if(!user){
        return redirect("/")
    }

  return (
    <div>SubAccountLayout</div>
  )
}

export default SubAccountLayout