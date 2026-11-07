
import React from "react";
import Link from "next/link";

const hsc28Schedule = [
    {
        days: "Sunday, Tuesday, Thursday",
        batch: "Batch-1",
        time: "8:30 – 9:30 AM",
    },
    {
        days: "Sunday, Tuesday, Thursday",
        batch: "Batch-2",
        time: "3:00 – 4:00 PM",
    },
    {
        days: "Saturday, Monday, Wednesday",
        batch: "Batch-3",
        time: "4:00 – 5:00 PM",
    },
    {
        days: "Saturday, Monday, Wednesday",
        batch: "Batch-4",
        time: "6:00 – 7:00 PM",
    },
];

const hsc27Schedule = [
    {
        days: "Sunday, Tuesday, Thursday",
        batch: "Batch-1",
        time: "1:00 – 2:00 PM",
    },
    {
        days: "Sunday, Tuesday, Thursday",
        batch: "Batch-2",
        time: "6:00 – 7:00 PM",
    },
    {
        days: "Saturday, Monday, Wednesday",
        batch: "Batch-3",
        time: "8:30 – 9:30 AM",
    },
    {
        days: "Saturday, Monday, Wednesday",
        batch: "Batch-4",
        time: "9:30 – 10:30 AM",
    },
    {
        days: "Saturday, Monday, Wednesday",
        batch: "Batch-5",
        time: "1:00 – 2:00 PM",
    },
];

const ScheduleTable = ({ title, schedule }) => {
    return (
        <section className="mb-10">

            {/* Section Heading */}
            <div className="mb-5 flex items-center justify-center gap-4 sm:gap-6">
                <div className="h-0.5 w-12 bg-blue-600 sm:w-24 md:w-36"></div>

                <h2 className="text-2xl font-extrabold text-[#10264b] sm:text-3xl">
                    {title}
                </h2>

                <div className="h-0.5 w-12 bg-blue-600 sm:w-24 md:w-36"></div>
            </div>

            {/* Schedule Table */}
            <div className="overflow-hidden rounded-xl border border-blue-100 shadow-sm">

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[550px] text-center">

                        <thead className="bg-[#102b52] text-white">
                            <tr>
                                <th className="px-4 py-4 font-bold">
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="text-xl">▦</span>
                                        Days
                                    </span>
                                </th>

                                <th className="border-x border-blue-200/30 px-4 py-4 font-bold">
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="text-xl">♟</span>
                                        Batch
                                    </span>
                                </th>

                                <th className="px-4 py-4 font-bold">
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="text-xl">◷</span>
                                        Time
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {schedule.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`transition hover:bg-blue-100 ${index % 2 === 0 ? "bg-white" : "bg-blue-50"
                                        }`}
                                >
                                    <td className="px-4 py-3 text-sm font-medium sm:text-base">
                                        {item.days}
                                    </td>

                                    <td className="border-x border-blue-100 px-4 py-3 text-sm font-bold sm:text-base">
                                        {item.batch}
                                    </td>

                                    <td className="px-4 py-3 text-sm font-medium sm:text-base">
                                        {item.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </section>
    );
};

export default function ClassSchedule() {
    return (
        <main className="w-full overflow-x-hidden bg-white text-[#10264b]">

            {/* Hero Section */}
            <section
                className="relative flex min-h-[260px] items-center bg-cover bg-center sm:min-h-[320px] md:min-h-[360px]"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(9,35,73,0.98) 0%, rgba(9,35,73,0.88) 50%, rgba(9,35,73,0.35) 100%), url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85')",
                }}
            >
                <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <div className="max-w-2xl text-white">

                        <div className="mb-4 h-1 w-20 rounded-full bg-yellow-400"></div>

                        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                            Class{" "}
                            <span className="text-yellow-400">
                                Schedule
                            </span>
                        </h1>

                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                            Stay updated with our latest class schedule.
                        </p>

                    </div>

                </div>
            </section>

            {/* Schedule Section */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">

                <div className="mb-10 text-center">

                    <p className="font-bold text-blue-600">
                        ───── ELC ─────
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                        Our Class Schedule
                    </h2>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        Find your batch and class timings below.
                    </p>

                </div>

                {/* HSC-28 */}
                <ScheduleTable
                    title="HSC-28"
                    schedule={hsc28Schedule}
                />

                {/* HSC-27 */}
                <ScheduleTable
                    title="HSC-27"
                    schedule={hsc27Schedule}
                />

                {/* Schedule Notice */}
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 sm:items-center sm:p-5">

                    <span className="text-2xl text-blue-600">
                        ℹ
                    </span>

                    <p className="text-sm leading-relaxed sm:text-base">
                        <span className="font-bold text-blue-700">
                            Note:
                        </span>{" "}
                        Class schedule may be subject to change. Please follow
                        our official communication channels for updates.
                    </p>

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
                            Have Any Questions?
                        </h2>

                        <p className="mt-2 text-sm sm:text-base">
                            Feel free to contact us for more details.
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

                        <Link
                            href="/"
                            className="transition hover:text-yellow-400"
                        >
                            Home
                        </Link>

                        <Link
                            href="/Classes"
                            className="transition hover:text-yellow-400"
                        >
                            Classes
                        </Link>

                        <Link
                            href="/Class-Schedule"
                            className="text-yellow-400"
                        >
                            Class Schedule
                        </Link>

                        <Link
                            href="/Curriculum"
                            className="transition hover:text-yellow-400"
                        >
                            Curriculum
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
