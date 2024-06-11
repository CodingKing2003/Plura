"use client";

import { TicketFormSchema, TicketWithTags } from '@/lib/types'
import React, { useRef, useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useModal } from '../providers/modal-provider';
import { useRouter } from 'next/navigation';

import { z } from 'zod';
import { Contact, Tag, User } from '@prisma/client';

type Props = {
    laneId: string
    subaccountId: string
    getNewTicket: (ticket: TicketWithTags[0]) => void
  }

const TicketForm = ({laneId,subaccountId,getNewTicket}:Props) => {
    const { data: defaultData, setClose } = useModal()
    const router = useRouter()
    const [tags, setTags] = useState<Tag[]>([])
    const [contact, setContact] = useState('')
    const [search, setSearch] = useState('')
    const [contactList, setContactList] = useState<Contact[]>([])
    const saveTimerRef = useRef<ReturnType<typeof setTimeout>>()
    const [allTeamMembers, setAllTeamMembers] = useState<User[]>([])
    const [assignedTo, setAssignedTo] = useState(
      defaultData.ticket?.Assigned?.id || ''
    )

    const form = useForm<z.infer<typeof TicketFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(TicketFormSchema),
        defaultValues: {
          name: defaultData.ticket?.name || '',
          description: defaultData.ticket?.description || '',
          value: String(defaultData.ticket?.value || 0),
        },
      })
      const isLoading = form.formState.isLoading
  return (
    <Card className='w-full'>
        <CardHeader>
            <CardTitle>Ticket Details</CardTitle>

        </CardHeader>

    </Card>
  )
}

export default TicketForm


