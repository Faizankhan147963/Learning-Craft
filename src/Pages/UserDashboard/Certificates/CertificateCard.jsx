import { Award, Download, Share2 } from "lucide-react"

const CertificateCard = ({ certificate }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:shadow-md">
      <div className="relative">
        <img
          src={certificate.image || "/placeholder.svg"}
          alt={`${certificate.title} Certificate`}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm font-medium text-white">Certificate of Completion</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{certificate.title}</h3>
        <p className="mt-1 text-sm text-gray-500">Issued on: {certificate.issueDate}</p>
        <p className="text-sm text-gray-500">Instructor: {certificate.instructor}</p>

        <div className="mt-2">
          <p className="text-xs text-gray-500">Credential ID: {certificate.credentialId}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {certificate.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Download className="mr-1 h-4 w-4" />
            Download
          </button>
          <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard

