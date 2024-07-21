import { IProjectView } from './type'
import { ProjectViewItem } from './ProjectViewItem'
import { Fragment } from 'react'

export const ProjectViewList = ({
  views,
  name,
}: {
  views: IProjectView[]
  name: string
}) => {
  return (
    <Fragment>
      <div className="pl-3 text-[10px] uppercase text-gray-500">{name}</div>
      {views.map((view, viewIndex) => {
        return <ProjectViewItem view={view} key={viewIndex} />
      })}
    </Fragment>
  )
}
