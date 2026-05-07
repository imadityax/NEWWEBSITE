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

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setIsSubmitting(false);

    if (data.success) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 text-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">

          <div className="inline-block mb-5 sm:mb-6">

            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-semibold">
              Let's Connect
            </div>

          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-5 sm:mb-6 leading-none">
            Aaruchudar
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-5 sm:mb-6 text-white">
            Build Better Thinking
            <br />
            Together.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-7 sm:leading-relaxed">
            Have a question, partnership idea, workshop request,
            or career interest? Reach out to us and let's explore
            how we can work together.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#f8fafc] py-14 sm:py-20 md:py-24 px-5 sm:px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">

          {/* FORM */}
          <div className="bg-white rounded-[2rem] p-5 sm:p-8 shadow-xl border border-gray-100">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
              Fill the form below and our team will contact you soon.
            </p>

            <div className="space-y-4 sm:space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] text-sm sm:text-base"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 outline-none focus:border-[#2563eb] text-sm sm:text-base"
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-semibold text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </div>

          </div>

          {/* INFO */}
          <div className="space-y-5 sm:space-y-6">

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get in Touch
              </h3>

              <p className="text-gray-600 leading-7">
                Whether you're looking for programs, partnerships,
                workshops, or more information — we’re here to help.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Contact Details
              </h3>

              <div className="space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed">

                <p>📧 hi@aaruchudar.com</p>
                <p>🌐 www.aaruchudar.com</p>
                <p>📍 Cheyyar, Tamil Nadu, India</p>

              </div>

            </div>

            <div className="rounded-2xl p-5 sm:p-6 shadow-xl bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white">

              <h3 className="text-xl font-bold mb-3">
                Working Hours
              </h3>

              <div className="space-y-2 text-white/90 text-sm sm:text-base">

                <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
                <p>Saturday : 10:00 AM - 2:00 PM</p>
                <p>Sunday : Closed</p>

              </div>

            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Why Contact Us?
              </h3>

              <div className="space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed">

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