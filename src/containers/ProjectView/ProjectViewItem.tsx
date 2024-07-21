'use client'
import React, { useContext } from 'react';
import DynamicIcon from '@/components/DynamicIcon'
import { ProjectViewContext } from './context'
import { IProjectView } from './type'

export const ProjectViewItem = ({ view, key }: { view: IProjectView, key: number }) => {
  const { active, setActive } = useContext(ProjectViewContext)

  const { icon, title, type } = view
  const isActive = type === active
  return (
    <div
      className={`view-item ${isActive ? 'active' : ''}`}
      key={key}
      onClick={() => {
        setActive(type)
      }}
    >
      <DynamicIcon name={icon} />
      {title}
    </div>
  )
}
