"use client";

import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);
    alert("Thank you for contacting Aaruchudar. We’ll get back to you soon.");
  };

  return (
    <main className="min-h-screen text-black overflow-hidden">

      {/* HERO */}
      {/* HERO */}
<section className="relative py-24 px-6 text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />



  {/* Content — unchanged */}
  <div className="relative z-10">
    <div className="inline-block mb-6">
      <div className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold">
        Let's Connect
      </div>
    </div>

    <h1 className="text-7xl font-serif font-bold text-white mb-6">
      Aaruchudar
    </h1>

    <h2 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-6 text-white">
      Build Better Thinking
      <br />
      Together.
    </h2>

    <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
      Have a question, partnership idea, workshop request, or career interest?
      Reach out to us and let's explore how we can work together.
    </p>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="bg-[#f8fafc] py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Fill the form below and our team will contact you soon.
            </p>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb]"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb]"
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get in Touch
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Whether you're looking for programs, partnerships,
                workshops, or more information — we’re here to help.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Contact Details
              </h3>

              <div className="space-y-2 text-gray-600">
                <p>📧 hi@aaruchudar.com</p>
                <p>🌐 www.aaruchudar.com</p>
                <p>📍 Cheyyar, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 shadow-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white">
              <h3 className="text-xl font-bold mb-3">
                Working Hours
              </h3>

              <div className="space-y-2 text-white/90">
                <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
                <p>Saturday : 10:00 AM - 2:00 PM</p>
                <p>Sunday : Closed</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Why Contact Us?
              </h3>

              <div className="space-y-2 text-gray-600">
                <p>• Human Intelligence Programs</p>
                <p>• Workshops & Institutional Partnerships</p>
                <p>• Team Performance Training</p>
                <p>• Career Opportunities</p>
                <p>• General Enquiries</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}