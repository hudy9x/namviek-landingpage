import { memo } from 'react'
import { IconBaseProps, IconType } from 'react-icons/lib'
import {
  HiOutlineBars3CenterLeft,
  HiOutlineViewColumns,
  HiOutlineCalendar,
  HiOutlineRocketLaunch,
  HiOutlineRectangleGroup,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

const icons: { [key: string]: IconType } = {
  HiOutlineViewColumns,
  HiOutlineBars3CenterLeft,
  HiOutlineCalendar,
  HiOutlineRocketLaunch,
  HiOutlineRectangleGroup,
  HiOutlineUserGroup,
}

interface typesPropsIcon {
  name: string
  propsIcon?: IconBaseProps
}

function DynamicIcon({ name, propsIcon }: typesPropsIcon) {
  if (name in icons) {
    const Icon = icons[name] as IconType
    return <Icon />
  }

  return null
}

export default memo(DynamicIcon)
