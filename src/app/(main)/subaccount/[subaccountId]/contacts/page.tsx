import BlurPage from '@/components/global/blur-page'
import { db } from '@/lib/db'
import { Contact, SubAccount, Ticket } from '@prisma/client'
import React from 'react'
import CraeteContactButton from './_components/create-contact-btn'

type Props = {
    params: { subaccountId: string }
  }

const ContactPage = async({params}:Props) => {
    type SubAccountWithContacts=SubAccount & {
        Contact:(Contact & {Ticket:Ticket[]})[]
    }

    const contacts=await db.subAccount.findUnique({
        where:{
            id:params.subaccountId
        },
        include:{
            Contact:{
                include:{
                    Ticket:{
                        select:{
                            value:true
                        }
                    }
                },
                orderBy:{
                    createdAt:"asc"
                }
            }
        }
    }) as SubAccountWithContacts

    const allContacts = contacts.Contact

    const formatTotal = (tickets: Ticket[]) => {
        if (!tickets || !tickets.length) return '$0.00'
        const amt = new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'USD',
        })
    
        const laneAmt = tickets.reduce(
          (sum, ticket) => sum + (Number(ticket?.value) || 0),
          0
        )
    
        return amt.format(laneAmt)
      }
  return (
    <BlurPage>
        <h1 className="text-4xl p-4">Contacts</h1>
        <CraeteContactButton subaccountId={params.subaccountId} />
    </BlurPage>
  )
}

export default ContactPage