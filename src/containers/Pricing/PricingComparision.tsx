'use client'

import Link from "next/link";

const pricingData = {
  plans: [
    { name: "3 Month" },
    { name: "Lifetime" }
  ],
  sections: [
    {
      title: "Codebase",
      features: [
        { name: "List view", threeMonth: true, lifetime: true },
        { name: "Board view", threeMonth: true, lifetime: true },
        { name: "Calendar view", threeMonth: true, lifetime: true },
        { name: "Goal view", threeMonth: true, lifetime: true },
        { name: "Project setting", threeMonth: true, lifetime: true },
        { name: "Online Meeting", threeMonth: true, lifetime: true },
        { name: "Others", threeMonth: true, lifetime: true },
      ]
    },
    {
      title: "Setup document",
      features: [
        { name: "Local setup", threeMonth: true, lifetime: true },
        { name: "Aws Lightsail setup", threeMonth: true, lifetime: true },
        { name: "Digital Ocean setup", threeMonth: true, lifetime: true },
        { name: "Render setup", threeMonth: true, lifetime: true },
        { name: "Vercel setup", threeMonth: true, lifetime: true },
        { name: "Netlify setup", threeMonth: true, lifetime: true },
      ]
    },
    {
      title: "Integration document",
      features: [
        { name: "Gmail authentication", threeMonth: true, lifetime: true },
        { name: "Email Notification", threeMonth: true, lifetime: true },
        { name: "Push Notification", threeMonth: true, lifetime: true },
        { name: "AWS S3 storage", threeMonth: true, lifetime: true },
      ]
    },
    {
      title: "Development document",
      features: [
        { name: "Create a new custom view", threeMonth: false, lifetime: true },
        { name: "Custom field feature", threeMonth: false, lifetime: true },
        { name: "Comming soon ...", threeMonth: false, lifetime: true },
      ]
    },
    {
      title: "Others",
      features: [
        { name: "Email support", threeMonth: true, lifetime: true },
        { name: "Video tutorial", threeMonth: true, lifetime: true },
      ]
    }
  ]
};

export default function PricingComparison() {
  return (
    <div id="price-include" className="max-w-4xl mx-auto p-4 pt-[300px]">
      <div className="flex flex-col items-center mb-20">
        <h6 className="hl2">Pricing Detail</h6>
        <h2 className="h2 mt-[17px]">See all <br />{`what's in the pack`}</h2>
        <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Once you've paid for either the 3-month or lifetime plan, you'll be able to check out all the documents on <Link href="https://docs.namviek.com" className="underline">docs.namviek.com</Link>.</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1"></div>
        {pricingData.plans.map((plan, index) => (
          <div key={index} className="col-span-1 text-center">
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
          </div>
        ))}
      </div>

      {pricingData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="space-y-4">
            {section.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-3 gap-8 py-2 border-b border-gray-900">
                <div className="col-span-1 text-gray-500">{feature.name}</div>
                <div className="col-span-1 text-center">
                  {renderFeatureValue(feature.threeMonth)}
                </div>
                <div className="col-span-1 text-center">
                  {renderFeatureValue(feature.lifetime)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function renderFeatureValue(value: boolean) {
  return value ? <CheckIcon /> : <MinusIcon />;
}

function CheckIcon({ className = "w-6 h-6 text-green-500 mx-auto" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function MinusIcon({ className = "w-6 h-6 text-gray-400 mx-auto" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  )
}
