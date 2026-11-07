"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setContactOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

                {/* Logo / Home Button */}
                <Link href="/" className="flex items-center" onClick={closeMenu}>
                    <img
                        src="/elc.png"
                        alt="Home"
                        className="h-14 w-auto object-contain sm:h-16"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-7 font-semibold lg:flex">

                    <Link href="/" className="text-blue-600 transition hover:text-blue-800">
                        Home
                    </Link>

                    <Link href="/Classes" className="text-blue-600 transition hover:text-blue-800">
                        Classes
                    </Link>

                    <Link href="/Class-Schedule" className="text-blue-600 transition hover:text-blue-800">
                        Class-Schedule
                    </Link>

                    <Link href="/About-Us" className="text-blue-600 transition hover:text-blue-800">
                        About Us
                    </Link>

                    {/* Contact Dropdown */}
                    <div className="group relative">

                        <button className="flex items-center gap-1 py-2 text-blue-600 transition hover:text-blue-800">
                            Contact
                            <span className="text-xs">▼</span>
                        </button>

                        <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                            {/* Email */}
                            <a
                                href="mailto:info@aspireedu.com"
                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className="h-6 w-6"
                                >
                                    <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z" />
                                    <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z" />
                                    <path fill="#e53935" d="M35 11.2c0-1.226-.655-2.356-1.716-2.963L24 13.5l-9.284-5.263A3.4 3.4 0 0 0 13 11.2v8.235l11 8.315 11-8.315V11.2z" />
                                    <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2C13 10.026 11.879 9 10.498 9c-.61 0-1.22.254-1.652.706L3 12.298z" />
                                    <path fill="#fbc02d" d="M38.5 9c-.61 0-1.22.254-1.652.706L45 15.77v-3.472C45 10.026 43.879 9 42.498 9H38.5z" />
                                </svg>
                                <span>Email</span>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/8801531864495"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="h-6 w-6"
                                    fill="#25D366"
                                >
                                    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.71 5.41 2.06 7.78L.5 31.5l7.91-2.07A15.42 15.42 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28.36c-2.4 0-4.75-.65-6.79-1.88l-.49-.29-4.7 1.23 1.25-4.58-.32-.5A12.82 12.82 0 1 1 16 28.86Zm7.03-9.6c-.38-.19-2.24-1.1-2.59-1.22-.35-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-1.01-1.89-2.25-2.11-2.63-.22-.38-.02-.58.17-.77.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.16-2.81-.3-.73-.61-.63-.85-.64l-.72-.01c-.25 0-.66.09-1.01.47-.35.38-1.32 1.29-1.32 3.15s1.35 3.65 1.54 3.9c.19.25 2.66 4.06 6.45 5.69.9.39 1.6.62 2.15.79.9.29 1.71.25 2.35.15.72-.11 2.24-.91 2.56-1.79.32-.88.32-1.63.22-1.79-.1-.16-.35-.25-.73-.44Z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>

                        </div>
                    </div>

                </nav>

                {/* Desktop Enroll Button */}
                <Link
                    href="/Contact"
                    className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 lg:block"
                >
                    Enroll Now →
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-3xl text-[#10264b] transition hover:bg-blue-50 lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <nav className="border-t border-gray-100 bg-white px-6 py-4 shadow-md lg:hidden">

                    <div className="flex flex-col gap-4 font-semibold">

                        <Link href="/" onClick={closeMenu} className="text-blue-600 transition hover:text-blue-800">
                            Home
                        </Link>

                        <Link href="/Classes" onClick={closeMenu} className="text-blue-600 transition hover:text-blue-800">
                            Classes
                        </Link>

                        <Link href="/Class-Schedule" onClick={closeMenu} className="text-blue-600 transition hover:text-blue-800">
                            Class-Schedule
                        </Link>

                        <Link href="/About-Us" onClick={closeMenu} className="text-blue-600 transition hover:text-blue-800">
                            About Us
                        </Link>

                        {/* Mobile Contact Dropdown */}
                        <button
                            onClick={() => setContactOpen(!contactOpen)}
                            className="flex items-center justify-between text-left text-blue-600 transition hover:text-blue-800"
                        >
                            Contact
                            <span className="text-xs">
                                {contactOpen ? "▲" : "▼"}
                            </span>
                        </button>

                        {contactOpen && (
                            <div className="ml-3 flex flex-col gap-3 border-l-2 border-blue-100 pl-4">

                                <a
                                    href="mailto:info@aspireedu.com"
                                    className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
                                >
                                    <span className="text-xl">✉️</span>
                                    Email
                                </a>

                                <a
                                    href="https://wa.me/8801531864495"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 py-2 text-gray-700 hover:text-green-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        className="h-6 w-6"
                                        fill="#25D366"
                                    >
                                        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.71 5.41 2.06 7.78L.5 31.5l7.91-2.07A15.42 15.42 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28.36c-2.4 0-4.75-.65-6.79-1.88l-.49-.29-4.7 1.23 1.25-4.58-.32-.5A12.82 12.82 0 1 1 16 28.86Zm7.03-9.6c-.38-.19-2.24-1.1-2.59-1.22-.35-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-1.01-1.89-2.25-2.11-2.63-.22-.38-.02-.58.17-.77.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.05-1.16-2.81-.3-.73-.61-.63-.85-.64l-.72-.01c-.25 0-.66.09-1.01.47-.35.38-1.32 1.29-1.32 3.15s1.35 3.65 1.54 3.9c.19.25 2.66 4.06 6.45 5.69.9.39 1.6.62 2.15.79.9.29 1.71.25 2.35.15.72-.11 2.24-.91 2.56-1.79.32-.88.32-1.63.22-1.79-.1-.16-.35-.25-.73-.44Z" />
                                    </svg>
                                    WhatsApp
                                </a>

                            </div>
                        )}

                        <Link
                            href="/Contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-full bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-800"
                        >
                            Enroll Now →
                        </Link>

                    </div>
                </nav>
            )}

        </header>
    );
};

export default Navbar;