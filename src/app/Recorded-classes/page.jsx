import React from "react";
import Link from "next/link";

const featuredSeries = [
    
    {
        icon: "💻",
        title: "HSC ICT — Full Syllabus Series",
        instructor: "Sabbir Ahmed",
        batch: "HSC 2026",
        lectures: 28,
        hours: 24,
        level: "Full Course",
        badge: "New",
        chapters: [
            "ICT: World & Bangladesh",
            "Number Systems & Digital Devices",
            "Logic Gates & Boolean Algebra",
            "HTML & Web Design",
            "C Programming Basics",
        ],
        href: "/Recorded-classes/hsc-ict-full",
    },
    
];

const subjects = [
    {
        id: "ict",
        label: "ICT",
        icon: "💻",
        series: [
            {
                title: "ICT — Chapter-wise Series",
                instructor: "Sabbir Ahmed",
                batch: "HSC 2026",
                lectures: 28,
                hours: 24,
                level: "Full Course",
                href: "/Recorded-classes/ict-chapter-wise",
            },
            {
                title: "Web Design Basics — HTML & CSS",
                instructor: "Sabbir Ahmed",
                batch: "School & College",
                lectures: 12,
                hours: 10,
                level: "Skill Series",
                href: "/Recorded-classes/web-design-basics",
            },
            {
                title: "Logic Gates & Boolean Algebra",
                instructor: "Sabbir Ahmed",
                batch: "HSC 2026",
                lectures: 6,
                hours: 5,
                level: "Crash",
                href: "/Recorded-classes/logic-gates",
            },
        ],
    },
];

const steps = [
    {
        icon: "📚",
        title: "Pick Your Series",
        subtitle: "Full course, crash, or deep dive",
    },
    {
        icon: "▶",
        title: "Watch at Your Pace",
        subtitle: "Unlimited replays, any device",
    },
    {
        icon: "💬",
        title: "Practice & Ask Doubts",
        subtitle: "Notes, sheets, and live support",
    },
];

const faqs = [
    {
        q: "How long do I get access to a recorded series?",
        a: "Every full-course series includes access until your exam year ends. Crash and skill series include 6 months of unlimited replays from the date you enrol.",
    },
    {
        q: "Can I watch on mobile?",
        a: "Yes. All recorded classes stream on phone, tablet, and desktop. You can also switch quality manually to save data.",
    },
    
    {
        q: "What if I get stuck on a problem?",
        a: "Every recorded series comes with access to our weekly live doubt session. Bring your question there, or send it to us on WhatsApp any time.",
    },
    {
        q: "Can I switch from recorded to live classes?",
        a: "Yes. If you enrol in a recorded series and later want the live batch, we adjust what you've already paid toward the live fee.",
    },
];

