"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "58%", label: "Increase in pick up point use", style: "stat-yellow" },
  { value: "27%", label: "Increase in pick up point use", style: "stat-dark" },
  { value: "23%", label: "Decreased in customer phone calls", style: "stat-blue" },
  { value: "40%", label: "Decreased in customer phone calls", style: "stat-orange" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const carRef = useRef(null);
  const statRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const titleLetters = titleRef.current.querySelectorAll("span");

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          bannerRef.current,
          { scaleX: 0, transformOrigin: "center center" },
          { scaleX: 1, duration: 0.9 }
        )
        .fromTo(
          titleLetters,
          {
            opacity: 0,
            y: 28,
            letterSpacing: "0.12em",
          },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.035em",
            duration: 1,
            stagger: 0.04,
          },
          "-=0.55"
        )
        .fromTo(
          statRefs.current.filter(Boolean),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12,
          },
          "-=0.45"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.35,
        onUpdate: (self) => {
          const x = 80 - self.progress * 160;

          gsap.set(carRef.current, {
            x: x + "vw",
            force3D: true,
          });
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <section ref={sectionRef} className="hero" aria-labelledby="hero-title">
      <div className="hero-sticky">
        <div className="hero-background" aria-hidden="true" />

        <div ref={bannerRef} className="hero-banner" aria-hidden="true" />

        <div className="hero-shell">
          <p className="hero-kicker">Scroll-driven digital motion</p>

          <h1 id="hero-title" ref={titleRef} className="hero-title">
            {headline.split("").map((character, index) => (
              <span key={index}>
                {character === " " ? "\u00a0" : character}
              </span>
            ))}
          </h1>

          <div className="stats stats-top" aria-label="Illustrative metrics">
            {stats.slice(0, 2).map((stat, index) => (
              <article
                className={`stat-card ${stat.style}`}
                key={stat.value}
                ref={(element) => {
                  statRefs.current[index] = element;
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <div className="stats stats-bottom" aria-label="Illustrative metrics">
            {stats.slice(2).map((stat, index) => (
              <article
                className={`stat-card ${stat.style}`}
                key={stat.value}
                ref={(element) => {
                  statRefs.current[index + 2] = element;
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <div className="track-line" aria-hidden="true" />
          <div className="track-dash" aria-hidden="true" />

          <svg
            ref={carRef}
            className="car"
            viewBox="0 0 320 150"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="carBody" x1="0" x2="1">
                <stop offset="0%" stopColor="#151713" />
                <stop offset="100%" stopColor="#373a31" />
              </linearGradient>
            </defs>

            <path
              d="M47 91h27l24-42c4-7 11-11 19-11h58c8 0 16 4 22 10l25 29h33c8 0 14 6 14 14v11H47Z"
              fill="url(#carBody)"
            />
            <path
              d="M106 49h68c6 0 11 3 15 7l18 21H92l12-21c1-4 5-7 8-7Z"
              fill="#cbd0c2"
            />
            <path
              d="M127 50h42l11 23h-61Z"
              fill="#1e211d"
              opacity="0.9"
            />
            <circle cx="92" cy="103" r="19" fill="#11120f" />
            <circle cx="92" cy="103" r="8" fill="#777970" />
            <circle cx="223" cy="103" r="19" fill="#11120f" />
            <circle cx="223" cy="103" r="8" fill="#777970" />
            <path
              d="M43 90h14c4 0 7-3 7-7V72c0-4-3-7-7-7H43Z"
              fill="#d4ff4f"
            />
            <rect x="249" y="82" width="13" height="7" rx="3.5" fill="#d4ff4f" />
          </svg>

          <div className="scroll-cue" aria-hidden="true">
            Scroll to move
          </div>
        </div>
      </div>
    </section>
  );
}
