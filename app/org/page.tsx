'use client'

export default function TeamPage() {
  const executives = [
    {
      name: 'Venkat',
      role: 'Chief Technology Officer',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    },
    {
      name: 'Ananth Karthik',
      role: 'Chief Operations Officer',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    },
    {
      name: 'Raji Muthuramalingam',
      role: 'Head of Strategy',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
    },
    {
      name: 'Prasad',
      role: 'Head of Product',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    {
      name: 'Jyotsna Pandey',
      role: 'Head of Human Resources',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100 px-5 sm:px-6 md:px-10 py-12 sm:py-16 overflow-x-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 sm:mb-16 flex items-center justify-between">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111] tracking-tight">
            Org Chart
          </h1>

        </div>

        {/* CEO */}
        <div className="flex justify-center mb-10 sm:mb-12">

          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 sm:p-6 w-full max-w-[340px] relative">

            {/* CEO Image */}
            <div className="absolute -top-10 left-5 sm:left-6 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200">

              {/* Add image here */}
              {/* 
              <img
                src="/team/aashika.png"
                alt="Aashika Nethaji"
                className="w-full h-full object-cover"
              />
              */}

            </div>

            <div className="pt-10">

              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111] leading-tight">
                Aashika Nethaji
              </h2>

              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Chief Executive Officer
              </p>

            </div>

          </div>

        </div>

        {/* Connector Line */}
        <div className="w-full h-px bg-gray-300 mb-10 sm:mb-14"></div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {executives.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 sm:p-6 relative md:hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="absolute -top-9 left-5 sm:left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Content */}
              <div className="pt-8">

                <h3 className="text-lg sm:text-xl font-semibold text-[#111] leading-snug">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-1 text-sm sm:text-base leading-relaxed">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}