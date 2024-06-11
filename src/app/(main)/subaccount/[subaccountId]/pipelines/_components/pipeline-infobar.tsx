'use client'
import CreatePipelineForm from '@/components/forms/create-pipeline-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { useModal } from '@/components/providers/modal-provider'
import { Pipeline } from '@prisma/client'
import { Check, ChevronsUpDown, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  subAccountId: string
  pipelines: Pipeline[]
  pipelineId: string
}

const PipelineInfoBar = ({ pipelineId, pipelines, subAccountId }: Props) => {
  const { setOpen: setOpenModal } = useModal()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(pipelineId)
  const router = useRouter()

  const handleClickCreatePipeline = () => {
    setOpenModal(
      <CustomModal
        title="Create A Pipeline"
        subheading="Pipelines allows you to group tickets into lanes and track your business processes all in one place."
      >
        <CreatePipelineForm subAccountId={subAccountId} />
      </CustomModal>
    )
  }

  const handleSelectPipeline = (pipelineId: string) => {
    setValue(pipelineId)
    setOpen(false)
    router.push(`/subaccount/${subAccountId}/pipelines/${pipelineId}`)
  }

  return (
    <div>
      <div className="flex items-end gap-2">
        <Popover
          open={open}
          onOpenChange={setOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? pipelines.find((pipeline) => pipeline.id === value)?.name
                : 'Select a pipeline...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandEmpty>No pipelines found.</CommandEmpty>
              <CommandGroup>
                {pipelines.map((pipeline) => (
                  <CommandItem
                    key={pipeline.id}
                    value={pipeline.id}
                    onSelect={() => handleSelectPipeline(pipeline.id)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === pipeline.id ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {pipeline.name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <div className="p-2">
                <Button
                  variant="secondary"
                  className="flex gap-2 w-full mt-2"
                  onClick={handleClickCreatePipeline}
                >
                  <Plus size={15} />
                  Create Pipeline
                </Button>
              </div>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default PipelineInfoBar
