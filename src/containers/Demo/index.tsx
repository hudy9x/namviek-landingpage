import Region from "./Region";

export default function DemoContainer() {
  return <section id="features" className="relative pt-[150px] sm:w-[1242px] mx-auto">
    <div className="flex flex-col items-center">
      <h6 className="hl1">Demo time</h6>
      <h2 className="h2 mt-[17px]">Experience Namviek<br />
        choose your region</h2>
      <p className="pa1 mt-[22px] sm:mt-[37px] w-[345px] sm:w-[628px]">{`I've just deployed Namviek on Virginia and Singapore servers for your testing. Explore its features and provide feedback.
`}</p>

      <div className="mt-[50px] w-full sm:mt-[115px] flex items-center justify-center">

        <Region />

      </div>
    </div>
  </section>
}
