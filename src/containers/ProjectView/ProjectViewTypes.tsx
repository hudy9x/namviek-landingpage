import {
  otherViews,
  views,
} from './type'
import { ProjectViewList } from './ProjectViewList'

export default function ProjectViewTypes() {
  return (
    <div className="view-types">
      <ProjectViewList name='Popular' views={views}/>
      <ProjectViewList name='Other' views={otherViews} />
    </div>
  )
}
