"use client";
import React, { useEffect, useRef, useState } from "react";

const AboutCoach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf9f7] py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout: text left, photo right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-start">

          {/* === TEXT COLUMN (left) === */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-block text-xs font-bold tracking-[0.15em] text-[#c9a96a] mb-4">
              MEET YOUR TEACHER
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#1f1d1b] tracking-tight mb-6">
              Hi, I'm <span className="text-[#8b7355]">Rana Sir</span> —
              <br />
              Your Partner in Transformation
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg leading-relaxed text-[#5a5550]">
                For over a decade, I've helped ambitious professionals break
                through the barriers holding them back — from career
                transitions and leadership challenges to building unshakeable
                confidence. My approach blends evidence-based coaching with
                deep, compassionate listening.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#5a5550]">
                I believe you already have the answers within you. My job is to
                ask the right questions, create a safe space for honest
                reflection, and walk beside you as you turn insight into
                action. No judgment, no fluff — just real progress.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#5a5550]">
                Whether you're stepping into a new role, launching a business,
                or simply ready to feel more aligned, I'd be honored to support
                you.
              </p>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mb-9">
              {[
                { num: "10+", label: "Years Experience" },

              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-[#e8e2d9] rounded-xl px-4 py-3 flex flex-col items-center min-w-[100px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-xl font-bold text-[#8b7355] leading-none">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-medium text-[#8a827a] tracking-wide uppercase mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}

          </div>

          {/* === PHOTO COLUMN (right, slightly centered vertically) === */}
          <div
            className={`flex justify-center md:justify-end md:pt-4 transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Medium-sized frame — adjust max-w to taste */}
            <div className="relative w-full max-w-[320px] md:max-w-[360px]">
              {/* soft accent ring */}
              <div className="absolute -inset-3 rounded-[28px] border-2 border-[#d4c5b0]/50 -z-10" />

              {/* photo frame */}
              <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/10 aspect-[4/5]">
                {/* 👇 PUT YOUR RANA SIR PICTURE HERE 👇 */}
                <img
                  src="/rana-sir.jpg"
                  className="w-full h-full object-cover block"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCoach;