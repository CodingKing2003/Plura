import { Pipeline } from '@prisma/client'
import React from 'react'

interface CreatePipelineFormProps {
    defaultData?: Pipeline
    subAccountId: string
  }

const CreatePipelineForm = ({defaultData,subAccountId}:CreatePipelineFormProps) => {
  return (
    <div>CreatePipelineForm</div>
  )
}

export default CreatePipelineForm