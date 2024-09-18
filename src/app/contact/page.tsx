import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'If you have any question, feel free to contact us',
}

export default function ContactPage() {
  return <>
    <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[150px]">
      <div className="flex flex-col items-center">
        <h6 className="hl1">Contact</h6>
        <h2 className="h2 mt-[17px]">Get in touch</h2>
        <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">We’re here to answer questions, share best practices, and demo Namviek to you and the rest of your engineering team.</p>

        <ContactForm />
      </div>

      <div className="absolute top-[342px] -left-[43%] -z-10">
        {/* <BgSpace /> */}

      </div>



    </section>
  </>
}
