import React from "react";
import Link from "next/link";

const liveNow = [
  {
    icon: "💻",
    subject: "ICT",
    topic: "Newton's Laws — Live Problem Solving",
    teacher: "Rana Voumik sir",
    batch: "HSC 2026",
    time: "7:00 – 8:30 PM",
  },
 
];


const schedule = [
  { day: "Saturday", slots: ["10:00 AM · Physics (SSC)", "7:00 PM · Physics (HSC)"] },
  { day: "Sunday", slots: ["5:00 PM · Math (HSC)", "6:00 PM · Math (HSC)"] },
  { day: "Monday", slots: ["7:00 PM · Physics (HSC)"] },
  { day: "Tuesday", slots: ["6:00 PM · Math (HSC)"] },
  { day: "Wednesday", slots: ["8:00 PM · Q&A Panel"] },
  { day: "Thursday", slots: ["6:00 PM · Math (HSC)"] },
  { day: "Friday", slots: ["4:00 PM · Chemistry (SSC)"] },
];

export default function LiveClasses() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#10264b]">

      {/* Hero */}
      <section
        className="relative flex min-h-[300px] items-center bg-cover bg-center sm:min-h-[340px] md:min-h-[380px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(9,35,73,0.98) 0%, rgba(9,35,73,0.88) 50%, rgba(9,35,73,0.35) 100%), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-xl text-white">

            <p className="text-sm font-bold uppercase tracking-wide text-yellow-400">
              Live Classes
            </p>

            <h1 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Learn Live with Our
              <br className="hidden sm:block" />{" "}
              <span className="text-yellow-400">Expert Faculty</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Real-time sessions with live doubt solving,
              worked examples, and weekly assessments.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">

              <a
                href="https://wa.me/8801531864495"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-7 py-3 text-center font-bold text-[#10264b] transition hover:bg-yellow-300"
              >
                Join a Live Class →
              </a>

              <Link
                href="/Recorded-classes"
                className="rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#10264b]"
              >
                Watch Recorded
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Live Now */}
      <section
        id="live-now"
        className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
      >

        <div className="mb-8 text-center">
          <p className="font-bold text-blue-600">
            ───── Live Now ─────
          </p>

          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Sessions Happening Today
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {liveNow.map((cls, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-blue-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                    {cls.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold leading-tight">
                      {cls.subject}
                    </h3>
                    <p className="text-xs text-gray-600">{cls.batch}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-red-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Live
                </span>

              </div>

              <p className="mt-4 text-sm font-semibold leading-snug">
                {cls.topic}
              </p>

              <div className="mt-3 space-y-1.5 text-sm text-gray-700">
                <p>👨‍🏫 {cls.teacher}</p>
                <p>⏰ {cls.time}</p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-blue-100 pt-4">
                <span className="text-xs font-semibold text-blue-600">
                  {cls.seats}
                </span>

                <a
                  href="https://wa.me/8801531864495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold text-[#10264b] transition hover:bg-yellow-300"
                >
                  Join Now →
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

     

      {/* Weekly Schedule */}
      <section
        id="schedule"
        className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
      >

        <div className="mb-8 text-center">
          <p className="font-bold text-blue-600">
            ───── Weekly Schedule ─────
          </p>

          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Plan Your Week
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {schedule.map((day, index) => (
            <div
              key={index}
              className="rounded-xl border border-blue-100 bg-gray-50 p-4 shadow-sm"
            >
              <h3 className="font-extrabold text-[#10264b]">
                {day.day}
              </h3>

              <ul className="mt-3 space-y-2">
                {day.slots.map((slot, i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-700"
                  >
                    {slot}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 mb-6 rounded-xl bg-[#102b52] px-5 py-8 text-white sm:mx-6 sm:px-8 md:mx-auto md:max-w-7xl md:py-10 lg:px-10">

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl md:text-3xl">
              Not Sure Which Class to Join?
            </h2>

            <p className="mt-2 text-sm sm:text-base">
              Talk to us — we'll match you with the right batch.
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

    </main>
  );
}