"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Target, Hourglass, Swords } from "lucide-react";

const huntImages = [
  "/hunt/01_Dark_Lamia_Alien.png",
  "/hunt/02_Dark_Lamia_Alien_.png",
  "/hunt/Artemis_c.png",
  "/hunt/Artemis_Vampire_.png",
  "/hunt/Artemis_Vampire.png",
  "/hunt/Hecate_hunter.png",
  "/hunt/vampire.png",
];

const Navbar = () => (
  <nav className=" flex justify-between items-center py-6 px-10 bg-(--bg-hunt) border-b">
    <div className="text-2xl font-bold text-(--text-400)">BrandLogo</div>
    <div className="space-x-6 hidden md:flex">
      <a
        href="#"
        className="hover:text-(--text-300)"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-(--text-300)"
      >
        Features
      </a>
      <a
        href="#"
        className="hover:text-(--text-300)"
      >
        Pricing
      </a>
    </div>
    <button className="bg-(--text-100) text-white px-5 py-2 hover:bg-(--text-300)">
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
      <button className="bg-(--text-100) text-white px-8 py-3 font-medium hover:bg-(--text-300)">
        Download Now
      </button>
      <button className="border border-border px-8 py-3 font-medium hover:bg-(--text-300)">
        Learn More
      </button>
    </div>
  </header>
);

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="hunt-card">
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

export default function HuntPage() {
  const instinct = "Hunting";
  const [mode, setMode] = useState("light");
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    // We wrap everything in a div that holds the data attributes
    <div
      data-theme="hunt"
      data-mode={mode}
    >
      <main className=" ">
        <Navbar />
        <Hero />
        {/* Hero Section */}
        <section className="mt-10">
          {/* Blood Moon Gradient Overlay */}

          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter uppercase mb-6 text-(--text-400) text-shadow-lg">
              {instinct}
            </h1>
            <h2 className="text-(--text-100) mb-4">
              HUNT • PURSUE • CAPTURE • DOMINATE
            </h2>

            <p className="text-(--text-300) text-lg  opacity-90 mb-4">
              It is a drive that makes us... opertunistic. strive and take what
              we want.
            </p>
            <ul className="text-(--text-400) text-lg text-shadow-sm">
              <li>Find more oppertunities.</li>
              <li>Creates more appetite</li>
              <li>And take what we want.</li>
            </ul>
            <div className="mt-8 h-1 w-32 mx-auto bg-(--border)" />

            <button
              className="btn-primal m-4"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              Switch to {mode === "light" ? "Night" : "Day"}
            </button>
          </div>
        </section>
        <section className="py-20 px-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast Performance"
              desc="Optimized for speed and SEO out of the box."
            />
            <FeatureCard
              title="Responsive Design"
              desc="Looks great on mobile, tablet, and desktop screens."
            />
            <FeatureCard
              title="Easy to Edit"
              desc="Clean code structure that is simple to customize."
            />
          </div>
        </section>

        {/* EXPANSION */}
        <div className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
          <div className="grid grid-cols-1 gap-3">
            <div className="">
              <h2 className="text-6xl hunt-font text-(--text-400) mb-6 text-center">
                THE ANCIENT ART
              </h2>
              <div className="text-xl">
                <p>
                  Hunting is not violence — it is
                  <span className="text-(--text-200) font-bold">
                    focused intention
                  </span>
                  . It is the moment the predator locks eyes with destiny and
                  decides: today I eat, or I starve.
                </p>
                <p>
                  In the concrete jungle we call modern life, the hunt is your
                  career, your relationships, your legacy. You stalk
                  opportunities, track weaknesses in the market, and strike with
                  lethal precision.
                </p>
              </div>
            </div>
            <div className=" space-y-8 pt-3">
              <div className="flex gap-8 border-l-4 border-border pl-3">
                <div className="text-6xl">
                  <Target size={60} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">STEALTH MODE</h3>
                  <p className="text-(--text-100)">
                    Move unseen. Gather intel. Never announce your presence
                    until you are ready to STRIKE.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 border-l-4 border-border pl-3">
                <div className="text-3xl">
                  <Hourglass size={60} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">PATIENCE KILLS</h3>
                  <p className="text-(--text-100)">
                    The greatest hunters wait weeks for one perfect moment. Most
                    people quit after one week.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 border-l-4 border-border pl-3">
                <div className="text-3xl">
                  <Swords size={60} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">THE KILL SHOT</h3>
                  <p className="text-(--text-100)">
                    When the moment arrives, you do not hesitate. You EXECUTE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
          <div className="text-center max-w-5xl mx-auto grid gap-6 items-center">
            <div>
              <h2 className=" text-6xl mb-6 text-(--text-400)">The Hunt</h2>
              <p className="text-xl leading-relaxed">
                The prize must always outweigh the price.
              </p>
            </div>

            {/* The Image Card using the .hunt-card style from CSS */}
            <div className="hunt-card  overflow-hidden max-w-2/3 ">
              <Image
                className=" w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
        <footer className="flex-col  py-6 text-center text-(--text-100) text-sm tracking-widest">
          <div>THE FOREST NEVER FORGETS </div>
          <div>•</div>
          <div> YOU ARE EITHER HUNTING OR BEING HUNTED</div>
        </footer>
        {/* Footer Link */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-3xl mx-auto relative mb-7"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {huntImages.map((huntImages, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    {/* Your hunt-card style fits perfectly here */}
                    <div className="relative aspect-video overflow-hidden ">
                      <Image
                        src={huntImages}
                        alt={`Slide ${index}`}
                        width={1000}
                        height={2000}
                        className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Styled with your theme variables */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 " />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 " />
          </Carousel>
          <Link
            href="/"
            className="btn-primal"
          >
            Return to Crossroads
          </Link>
        </section>

        <main className="min-h-screen font-sans text-slate-900"></main>
      </main>
      <Footer />
    </div>
  );
}
