"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InstinctPage() {
  const instinct = "Hunting";
  const [mode, setMode] = useState("light");

  return (
    // We wrap everything in a div that holds the data attributes
    <div
      data-theme="hunt"
      data-mode={mode}
    >
      <main className="min-h-screen bg-(--bg-primary) text-(--text-primary) transition-colors duration-500">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b-4 border-(--accent)">
          {/* Blood Moon Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent),transparent_70%)] opacity-20 pointer-events-none" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="heading text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6 text-(--text-primary)">
              {instinct}
            </h1>
            <p className="text-xl md:text-3xl font-serif tracking-wide opacity-90">
              Opportunistic and always looking for something of value.
            </p>

            <div className="mt-8 h-1 w-32 mx-auto bg-(--accent)" />

            <button
              className="btn-primal mt-10"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              Switch to {mode === "light" ? "Night" : "Day"}
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif mb-6 text-(--accent)">
                The Call
              </h2>
              <p className="text-lg leading-relaxed font-serif">
                The raw pulse of survival. Instinct sharpened by hunger, blood,
                and earth. In the silence of the forest, the hunter becomes the
                shadow.
              </p>
            </div>

            {/* The Image Card using the .hunt-card style from CSS */}
            <div className="hunt-card rounded-xl overflow-hidden">
              <Image
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={
                  mode === "light"
                    ? "/hunt/Hunter_Lightn.png"
                    : "/hunt/Hunter_Dark.png"
                }
                height={1000}
                width={1500}
                alt="Vampire Hunter"
                priority
              />
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <section className="py-16 text-center">
          <Link
            href="/"
            className="btn-primal"
          >
            Return to Crossroads
          </Link>
        </section>
      </main>
    </div>
  );
}
