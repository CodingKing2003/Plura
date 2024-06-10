
import { getPipelineDetails } from '@/lib/queries'
import { redirect } from 'next/navigation'
import React from 'react'

type Props={
    params:{
        subaccountId:string,
        pipelineId:string
    }
}

const PipelineIdPage = async({params}:Props) => {
    const pipelineDetails=await getPipelineDetails(params.pipelineId)
    if (!pipelineDetails)
        return redirect(`/subaccount/${params.subaccountId}/pipelines`)
    
  return (
    <div>PipelineIdPage</div>
  )
}

export default PipelineIdPage