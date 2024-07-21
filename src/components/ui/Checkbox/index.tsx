import './style.css'

const CheckboxControl = ({
  className,
  disabled,
  desc,
}: {
  className?: string
  disabled?: boolean
  desc?: string
}) => {
  const classNames = [
    'inp-checkbox',
    disabled ? 'disabled' : null,
    className,
  ].filter(Boolean)

  return (
    <div className={'form-control'}>
      <div className={classNames.join(' ')}>
        <div className="flex h-6 items-center">
          <input type="checkbox" />
        </div>
        {desc ? (
          <div className="pl-3 text-sm leading-6 text-gray-500">
            <label style={{ marginBottom: 0 }}>{desc}</label>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CheckboxControl
