import { TicketWithTags } from '@/lib/types'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    setAllTickets: Dispatch<SetStateAction<TicketWithTags>>
    ticket: TicketWithTags[0]
    subaccountId: string
    allTickets: TicketWithTags
    index: number
  }

const PipelineTicket = ({setAllTickets,ticket,subaccountId,allTickets,index}:Props) => {
  return (
    <div>PipelineTicket</div>
  )
}

export default PipelineTicket