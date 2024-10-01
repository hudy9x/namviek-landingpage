'use client'
import { HiOutlineDuplicate } from "react-icons/hi"

export default function LineCopy({ command }: { command: string }) {
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(command)

  }
  return <HiOutlineDuplicate onClick={copyToClipboard} className='code-copy' />
}
