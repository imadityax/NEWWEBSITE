"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isGeneralApply, setIsGeneralApply] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

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
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.category === filter);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[11px] sm:text-sm text-white/70 mb-5">
            Careers at Aaruchudar Pvt Ltd
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            Build Minds.
            <br />
            Build Impact.
            <br />
            Build Your Career.
          </h1>

          <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg text-white/80 leading-7 sm:leading-8">
            Join a team focused on improving how people think,
            learn, and perform. If you want meaningful work
            with real growth, you'll fit right in.
          </p>

        </div>

      </section>

      {/* WHY WORK */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 bg-[#f5f5f5]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center md:text-left">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm"
              >

                <h3 className="text-xl sm:text-2xl font-bold text-[#2563eb] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
                  {benefit.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FILTER + JOBS */}
      <section className="pt-8 sm:pt-12 md:pt-16 px-5 sm:px-6 pb-16 sm:pb-24">

        <div className="max-w-6xl mx-auto">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-gray-100 pb-6">

            <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mr-2 sm:mr-4">
              Filter By:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}

          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Open Roles
            </h2>

            <p className="text-gray-500 font-medium text-sm sm:text-base">
              {filteredJobs.length} Roles Found
            </p>

          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >

                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold uppercase w-fit mb-4">
                  {job.category}
                </span>

                <h3 className="text-xl font-bold mb-2">
                  {job.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
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

      {/* MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 overflow-y-auto">

          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden my-10">

            <div className="bg-blue-600 p-5 sm:p-6 text-white flex justify-between items-center">

              <div>
                <p className="text-blue-200 text-xs uppercase">
                  Applying for
                </p>

                <h3 className="text-lg sm:text-xl font-bold">
                  {selectedJob.title}
                </h3>
              </div>

              <button onClick={() => setSelectedJob(null)}>
                <X />
              </button>

            </div>

            <form
              className="p-5 sm:p-8 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();

                if (!name || !email) {
                  alert("Name and Email are required");
                  return;
                }

                if (!file && !resumeLink) {
                  alert("Upload resume or provide link");
                  return;
                }

                setLoading(true);

                const formData = new FormData();

                formData.append("name", name);
                formData.append("email", email);
                formData.append("resumeLink", resumeLink);
                formData.append("message", message);

                if (file) {
                  formData.append("file", file);
                }

                const res = await fetch("/api/apply", {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();

                setLoading(false);

                if (data.success) {
                  alert("Application Sent!");

                  setSelectedJob(null);

                  setName("");
                  setEmail("");
                  setResumeLink("");
                  setMessage("");
                  setFile(null);
                } else {
                  alert(data.error || "Something went wrong");
                }
              }}
            >

              <h4 className="text-lg font-semibold">
                Applicant Information
              </h4>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm sm:text-base"
              />

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  if (e.target.files) setFile(e.target.files[0]);
                }}
                className="w-full border p-3 rounded-lg text-sm"
              />

              <input
                type="url"
                placeholder="Or paste resume link"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm sm:text-base"
              />

              <textarea
                placeholder="Why do you want to join?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border p-3 rounded-lg h-28 text-sm sm:text-base"
              />

              <button
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Submit Application"}
              </button>

            </form>

          </div>

        </div>
      )}

      {/* CTA */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center rounded-[2rem] bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] text-white p-8 sm:p-12 md:p-14">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Don’t See Your Role?
          </h3>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            We’re always looking for talented people who care
            about growth, learning, and real impact.
          </p>

          <button
            onClick={() => setIsGeneralApply(true)}
            className="mt-8 px-7 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-blue-600 font-semibold text-sm sm:text-base"
          >
            Send Resume
          </button>

        </div>

      </section>

      <Footer />

    </main>
  );
}