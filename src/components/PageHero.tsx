import { type ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="container-editorial pt-28 md:pt-32">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="relative flex min-h-[max(320px,42vh)] flex-col justify-end p-6 text-white sm:p-10 md:min-h-[50vh] md:p-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/70 md:text-sm">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
