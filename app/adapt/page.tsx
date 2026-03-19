// app/[id]/page.tsx  (replace [id] with gather / hunt / adapt / protect)
"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function InstinctPage() {
  const instinct = "Adapting"; // ← change per page
  const [mode, setMode] = useState("light");

  return (
    <section
      data-theme="adapt"
      data-mode={mode}
      className="min-h-screen bg-linear-to-b from-(bg-primary) to-(bg-secondary) text-(--text-primary)"
    >
      {/* Hero / Intro Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-(--bg-primary)">
        {/* Subtle textured background or gradient overlay */}
        <div className=" inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.8),transparent_70%)] opacity-60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-linear-to-r from-(--text-primary) via-(--text-secondary) to-(--text-muted) animate-pulse-slow">
            {instinct}
          </h1>
          <p className="text-xl md:text-3xl font-serif tracking-wide text-(--text-primary) max-w-2xl mx-auto">
            Opertunistic and always looking for something of value.
          </p>

          {/* Accent underline or bleed effect */}
          <div className="mt-8 h-1 w-32 mx-auto bg-linear-to-r from-transparent via-(--accent) to-transparent" />
          <button
            className="btn-primal mt-10"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            Switch
          </button>
        </div>
      </div>

      {/* Content Sections – stack these as needed */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-(--bg-primary)">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6 text-(--accent)">
              The Call
            </h2>
            <p className="text-lg leading-relaxed text-(--text-primary)">
              {/* Your narrative text here */}
              BLA BLA BLA
            </p>
          </div>
          {/* Image / visual placeholder – use next/image later */}

          <div className=" bg-(--bg-secondary) rounded-xl overflow-hidden border border-(--border)">
            <Image
              className="w-full h-full flex items-center justify-center text-8xl "
              src={
                mode === "light"
                  ? "/The_Human_Way/Adapter_Light.png"
                  : "/The_Human_Way/Adapter_Dark.png"
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
      <section className=" bg-(--bg-primary) py-16 text-center border-t border-(--border)">
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
