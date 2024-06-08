import { SubAccount, User } from '@prisma/client'
import React from 'react'

type Props = {
    id: string | null
    type: 'agency' | 'subaccount'
    userData?: Partial<User>
    subAccounts?: SubAccount[]
  }

const UserDetails = ({id,type,userData,subAccounts}:Props) => {
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails