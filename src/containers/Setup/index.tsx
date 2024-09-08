import './style.css'
import Terminal from './Terminal'

export default function Setup() {
  return <section id="setup">
    <div className="flex flex-col items-center">
      <h6 className="hl3">deployments</h6>
      <h2 className="h2 mt-[17px]">Run Namviek on<br />
        your own local machine
      </h2>
      <p className="pa1 mt-[37px]">If you are familiar with Docker<br />
        run the following command to build and use the app</p>

      <div className="mt-[115px] ">
        <Terminal />
      </div>
    </div>

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">

    </div>



  </section>
}
