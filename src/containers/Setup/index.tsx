import { GoDuplicate } from 'react-icons/go'
import './terminal.css'
import { BiDuplicate } from 'react-icons/bi'
import { HiOutlineDuplicate } from 'react-icons/hi'
export default function Setup() {
  return <section id="setup" className="relative w-[1242px] mx-auto mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">deployments</h6>
      <h2 className="h2 mt-[17px]">Run Namviek on<br />
        your own local machine
      </h2>
      <p className="pa1 mt-[37px]">If you are familiar with Docker<br />
        run the following command to build and use the app</p>

      <div className="mt-[115px] ">
        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-btn"></div>
            <div className="terminal-btn"></div>
            <div className="terminal-btn"></div>
          </div>
          <div className="terminal-content">
            <div className='line'>
              <span>user@user-mac</span>
              <span>~</span>
              <span>$ cp .env.example .env.local</span>
              <HiOutlineDuplicate className='code-copy' />
            </div>
            <div className='line'>
              <span>user@user-mac</span>
              <span>~</span>
              <span>$ cp .env.example .env.local</span>
              <HiOutlineDuplicate className='code-copy' />
            </div>
            <div className='line'>
              <span>user@user-mac</span>
              <span>~</span>
              <span>$ cp .env.example .env.local</span>
              <HiOutlineDuplicate className='code-copy' />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">

    </div>



  </section>
}
