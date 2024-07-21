import './style.css'

interface IButtonProps {
  title: string
  primary?: boolean
  className?: string
}

export const Button = ({ title, primary, className }: IButtonProps) => {
  const classes = [
    'btn',
    primary && 'btn-primary',
    title ? '' : 'notitle',
    className,
  ]
  return (
    <button
      className={classes.join(' ')}
    >
      {title}
    </button>
  )
}
