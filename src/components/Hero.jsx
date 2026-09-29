import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "58%", label: "Increase in pick up point use", variant: "yellow" },
  { value: "27%", label: "Increase in pick up point use", variant: "dark" },
  { value: "23%", label: "Decreased in customer phone calls", variant: "blue" },
  { value: "40%", label: "Decreased in customer phone calls", variant: "orange" },
];

function StatCard({ value, label, variant, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(ref.current, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return (
    <article ref={ref} className={`stat-card stat-${variant}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function Car() {
  return (
    <svg className="car" viewBox="0 0 420 190" aria-hidden="true">
      <defs>
        <linearGradient id="car-orange" x1="0" x2="1">
          <stop offset="0%" stopColor="#ee6a08" />
          <stop offset="100%" stopColor="#ff8b18" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1">
          <stop offset="0%" stopColor="#1a1b1a" />
          <stop offset="100%" stopColor="#353935" />
        </linearGradient>
      </defs>

      <path
        d="M52 111h33l28-47c7-12 19-19 33-19h91c16 0 30 8 40 20l28 34h50c8 0 14 6 14 14v15H52z"
        fill="url(#car-orange)"
      />
      <path
        d="M126 63h92c9 0 18 4 24 11l21 24H109l16-26c1-5 5-9 1-9Z"
        fill="url(#glass)"
      />
      <path
        d="M140 67h34v30h-49zM181 67h35c8 0 15 3 20 9l14 21h-69z"
        fill="#aeb4ad"
        opacity=".84"
      />
      <path d="M58 109h40" stroke="#151713" strokeWidth="8" strokeLinecap="round" />
      <path d="M302 104h23" stroke="#ffd34e" strokeWidth="8" strokeLinecap="round" />

      <circle cx="118" cy="134" r="31" fill="#121312" />
      <circle cx="118" cy="134" r="13" fill="#777b75" />
      <circle cx="300" cy="134" r="31" fill="#121312" />
      <circle cx="300" cy="134" r="13" fill="#777b75" />

      <path
        d="M350 105h26c8 0 14 6 14 14v12h-40z"
        fill="#d8ff3f"
      />
      <path
        d="M52 112h19v18H52z"
        fill="#d8ff3f"
      />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const headlineRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power4.inOut",
        }
      );

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, letterSpacing: "0.5em" },
        {
          opacity: 1,
          letterSpacing: "0.04em",
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        }
      );

      gsap.set(carRef.current, {
        x: "80vw",
        willChange: "transform",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          const xValue = 80 - self.progress * 160;

          gsap.set(carRef.current, {
            x: `${xValue}vw`,
            force3D: true,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero-sticky">
        <div className="hero-content">
          <div className="stat-row">
            <StatCard
              value={stats[0].value}
              label={stats[0].label}
              variant={stats[0].variant}
              delay={0.8}
            />
            <StatCard
              value={stats[1].value}
              label={stats[1].label}
              variant={stats[1].variant}
              delay={1}
            />
          </div>

          <div className="banner-wrap">
            <div ref={bannerRef} className="hero-banner">
              <h1 ref={headlineRef}>WELCOME ITZFIZZ</h1>
            </div>

            <div className="car-layer">
              <div ref={carRef}>
                <Car />
              </div>
            </div>
          </div>

          <div className="stat-row">
            <StatCard
              value={stats[2].value}
              label={stats[2].label}
              variant={stats[2].variant}
              delay={1.2}
            />
            <StatCard
              value={stats[3].value}
              label={stats[3].label}
              variant={stats[3].variant}
              delay={1.4}
            />
          </div>

          <p className="scroll-cue">Scroll to drive</p>
        </div>
      </div>
    </section>
  );
}
