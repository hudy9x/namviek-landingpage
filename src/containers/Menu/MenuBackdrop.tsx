'use client'

export default function MenuBackdrop() {
  const onClick = () => {
    const wrapper = document.querySelector('.mb-menu-wrapper')
    if (!wrapper) return

    wrapper.classList.remove('show')
  }

  return <div onClick={onClick} className='mb-menu-backdrop'></div>
}
