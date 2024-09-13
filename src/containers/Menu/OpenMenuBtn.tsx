'use client'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function OpenMenuBtn() {
  const onClick = () => {
    const wrapper = document.querySelector('.mb-menu-wrapper')
    if (!wrapper) return

    wrapper.classList.add('show')
  }

  return <HiOutlineBars3BottomRight onClick={onClick} className='w-5 h-5 sm:hidden' />
}
