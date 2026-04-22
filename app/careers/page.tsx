"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isGeneralApply, setIsGeneralApply] = useState(false);

  const categories = [
    "All",
    "Creative",
    "Research",
    "Growth",
    "Leadership",
  ];

  const jobs = [
    {
      title: "Video Editor",
      category: "Creative",
      location: "Cheyyar / Hybrid",
      type: "Full Time",
    },
    {
      title: "Biomedical Engineer",
      category: "Research",
      location: "Cheyyar / Hybrid",
      type: "Full Time",
    },
    {
      title: "Content Creator",
      category: "Creative",
      location: "Hybrid",
      type: "Full Time",
    },
    {
      title: "Research Intern",
      category: "Research",
      location: "Cheyyar / Hybrid",
      type: "Internship",
    },
    {
      title: "Business Development Professional",
      category: "Growth",
      location: "Tamil Nadu",
      type: "Full Time",
    },
    {
      title: "Founder’s Office Intern",
      category: "Leadership",
      location: "In Office",
      type: "Full Time",
    },
  ];

  const benefits = [
    {
      title: "Meaningful Work",
      desc: "Help improve how people think, learn, decide, and perform in real life.",
    },
    {
      title: "Real Growth",
      desc: "Learn through hands-on execution, ownership, and real challenges.",
    },
    {
      title: "Innovation First",
      desc: "Work across neuroscience, education, performance, and human intelligence systems.",
    },
    {
      title: "Creative Freedom",
      desc: "Bring ideas to life through media, products, workshops, and systems.",
    },
    {
      title: "Fast Responsibility",
      desc: "Take ownership early and grow through action.",
    },
    {
      title: "Build With Purpose",
      desc: "Every role contributes to helping people think better.",
    },
  ];

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">

      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden text-white py-28 px-6">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

       

        {/* Content — unchanged */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5">
            Careers at Aaruchudar Pvt Ltd
          </p>

          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Build Minds.
            <br />
            Build Impact.
            <br />
            Build Your Career.
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8">
            Join a team focused on improving how people think, learn, and perform.
            If you want meaningful work with real growth, you'll fit right in.
          </p>
        </div>
      </section>

      {/* WHY WORK */}
      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 shadow-sm"
              >
                <h3 className="text-[1.50rem] font-bold text-[#2563eb] mb-2">
                  {benefit.title}
                </h3>

                <p className="text-[#6b7280] text-md leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="pt-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-gray-100 pb-6">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mr-4">
              Filter By:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Open Roles</h2>
            <p className="text-gray-500 font-medium">
              {filteredJobs.length} Roles Found
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold uppercase w-fit mb-4">
                  {job.category}
                </span>

                <h3 className="text-xl font-bold mb-2">{job.title}</h3>

                <p className="text-gray-400 text-sm mb-6">
                  {job.location} • {job.type}
                </p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-auto w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-blue-200 text-xs uppercase">
                  Applying for
                </p>
                <h3 className="text-xl font-bold">{selectedJob.title}</h3>
              </div>

              <button onClick={() => setSelectedJob(null)}>
                <X />
              </button>
            </div>

            <form
              className="p-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application Sent!");
                setSelectedJob(null);
              }}
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                required
                type="url"
                placeholder="Resume Link"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Tell us what drives you and what you bring."
                className="w-full border p-3 rounded-lg h-28"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GENERAL APPLY */}
      {isGeneralApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            <div className="bg-[#1e3a8a] p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Send Your Resume</h3>
                <p className="text-blue-200 text-xs">
                  We'll contact you when a suitable role opens.
                </p>
              </div>

              <button onClick={() => setIsGeneralApply(false)}>
                <X />
              </button>
            </div>

            <form
              className="p-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Resume Shared!");
                setIsGeneralApply(false);
              }}
            >
              <input type="text" required placeholder="Full Name" className="w-full border p-3 rounded-lg" />
              <input type="email" required placeholder="Email" className="w-full border p-3 rounded-lg" />
              <input type="tel" required placeholder="Phone Number" className="w-full border p-3 rounded-lg" />
              <input type="url" required placeholder="Resume Link" className="w-full border p-3 rounded-lg" />

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
                Send Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-14">
          <h3 className="text-4xl md:text-5xl font-bold">
            Don’t See Your Role?
          </h3>

          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
            We’re always looking for talented people who care about growth,
            learning, and real impact.
          </p>

          <button
            onClick={() => setIsGeneralApply(true)}
            className="mt-8 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold"
          >
            Send Resume
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}