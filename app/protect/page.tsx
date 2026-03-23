// app/[id]/page.tsx  (replace [id] with gather / hunt / adapt / protect)
"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => (
  <nav className=" flex justify-between items-center py-6 px-10 bg-(--bg-protect) border-b">
    <div className="text-2xl font-bold text-(--text-main)">BrandLogo</div>
    <div className="space-x-6 hidden md:flex">
      <a
        href="#"
        className="hover:text-(--accent-protect)"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-(--accent-protect)"
      >
        Features
      </a>
      <a
        href="#"
        className="hover:text-(--accent-protect)"
      >
        Pricing
      </a>
    </div>
    <button className=" btn-primal">
      Get Started
    </button>
  </nav>
);

const Hero = () => (
  <header className="py-20 px-10 text-center bg-(--bg-protect)">
    <h1 className="text-5xl font-extrabold mb-4">Build Something Incredible</h1>
    <p className="text-xl text-(--text-main) mb-8 max-w-2xl mx-auto">
      This is a comprehensive template featuring all the essential components
      you need to launch your Next.js site quickly.
    </p>
    <div className="flex justify-center gap-4">
      <button className="btn-primal)">
        Download Now
      </button>
      <button className="btn-primal">
        Learn More
      </button>
    </div>
  </header>
);

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="hunt-card">
    <div className="">✓</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-(--text-main)">{desc}</p>
  </div>
);

const Footer = () => (
  <footer className="py-10 border-t mt-20 px-10 text-center text-(--text-main)">
    <p>© 2026 Your Company Inc. All rights reserved.</p>
  </footer>
);

export default function InstinctPage() {
  const instinct = "Adapting"; // ← change per page
  const [mode, setMode] = useState("light");

  return (
    <section
      data-theme="protect"
      data-mode={mode}
      className="min-h-screen bg-linear-to-b from-(bg-primary) to-(bg-secondary) text-(--text-primary)"
    >
      <Navbar />
      <Hero />
      {/* Hero / Intro Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-(--bg-protect)">
        

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className=" text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6  ">
            {instinct}
          </h1>
          <p className=" font-mono text-xl md:text-3xl tracking-wide text-(--text-main) max-w-2xl mx-auto">
            Opertunistic and always looking for something of value.
          </p>

          {/* Accent underline or bleed effect */}
          <div className="mt-8 h-1 w-32 mx-auto bg-linear-to-r from-transparent via-(--accent-protect) to-transparent" />
          <button
            className="btn-primal mt-10"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            Switch
          </button>
        </div>
      </div>

      {/* Content Sections – stack these as needed */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-(--bg-protect)">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6 text-(--text-main)">
              The Call
            </h2>
            <p className="text-lg leading-relaxed text-(--text-main)">
              {/* Your narrative text here */}
              BLA BLA BLA
            </p>
          </div>
          {/* Image / visual placeholder – use next/image later */}

          <div className=" bg-(--bg-protect) overflow-hidden border border-border">
            <Image
              className="w-full h-full flex items-center justify-center text-8xl "
              src={
                mode === "light"
                  ? "/protect/Protector_Light.png"
                  : "/protect/Protector_Dark.png"
              }
              height={1000}
              width={1500}
              alt="Vampire Hunter"
            />
          </div>
        </div>
      </section>

      {/* More sections: e.g. "Origins", "Modern Echoes", gallery grid, quote blocks, etc. */}

      {/* Back / Explore more */}
      <section className=" bg-(--bg-protect) py-16 text-center border-t border-(--border-color))">
        <Link
          href="/"
          className="btn-primal inline-block px-10 py-4 border border-white/20 rounded-full text-lg uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          Return to Crossroads
        </Link>
      </section>
    </section>
  );
}
