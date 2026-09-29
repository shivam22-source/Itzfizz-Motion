import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "48%", label: "illustrative speed lift" },
  { value: "32%", label: "illustrative reach lift" },
  { value: "76%", label: "illustrative engagement" },
  { value: "91%", label: "illustrative satisfaction" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const carRef = useRef(null);
  const cueRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const titleLetters = titleRef.current.querySelectorAll("span");
      const statItems = statsRef.current.querySelectorAll(".stat");

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .to(titleLetters, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.045,
        })
        .to(
          statItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.2"
        );

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTimeline
        .fromTo(
          carRef.current,
          {
            x: () => window.innerWidth * 0.8,
            rotation: 1.5,
          },
          {
            x: () => -window.innerWidth * 0.6,
            rotation: -1.5,
            ease: "none",
          },
          0
        )
        .to(
          titleRef.current,
          {
            y: -85,
            opacity: 0.45,
            ease: "none",
          },
          0
        )
        .to(
          statsRef.current,
          {
            y: -45,
            opacity: 0.32,
            ease: "none",
          },
          0
        )
        .to(
          cueRef.current,
          {
            opacity: 0,
            y: 10,
            ease: "none",
          },
          0.08
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <section ref={sectionRef} className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-sticky">
        <div className="page-shell hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Scroll-driven digital motion</p>

            <h1 id="hero-title" ref={titleRef} className="hero-title">
              {headline.split("").map((character, index) => (
                <span key={index}>
                  {character === " " ? "\u00a0" : character}
                </span>
              ))}
            </h1>

            <p className="hero-note">
              A focused interaction study built around scroll progress, clean
              typography, and one visual that moves with you.
            </p>

            <div
              ref={statsRef}
              className="stats"
              aria-label="Illustrative metrics"
            >
              {stats.map((stat) => (
                <div className="stat" key={stat.value}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="motion-track" aria-hidden="true">
          <div className="track-line" />
          <div className="track-dash" />

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
              opacity="0.92"
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
            <rect
              x="249"
              y="82"
              width="13"
              height="7"
              rx="3.5"
              fill="#d4ff4f"
            />
            <rect
              x="160"
              y="87"
              width="26"
              height="5"
              rx="2.5"
              fill="#d4ff4f"
              opacity="0.75"
            />
          </svg>
        </div>

        <div ref={cueRef} className="page-shell scroll-cue" aria-hidden="true">
          Scroll to move
        </div>
      </div>
    </section>
  );
}