export default function RecordedClasses() {
    return (
        <main className="w-full overflow-x-hidden bg-white text-[#10264b]">

            {/* Hero */}
            <section
                className="relative flex min-h-[300px] items-center bg-cover bg-center sm:min-h-[340px] md:min-h-[380px]"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(9,35,73,0.98) 0%, rgba(9,35,73,0.88) 50%, rgba(9,35,73,0.35) 100%), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85')",
                }}
            >
                <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                    <div className="max-w-xl text-white">

                        <p className="text-sm font-bold uppercase tracking-wide text-yellow-400">
                            Recorded Classes
                        </p>

                        <h1 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                            Full Series,
                            <br className="hidden sm:block" />{" "}
                            <span className="text-yellow-400">Watch Anytime</span>
                        </h1>

                        <p className="mt-4 text-base leading-relaxed sm:text-lg">
                            Complete chapter-by-chapter series with notes,
                            practice sheets, and weekly doubt support.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">

                            <a
                                href="#featured"
                                className="rounded-full bg-yellow-400 px-7 py-3 text-center font-bold text-[#10264b] transition hover:bg-yellow-300"
                            >
                                Browse Series →
                            </a>

                            <Link
                                href="/Live-classes"
                                className="rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#10264b]"
                            >
                                See Live Classes
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Subject quick links */}
            <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {subjects.map((subject) => (
                        <a
                            key={subject.id}
                            href={`#${subject.id}`}
                            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gray-50 px-4 py-2 text-sm font-semibold text-[#10264b] transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                        >
                            <span className="text-base">{subject.icon}</span>
                            {subject.label}
                        </a>
                    ))}
                </div>
            </section>

            {/* Featured Series */}
            <section
                id="featured"
                className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
            >

                <div className="mb-8 text-center">
                    <p className="font-bold text-blue-600">
                        ───── Featured ─────
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                        Complete Full-Course Series
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm text-gray-700 sm:text-base">
                        The whole syllabus, chapter by chapter, taught
                        end to end by one instructor.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

                    {featuredSeries.map((series, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl border border-blue-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            <div className="flex items-start justify-between gap-3">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                                        {series.icon}
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                                            {series.batch}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {series.instructor}
                                        </p>
                                    </div>
                                </div>

                                <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#10264b]">
                                    {series.badge}
                                </span>

                            </div>

                            <h3 className="mt-4 text-lg font-extrabold leading-snug">
                                {series.title}
                            </h3>

                            {/* Meta pills */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                                    {series.lectures} lectures
                                </span>
                                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                                    {series.hours} hrs
                                </span>
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                    {series.level}
                                </span>
                            </div>

                            {/* Chapters */}
                            <details className="group mt-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#10264b] [&::-webkit-details-marker]:hidden">
                                    <span>Chapter outline</span>
                                    <span className="text-xs text-blue-600 transition-transform duration-200 group-open:rotate-45">
                                        ✚
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1.5 px-1">
                                    {series.chapters.map((chapter, i) => (
                                        <li
                                            key={i}
                                            className="text-sm text-gray-700"
                                        >
                                            {i + 1}. {chapter}
                                        </li>
                                    ))}
                                    <li className="text-sm font-semibold text-blue-600">
                                        + {series.lectures - series.chapters.length} more lectures
                                    </li>
                                </ul>
                            </details>

                            <div className="mt-auto border-t border-blue-100 pt-4">
                                <Link
                                    href={series.href}
                                    className="block rounded-full bg-yellow-400 px-5 py-2.5 text-center text-sm font-bold text-[#10264b] transition hover:bg-yellow-300"
                                >
                                    Start Watching →
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* Series by subject */}
            {subjects.map((subject) => (
                <section
                    key={subject.id}
                    id={subject.id}
                    className="mx-auto max-w-7xl scroll-mt-20 px-2 py-10 sm:px-4 md:py-14 lg:px-8"
                >

                    <div className="mb-8 text-center">
                        <p className="font-bold text-blue-600">
                            ───── {subject.label} ─────
                        </p>

                        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                            {subject.label} Series
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {subject.series.map((series, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-xl border border-blue-100 bg-gray-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="flex items-start justify-between gap-3">

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                                            {subject.icon}
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                                                {series.batch}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {series.instructor}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
                                        {series.level}
                                    </span>

                                </div>

                                <h3 className="mt-4 text-base font-extrabold leading-snug">
                                    {series.title}
                                </h3>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                                        {series.lectures} lectures
                                    </span>
                                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                                        {series.hours} hrs
                                    </span>
                                </div>

                                <div className="mt-auto border-t border-blue-100 pt-4">
                                    <Link
                                        href={series.href}
                                        className="block rounded-full bg-yellow-400 px-4 py-2 text-center text-xs font-bold text-[#10264b] transition hover:bg-yellow-300"
                                    >
                                        Watch Series →
                                    </Link>
                                </div>

                            </div>
                        ))}

                    </div>
                </section>
            ))}

            {/* How it works */}
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">

                <div className="rounded-xl bg-blue-50 p-5 sm:p-7">

                    <div className="mb-6 text-center">
                        <p className="font-bold text-blue-600">
                            ───── How It Works ─────
                        </p>

                        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                            Three Steps to Start
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-blue-100 bg-white py-6 text-center"
                            >
                                <div className="text-3xl">{step.icon}</div>

                                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-blue-600">
                                    Step {index + 1}
                                </p>

                                <h3 className="mt-1 text-sm font-bold sm:text-base">
                                    {step.title}
                                </h3>

                                <p className="mt-1 text-sm text-gray-700">
                                    {step.subtitle}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section
                id="faq"
                className="mx-auto max-w-4xl scroll-mt-20 px-4 py-10 sm:px-6 md:py-14 lg:px-8"
            >

                <div className="mb-8 text-center">
                    <p className="font-bold text-blue-600">
                        ───── FAQ ─────
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-3">

                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group rounded-xl border border-blue-100 bg-gray-50 p-4 shadow-sm"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-[#10264b] sm:text-base [&::-webkit-details-marker]:hidden">
                                <span>{faq.q}</span>
                                <span className="shrink-0 text-xs text-blue-600 transition-transform duration-200 group-open:rotate-45">
                                    ✚
                                </span>
                            </summary>

                            <p className="mt-3 text-sm leading-relaxed text-gray-700">
                                {faq.a}
                            </p>
                        </details>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="mx-4 mb-6 rounded-xl bg-[#102b52] px-5 py-8 text-white sm:mx-6 sm:px-8 md:mx-auto md:max-w-7xl md:py-10 lg:px-10">

                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

                    <div>
                        <h2 className="text-xl font-extrabold sm:text-2xl md:text-3xl">
                            Not Sure Which Series Fits You?
                        </h2>

                        <p className="mt-2 text-sm sm:text-base">
                            Tell us your class and target exam — we'll point you to the right one.
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