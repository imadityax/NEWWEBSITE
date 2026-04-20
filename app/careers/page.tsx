"use client";

import { useState } from "react";
import { X, Search, Briefcase } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function CareersPage() {
  // State for filtering
  const [filter, setFilter] = useState("All");
  // State for Job-specific Modal
  const [selectedJob, setSelectedJob] = useState<null | any>(null);
  // State for General Resume Modal
  const [isGeneralApply, setIsGeneralApply] = useState(false);

  const categories = [
    "All",
    "Design",
    "Development",
    "Product",
    "Marketing",
    "Analytics",
    "Human Resources",
  ];

  const jobs = [
    {
      title: "UI/UX Designer",
      category: "Design",
      location: "Chennai",
      type: "Full Time",
    },
    {
      title: "Senior Software Engineer",
      category: "Development",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Product Manager",
      category: "Product",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      title: "Marketing Specialist",
      category: "Marketing",
      location: "Mumbai",
      type: "Full Time",
    },
    {
      title: "Data Scientist",
      category: "Analytics",
      location: "Delhi",
      type: "Full Time",
    },
    {
      title: "HR Business Partner",
      category: "Human Resources",
      location: "Hyderabad",
      type: "Full Time",
    },
  ];

  const benefits = [
    {
      title: "Learn & Grow",
      desc: "Learn and grow in the field of human intelligence & neuroscience",
    },
    {
      title: "Backend Developer",
      desc: "Develop secure scalable APIs, cloud systems and enterprise architecture.",
    },
    {
      title: "Product Manager",
      desc: "Lead product vision, strategy and execution for our cognitive training platform.",
    },
    {
      title: "Data Scientist",
      desc: "Analyze brain data, optimize algorithms and drive insights for cognitive performance.",
    },
    {
      title: "UX Researcher",
      desc: "Conduct user research to inform design of intuitive cognitive training interfaces.",
    },
    {
      title: "AI Engineer",
      desc: "Build intelligent systems that adapt and personalize cognitive training experiences.",
    },
  ];

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e3a8a] to-[#2563eb] text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-5">
            Careers at Aaruchudar
          </p>
          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Build The Future With Us.
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/80 leading-8">
            Join a team of creators, engineers and thinkers building intelligent
            products that make real impact.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 shadow-sm min-h-[100px] flex flex-col justify-center"
              >
                <h3 className="text-[1.50rem] font-bold text-[#2563eb] mb-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#6b7280] text-md leading-relaxed font-small">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <p className="text-gray-500 font-medium">
              {filteredJobs.length} Roles Found
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredJobs?.map((job, index) => (
              <div
                key={index}
                className="bg-[#f5f5f5] p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="mb-4">
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold uppercase">
                    {job.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>{" "}
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

      {/* JOB SPECIFIC MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">
                  Applying for
                </p>
                <h3 className="text-xl font-bold">{selectedJob.title}</h3>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="hover:bg-blue-700 p-2 rounded-full"
              >
                <X size={24} />
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Resume Link (Drive/Portfolio)
                </label>
                <input
                  required
                  type="url"
                  className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Why should we hire you?
                </label>
                <textarea
                  className="w-full border-2 border-gray-100 focus:border-blue-600 rounded-lg outline-none p-3 h-24 transition-colors"
                  placeholder="Tell us about your experience..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GENERAL RESUME MODAL (The one you asked for) */}
      {isGeneralApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-[#1e3a8a] p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Send Your Resume</h3>
                <p className="text-blue-200 text-xs">
                  We'll contact you when a role fits.
                </p>
              </div>
              <button
                onClick={() => setIsGeneralApply(false)}
                className="hover:bg-blue-900 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <form
              className="p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Resume Shared Successfully!");
                setIsGeneralApply(false);
              }}
            >
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Resume Link
                </label>
                <input
                  required
                  type="url"
                  className="w-full border-b-2 border-gray-100 focus:border-blue-600 outline-none py-2 transition-colors"
                  placeholder="Drive or Dropbox link"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg transition-all"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-14">
          <h3 className="text-4xl md:text-5xl font-bold">
            Don’t See Your Role?
          </h3>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-8">
            We’re always looking for exceptional talent. Send us your profile
            and let’s talk.
          </p>
          <button
            onClick={() => setIsGeneralApply(true)}
            className="mt-8 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:scale-105 transition"
          >
            Send Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Aaruchudar</h2>
              <div className="text-sm text-gray-500 leading-relaxed max-w-xs">
                <p className="font-bold text-gray-700 mb-1">
                  Aaruchudar Pvt Ltd.
                </p>
                <p>Cheyar,chennai</p>
                <p>TamilNadu</p>
                <p>India</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800">Reach us Ins</h4>
              <div className="text-sm text-gray-500 space-y-1">
                <p>+91 452 9532 12345</p>
                <p>Career</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800">Enquiry</h4>
              <div className="text-sm text-gray-500 space-y-1">
                <p>contact@aaruchudar.com</p>
                <p>aaruchudar.com</p>
                <p>career@aaruchudar.com</p>
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.facebook.com/Aaruchudar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={20}
                    className="text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
                  />
                </a>

                <a
                  href="https://www.instagram.com/aaruchudar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={20}
                    className="text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/aaruchudar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={20}
                    className="text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
                  />
                </a>

                <a
                  href="https://x.com/aaruchudar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={20}
                    className="text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400">
            © All Rights Interactive by RV Matrix Technologies Pvt. Ltd.
          </div>
        </div>
      </footer>
    </main>
  );
}
