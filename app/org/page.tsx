'use client'

export default function TeamPage() {
  const executives = [
    { name: 'Venkat', role: 'Chief Technology Officer' },
    { name: 'Ananth Karthik', role: 'Chief Operations Officer' },
    { name: 'Raji Muthuramalingam', role: 'Head of Strategy' },
    { name: 'Prasad', role: 'Head of Product' },
    { name: 'Jyotsna Pandey', role: 'Head of Human Resources' },
  ]

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#111]">Org Chart</h1>

          
        </div>

        {/* CEO */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 w-[320px] relative">
            <div className="absolute -top-8 left-6 w-16 h-16 rounded-full bg-[#0f1f45] text-white flex items-center justify-center text-xl font-bold border-4 border-white">
              A
            </div>

            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-[#111]">
                Aashika Nethaji
              </h2>
              <p className="text-gray-500 mt-1">Chief Executive Officer</p>
            </div>
          </div>
        </div>

        {/* Connector Line */}
        <div className="w-full h-px bg-gray-300 mb-14"></div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8">
          {executives.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative hover:shadow-xl transition"
            >
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-[#1e40af] text-white flex items-center justify-center text-lg font-bold border-4 border-white">
                {member.name.charAt(0)}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-semibold text-[#111]">
                  {member.name}
                </h3>
                <p className="text-gray-500 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}