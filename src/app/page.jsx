
import React from "react";
import Link from "next/link";

const courses = [
  {
    icon: "▦",
    title: "Mathematics",
    description: "Concepts to Competitive Exams",
  },
  {
    icon: "⚛",
    title: "Physics",
    description: "Build Strong Fundamentals",
  },
  {
    icon: "⚗",
    title: "Chemistry",
    description: "Learn with Clarity",
  },
  {
    icon: "▣",
    title: "All Subject Support",
    description: "For School & College",
  },
];

const features = [
  { icon: "♟", title: "Experienced", subtitle: "Faculty" },
  { icon: "🏆", title: "Proven Results", subtitle: "" },
  { icon: "↗", title: "Personalized", subtitle: "Attention" },
  { icon: "▦", title: "Flexible Batches", subtitle: "" },
];

const testimonials = [
  {
    name: "Rahim Ahmed",
    batch: "HSC 2025",
    message:
      "ELC helped me clear my exams with confidence. The teachers are amazing!",
    initial: "R",
  },
  {
    name: "Nusrat Jahan",
    batch: "HSC 2025",
    message:
      "The best coaching center in town. Highly recommended!",
    initial: "N",
  },
  {
    name: "Tanvir Hasan",
    batch: "HSC 2025",
    message:
      "Great environment and excellent teaching. I couldn't have done it without them.",
    initial: "T",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#10264b]">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[420px] items-center bg-cover bg-center sm:min-h-[460px] md:min-h-[500px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,35,73,0.98) 0%, rgba(9,35,73,0.88) 50%, rgba(9,35,73,0.35) 100%), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-xl text-white">

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Build Your Future with
              <br className="hidden sm:block" />
              The <span className="text-yellow-400">Right Guidance</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed sm:text-lg md:text-xl">
              Expert coaching, personalized care,
              <br className="hidden sm:block" />
              and proven results.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">

              <Link
                href="/Classes"
                className="rounded-full bg-yellow-400 px-7 py-3 text-center font-bold text-[#10264b] transition hover:bg-yellow-300"
              >
                Explore Classes →
              </Link>

              <a
                href="https://wa.me/8801531864495"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#10264b]"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"
      >
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          <img
            src="/classpic.png"
            alt="ELC Classroom"
            className="h-56 w-full rounded-xl object-cover sm:h-72 md:h-80"
          />

          <div>
            <p className="font-bold text-blue-600">
              — About ELC
            </p>

            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Your Success, Our Mission
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              At ELC, we believe in quality education,
              dedicated mentorship, and a supportive learning
              environment. Our expert faculty is here to help
              you understand, practice, and excel in your
              academic journey.
            </p>

            <Link
              href="#contact"
              className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-3 font-bold text-[#10264b] transition hover:bg-yellow-300"
            >
              Know More →
            </Link>
          </div>

        </div>
      </section>

      {/* Our Success Section */}
      <section
        id="courses"
        className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
      >

        <div className="mb-8 text-center">
          <p className="font-bold text-blue-600">
            ───── Our Success ─────
          </p>

          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Our Success
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {["succ1.jpg", "succ2.png", "succ3.png", "succ4.png"].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-blue-100 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={`/${image}`}
                alt={`Success ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">

        <div className="grid grid-cols-2 items-center gap-4 rounded-xl bg-blue-50 p-5 sm:gap-5 sm:p-7 md:grid-cols-5">

          <div className="col-span-2 text-center md:col-span-1 md:text-left">
            <h2 className="text-2xl font-extrabold">
              Why Choose Us?
            </h2>

            <p className="mt-2 text-base sm:text-lg">
              Because your goals deserve the best support.
            </p>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border border-blue-100 bg-white py-5 text-center md:border-0 md:border-l md:border-blue-300 md:bg-transparent md:py-2"
            >
              <div className="text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-2 text-sm font-bold sm:text-base">
                {feature.title}
              </h3>

              <p className="text-sm font-semibold">
                {feature.subtitle || "\u00A0"}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Testimonials / Achievements */}
      <section
        id="testimonials"
        className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
      >

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            ── Our Student's Achievements ──
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {["student1.jpg", "student2.jpg", "student3.jpg"].map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-blue-100 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={`/${image}`}
                alt={`Student Achievement ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}

        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-4 mb-6 scroll-mt-20 rounded-xl bg-[#102b52] px-5 py-8 text-white sm:mx-6 sm:px-8 md:mx-auto md:max-w-7xl md:py-10 lg:px-10"
      >

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl md:text-3xl">
              Ready to Start Your Journey?
            </h2>

            <p className="mt-2 text-sm sm:text-base">
              Get in touch with us today!
            </p>
          </div>

          <a
            href="https://wa.me/8801531864495"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-yellow-400 px-8 py-3 text-center font-bold text-[#10264b] transition hover:bg-yellow-300 sm:w-auto"
          >
            Contact Us →
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b2345] px-4 py-8 text-white sm:px-6">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <Link href="/" className="flex items-center gap-3">
            <img
              src="/elc.png"
              alt="ELC Logo"
              className="h-12 w-14 object-contain"
            />

            <div>
              <h2 className="text-xl font-extrabold">
                Equation Learning Center
              </h2>

              <p className="text-xs">
                Empowering Excellence
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">

            <Link href="/" className="transition hover:text-yellow-400">
              Home
            </Link>

            <Link href="/Classes" className="transition hover:text-yellow-400">
              Classes
            </Link>

            <Link href="/About-Us" className="transition hover:text-yellow-400">
              About Us
            </Link>

            <a
              href="https://wa.me/8801531864495"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              Contact
            </a>

          </div>

        </div>

        <div className="mx-auto mt-7 max-w-7xl border-t border-blue-400/30 pt-5 text-center text-xs text-gray-300">
          © 2026 ELC. All rights reserved.
        </div>

      </footer>

    </main>
  );
}
