export type ProjectViewType =
  | 'DASHBOARD'
  | 'LIST'
  | 'BOARD'
  | 'CALENDAR'
  | 'GOAL'
  | 'TEAM'

export enum EProjectViewType {
  LIST = 'LIST',
  BOARD = 'BOARD',
  CALENDAR = 'CALENDAR',
  GOAL = 'GOAL',
  TEAM = 'TEAM',
  DASHBOARD = 'DASHBOARD',
}

export interface IProjectView {
  icon: string
  type: EProjectViewType
  title: string
  desc: string
}

export const views: IProjectView[] = [
  {
    icon: 'HiOutlineBars3CenterLeft',
    type: EProjectViewType.LIST,
    title: 'List',
    desc: 'Use List view to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
  },
  {
    icon: 'HiOutlineViewColumns',
    type: EProjectViewType.BOARD,
    title: 'Board',
    desc: 'Build your perfect Board and easily drag-and-drop tasks between columns.',
  },
  {
    icon: 'HiOutlineCalendar',
    type: EProjectViewType.CALENDAR,
    title: 'Calendar',
    desc: 'Calendar view is your place for planning, scheduling, and resource management.',
  },
]

export const otherViews: IProjectView[] = [
  {
    icon: 'HiOutlineRocketLaunch',
    type: EProjectViewType.GOAL,
    title: 'Goal',
    desc: 'Set multiple goals',
  },
  {
    icon: 'HiOutlineUserGroup',
    type: EProjectViewType.TEAM,
    title: 'Team',
    desc: 'Monitor what people are working on, what has been done, and who needs more tasks with Team view',
  },
  {
    icon: 'HiOutlineRectangleGroup',
    type: EProjectViewType.DASHBOARD,
    title: 'Dashboard',
    desc: 'Have a overlook view',
  },
]

interface IProjectViewForm {
  image: string
  type: ProjectViewType
  desc: string
  options: string[]
}

export type ProjectViewForm = {
  [key in ProjectViewType]: IProjectViewForm
}

const listProjectView = [
  {
    image: 'https://app-cdn.clickup.com/list.f86dfb81f1654e162b5d634824f7c6cc.svg',
    type: EProjectViewType.LIST,
    desc: 'Use List view to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
    options: [
      'Add some filter to make an unique view.',
      'Only me can see this view',
    ],
  },
  {
    image: 'https://app-cdn.clickup.com/board.907d1432b657468448e1ed65506b1184.svg',
    type: EProjectViewType.BOARD,
    desc: 'Build your perfect Board and easily drag-and-drop tasks between columns.',
    options: [
      'Add some filter to make an unique view.',
      'Only me can see this view',
    ],
  },
  {
    image: 'https://app-cdn.clickup.com/calendar.025fe36a51c85d765c298f091481e9e5.svg',
    type: EProjectViewType.CALENDAR,
    desc: 'Calendar view is your place for planning, scheduling, and resource management.',
    options: [
      'Add some filter to make an unique view.',
      'Only me can see this view',
    ],
  },
  {
    image: 'https://app-cdn.clickup.com/gantt.b90233aaab6b219a391e08b8b5186915.svg',
    type: EProjectViewType.GOAL,
    desc: 'Set multiple goals',
    options: ['Only me can see this view'],
  },
  {
    image: 'https://app-cdn.clickup.com/box.313feb9cad5a46534c65878666cb4e32.svg',
    type: EProjectViewType.TEAM,
    desc: 'Monitor what people are working on, what has been done, and who needs more tasks with Team view',
    options: ['Only me can see this view'],
  },
  {
    image: 'https://app-cdn.clickup.com/workload.8bdd1d1f836c77c96f8bc0c480e22b80.svg',
    type: EProjectViewType.DASHBOARD,
    desc: 'Have a overlook view',
    options: ['Only me can see this view'],
  },
]

export const infoProjectView: ProjectViewForm = {
    LIST: listProjectView[0],
    BOARD: listProjectView[1],
    CALENDAR: listProjectView[2],
    GOAL: listProjectView[3],
    TEAM: listProjectView[4],
    DASHBOARD: listProjectView[5],
}

