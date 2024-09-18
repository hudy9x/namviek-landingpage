'use client'
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullname] = useState('')
  const [body, setBody] = useState('')

  const getHref = () => {

    if (!fullName || !body) return '';
    if (fullName.length < 3) {

      return ''
    }

    if (body.length < 20) return '';

    return `mailto:hi@hudy9x.com?subject=Request support from ${fullName}&body=${body}`
  }

  return <div className="mt-[50px] sm:mt-[115px] w-[95%] sm:w-[500px] flex flex-col gap-4">


    <div className='form-control col'>
      <label>Fullname</label>
      <input className="form-input" value={fullName} onChange={ev => setFullname(ev.target.value)} />
    </div>


    <div className='form-control col'>
      <label>Message</label>
      <textarea rows={7} className="form-input" value={body} onChange={ev => setBody(ev.target.value)} ></textarea>
    </div>

    <div className="mt-2">
      <Link href={getHref()} className="cta-btn1 block text-center">Submit</Link>
    </div>


  </div>
}
