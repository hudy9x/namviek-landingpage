import CheckboxControl from '@/components/ui/Checkbox'

export const ProjectViewOptions = ({ options }: { options: string[] }) => {
  return options.map((v, i) => <CheckboxControl key={i} desc={v} />)
}
