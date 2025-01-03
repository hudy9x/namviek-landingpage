import Region from "./Region";

export default function DemoContainer() {
  return <section id="features" className="relative pt-[100px] sm:pt-[150px] sm:w-[1242px] mx-auto">
    <div className="flex flex-col items-center">
      <h6 className="hl1">Demo time</h6>
      <h2 className="h2 mt-[17px]">Experience Namviek<br />
        choose your region</h2>
      <p className="pa1 mt-[22px] sm:mt-[37px] w-[345px] sm:w-[628px]">{`I've just deployed Namviek on Virginia and Singapore servers for your testing. Explore its features and provide feedback.
`}</p>

      <div className="flex mt-[50px] w-full sm:mt-[115px] items-center justify-center">
        <Region />
      </div>
      <p className="hidden sm:block mt-[50px] py-3 px-4 text-zinc-400 rounded-full border border-zinc-600 bg-zinc-900 text-sm ">
        Click on the region to open demo page
      </p>
    </div>
  </section>
}
