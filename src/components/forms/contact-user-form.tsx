import React, { useEffect } from 'react'
import { useModal } from '../providers/modal-provider'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ContactUserFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form } from '../ui/form'

interface ContactUserFormProps {
    subaccountId: string
  }

const ContactUserForm = ({subaccountId}:ContactUserFormProps) => {
    const { setClose, data } = useModal()
    const router = useRouter()
    const form = useForm<z.infer<typeof ContactUserFormSchema>>({
      mode: 'onChange',
      resolver: zodResolver(ContactUserFormSchema),
      defaultValues: {
        name: '',
        email: '',
      },
    })
  
    useEffect(() => {
      if (data.contact) {
        form.reset(data.contact)
      }
    }, [data, form.reset])
  
    const isLoading = form.formState.isLoading

    const handleSubmit=async()=>{

    }
  return (
   <Card className='w-full'>
    <CardHeader>
    <CardTitle>Contact Info</CardTitle>
        <CardDescription>
          You can assign tickets to contacts and set a value for each contact in
          the ticket.
        </CardDescription>
    </CardHeader>
    <CardContent>
        <Form>
            
        </Form>
    </CardContent>


   </Card>
  )
}

export default ContactUserForm