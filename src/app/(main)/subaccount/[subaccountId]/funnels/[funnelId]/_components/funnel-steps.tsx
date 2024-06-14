"use client";

import { FunnelsForSubAccount } from '@/lib/types'
import { FunnelPage } from '@prisma/client'
import React from 'react'

type Props = {
  funnel: FunnelsForSubAccount
  subaccountId: string
  pages: FunnelPage[]
  funnelId: string
}

const FunnelSteps = ({funnel,subaccountId,pages,funnelId}:Props) => {
  return (
    <div>FunnelSteps</div>
  )
}

export default FunnelSteps