import ProjectViewTitle from './ProjectViewTitle'
import ProjectViewTypes from './ProjectViewTypes'
import { ProjectViewForm } from './ProjectViewForm'
import { ProjectViewProvider } from './context'
import './style.css'

export const ProjectView = () => {
  return (
    <div className="view-form">
      <ProjectViewTitle />
      <ProjectViewProvider>
        <div className="flex w-full">
          <ProjectViewTypes />
          <div className="view-form-detail">
            <ProjectViewForm />
          </div>
        </div>
      </ProjectViewProvider>
    </div>
  )
}
