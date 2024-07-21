'use client'
import { Dispatch, SetStateAction, createContext, useEffect } from 'react'
import { ReactNode, useState } from 'react'
import { EProjectViewType, ProjectViewType } from './type'

interface IProjectViewContext {
  active: ProjectViewType
  setActive: Dispatch<SetStateAction<ProjectViewType>>
}

export const ProjectViewContext = createContext<IProjectViewContext>({
  active: EProjectViewType.LIST,
  setActive: () => {}
})

export const ProjectViewProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<ProjectViewType>(EProjectViewType.LIST)
  return (
    <ProjectViewContext.Provider
      value={{ active, setActive }}
    >
      {children}
    </ProjectViewContext.Provider>
  )
}
