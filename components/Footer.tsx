const offices = [
  {
    label: 'Office',
    address: '477 Girona Ave, Neuremean, 13883, India',
  },
  {
    label: 'Offices',
    address: '2763 Manson Ave, Savety Road, Canada, Canada',
  },
  {
    label: 'Office',
    address: '2516 Elrain Ave, Southmew 11032, Canada, USA',
  },
  {
    label: 'Enquiry',
    address: 'Aasonaden Street, Canada 61160 Ecwers, Power Beam, USA',
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Aaruchudar</h3>
          <div className="flex gap-3">
            {['instagram', 'facebook', 'linkedin', 'twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2d0a4e] hover:text-white transition-colors text-gray-600 text-xs font-medium"
                aria-label={social}
              >
                {social[0].toUpperCase()}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Enquiry email@aaruchudar.com</p>
        </div>

        {/* Offices */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {offices.map((office, i) => (
            <div key={i}>
              <p className="text-xs font-semibold text-gray-900 mb-1">{office.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-gray-400">Aaruchudar</p>
        <p className="text-xs text-gray-400">© Copyright of Aaruchudar</p>
      </div>
    </footer>
  )
}
