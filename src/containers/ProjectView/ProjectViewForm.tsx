'use client'
import { useContext, useEffect } from 'react'
import { infoProjectView } from './type'
import { ProjectViewOptions } from './ProjectViewOptions'
import { Button } from '@/components/ui/Button'
import { ProjectViewContext } from './context'

export const ProjectViewForm = () => {
  const { active } = useContext(ProjectViewContext)
  const { desc, image, options, type } = infoProjectView[active]

  return (
    <div className='min-h-[500px]'>
      <img alt={desc} className="mb-8" src={image} />
      <div className="">
        <h2 className="mb-3 text-xl text-white">{type}</h2>
        <p className="mb-6 text-sm text-gray-500">{desc}</p>
        <ProjectViewOptions options={options} />
        <div className="text-right mt-6">
          <Button primary title={'Add board'} />
        </div>
      </div>
    </div>
  )
}
