'use client'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e3a8a] to-[#2563eb] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5">Contact Aaruchudar</p>
          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Let’s Build Something Great.
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8">
            Reach out to discuss projects, partnerships, careers or innovative ideas. We’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-4xl font-bold mb-8">Send a Message</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600" />
                <input type="text" placeholder="Last Name" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600" />
              </div>

              <input type="email" placeholder="Email Address" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600" />
              <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600" />

              <textarea rows={6} placeholder="Your Message" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-blue-600 resize-none" />

              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold mb-6">Head Office</h3>
              <p className="text-gray-600 leading-8 text-lg">
                Aaruchudar Software Solutions Pvt. Ltd.<br />
                Chennai, Tamil Nadu, India
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-lg text-gray-600">
                <p>📧 hello@aaruchudar.com</p>
                <p>📞 +91 98765 43210</p>
                <p>🌐 www.aaruchudar.com</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-3xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-3 text-white/90 text-lg">
                <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
                <p>Saturday : 10:00 AM - 2:00 PM</p>
                <p>Sunday : Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden border border-gray-200 h-[420px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-xl">
          Google Map Embed Here
        </div>
      </section>
    </main>
  )
}