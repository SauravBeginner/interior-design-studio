import { type ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="container-editorial relative z-10 pb-16 text-white">
        <p className="eyebrow mb-4 text-white/90">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
