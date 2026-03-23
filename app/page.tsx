// app/page.tsx
import Link from "next/link";

const categories = [  {
    id: "hunt",
    title: "Hunting",
    color: "bg-zinc-900",
    hoverColor: "hover:bg-red-900/40",
  },
  {
    id: "gather",
    title: "Gathering",
    color: "bg-stone-900",
    hoverColor: "hover:bg-green-900/40",
  },
  {
    id: "adapt",
    title: "Adapting",
    color: "bg-neutral-900",
    hoverColor: "hover:bg-blue-900/40",
  },
  {
    id: "protect",
    title: "Protecting",
    color: "bg-slate-900",
    hoverColor: "hover:bg-amber-900/40",
  },
];

export default function CrossroadsPage() {
  return (
    <main className="grid h-screen w-full grid-cols-1 md:grid-cols-2 overflow-hidden">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/${cat.id}`}
          className={`group relative flex items-center justify-center border-collapse border-[0.5px] border-border ${cat.color} ${cat.hoverColor} transition-all duration-700 ease-in-out`}
        >
          {/* Background Text / Watermark */}
          <span className="absolute text-[10vw] font-black opacity-5 group-hover:opacity-10 transition-opacity uppercase pointer-events-none">
            {cat.id}
          </span>

          {/* Foreground Content */}
          <div className="z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter text-(--text-primary) group-hover:scale-110 transition-transform duration-500">
              {cat.title}
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Explore the Instinct
            </p>
          </div>
        </Link>
      ))}


    </main>
  );
}
