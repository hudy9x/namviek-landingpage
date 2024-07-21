import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export default function ProjectViewTitle() {
  return (
    <div className="view-name-input">
      <HiOutlineBars3CenterLeft />
      <input
        placeholder="View name here ..."
        className="text-sm"
      />
    </div>
  )
}