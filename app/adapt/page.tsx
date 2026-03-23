"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const huntImages = [
  "/adapt/01_Dark_Hecate_Borg.png",
  "/adapt/02_Light_Psych_Borg.png",
  "/adapt/03_Dark_Psyche_Borg.png",
];

const Navbar = () => (
  <nav className=" flex justify-between items-center py-6 px-10 bg-(--bg-adapt) border-b">
    <div className="text-2xl font-bold text-(--text-main)">BrandLogo</div>
    <div className="space-x-6 hidden md:flex">
      <a
        href="#"
        className="hover:text-(--accent-adapt))"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-(--accent-adapt)"
      >
        Features
      </a>
      <a
        href="#"
        className="hover:text-(--accent-adapt)"
      >
        Pricing
      </a>
    </div>
    <button className="bg-(--glass-bg) text-(--text-main) px-5 py-2 hover:bg-(--accent-adapt) border-(--glass-border)">
      Get Started
    </button>
  </nav>
);

const Hero = () => (
  <header className="py-20 px-10 text-center bg-(--bg-hunt)">
    <h1 className="text-5xl font-extrabold mb-4">Build Something Incredible</h1>
    <p className="text-xl text-(--text-400) mb-8 max-w-2xl mx-auto">
      This is a comprehensive template featuring all the essential components
      you need to launch your Next.js site quickly.
    </p>
    <div className="flex justify-center gap-4">
      <button className="btn-primal">Download Now</button>
      <button className="btn-primal">Learn More</button>
    </div>
  </header>
);

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="hunt-card btn-primal">
    <div className="">✓</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-(--text-300)">{desc}</p>
  </div>
);

const Footer = () => (
  <footer className="py-10 border-t mt-20 px-10 text-center text-(--text-300)">
    <p>© 2026 Your Company Inc. All rights reserved.</p>
  </footer>
);

export default function InstinctPage() {
  const instinct = "adapt";
  const [mode, setMode] = useState("light");
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    // We wrap everything in a div that holds the data attributes
    <div
      data-theme="adapt"
      data-mode={mode}
    >
      <Navbar />
      <Hero />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[120px] pointer-events-none" />
      <main className="min-h-screen bg-(--bg-primary) text-(--text-main) transition-colors duration-500">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-(--glass-bg) border-b-4 border-(--glass-border)">
         
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="heading text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6 text-(--text-main)">
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
              <h2 className="text-5xl font-serif mb-6 text-(--text-main)">
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
                    ? "/adapt/Adapter_Light.png"
                    : "/adapt/Adapter_Dark.png"
                }
                height={1000}
                width={1500}
                alt="Borg/Andorian"
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

        <Carousel
          plugins={[plugin.current]}
          className="relative w-full max-w-3xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {huntImages.map((huntImages, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  {/* Your hunt-card style fits perfectly here */}
                  <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-(--border) ">
                    <Image
                      src={huntImages}
                      alt={`Slide ${index}`}
                      width={1000}
                      height={2000}
                      className="w-full h-auto object-contain hover:grayscale grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Styled with your theme variables */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-(--bg-secondary) border-(--border)" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-(--bg-secondary) border-(--border)" />
        </Carousel>
      </main>
    </div>
  );
}
