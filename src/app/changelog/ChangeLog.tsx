import Image from "next/image"
import { HiOutlineCalendar } from "react-icons/hi2"

export default function Changelog() {
  const changelogEntries = [
    {
      date: "2023-10-15",
      version: "v1.2.0",
      title: "Dark Mode and Performance Boost",
      image: "/placeholder.svg?height=200&width=400",
      description: "Introducing dark mode support and significant performance improvements for large datasets. We've also squashed some pesky bugs in the search functionality.",
      changes: [
        "Added dark mode support",
        "Improved performance for large datasets",
        "Fixed bug in search functionality"
      ]
    },
    {
      date: "2023-09-30",
      version: "v1.1.5",
      title: "Export Options and UI Refinements",
      description: "This update focuses on expanding export capabilities and polishing the user interface for a smoother experience.",
      changes: [
        "Updated dependencies to latest versions",
        "Added new export options",
        "Fixed minor UI inconsistencies"
      ]
    },
    {
      date: "2023-09-15",
      version: "v1.1.0",
      title: "New Dashboard and User Customization",
      image: "/placeholder.svg?height=200&width=400",
      description: "A major update bringing a fresh new dashboard layout and enhanced user profile options. We've also improved our error handling to provide clearer feedback.",
      changes: [
        "Introduced new dashboard layout",
        "Added user profile customization options",
        "Improved error handling and messaging"
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Changelog</h1>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          {changelogEntries.map((entry, index) => (
            <div key={index} className="mb-16 relative">
              <div className="flex flex-col md:flex-row items-center">
                {/* Date and Version (left side) */}
                <div className="w-full md:w-1/2 pr-8 md:pr-12 mb-4 md:mb-0 flex flex-col items-start md:items-end">
                  <div className="bg-white shadow overflow-hidden rounded-lg p-4 inline-block">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <HiOutlineCalendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <time dateTime={entry.date}>{entry.date}</time>
                    </div>
                    <p className="text-lg font-medium text-primary">{entry.version}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary rounded-full"></div>

                {/* Content (right side) */}
                <div className="w-full md:w-1/2 pl-0 md:pl-12">
                  <div className="bg-white shadow overflow-hidden rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{entry.title}</h2>
                    {entry.image && (
                      <Image
                        src={entry.image}
                        alt={`Image for ${entry.title}`}
                        width={400}
                        height={200}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                    )}
                    <p className="text-gray-600 mb-4">{entry.description}</p>
                    {entry.changes && (
                      <ul className="text-sm text-gray-500 list-disc list-inside">
                        {entry.changes.map((change, changeIndex) => (
                          <li key={changeIndex}>{change}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
