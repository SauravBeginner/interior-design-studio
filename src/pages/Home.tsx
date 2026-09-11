import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";
import { projects } from "../data/projects";
import { processSteps } from "../data/process";
import { testimonials } from "../data/testimonials";
import { services } from "../data/services";
import { stats } from "../data/stats";

const featuredProjects = projects.slice(0, 4);
const processTeaser = processSteps.slice(0, 4);
const testimonialTeaser = testimonials.slice(0, 3);
const serviceTeaser = services.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container-editorial pt-28 md:pt-32">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={unsplash(img.livingRoomWarm, { w: 2400 })}
            alt="Warm, light-filled living room designed by Studio Linden"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          <div className="relative flex min-h-[max(540px,68vh)] flex-col justify-end p-6 text-white sm:p-10 md:min-h-[76vh] md:p-14">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/70 md:text-sm">
              Residential &amp; Commercial Interior Design
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              Rooms people don't want to leave.
            </h1>
            <p className="mt-6 max-w-lg text-base text-white/85 md:text-lg">
              Studio Linden is a Bangalore-based interior design studio crafting
              considered residential and commercial spaces — editorial, warm,
              and built to be lived in.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/portfolio">
                <Button variant="terracotta" size="lg">
                  View Our Portfolio
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/book-consultation">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  Start a Project
                </Button>
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[img.portraitManDarkSuit, img.portraitWomanOrange, img.portraitManGlasses].map((face) => (
                  <img
                    key={face}
                    src={unsplash(face, { w: 96, q: 70 })}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white/80 object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">84 projects delivered since 2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-editorial pt-14 md:pt-20">
        <div className="grid grid-cols-2 gap-y-10 border-y border-border py-10 md:grid-cols-4 md:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-terracotta md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Since 2014</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              A studio built on restraint, not decoration.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe the best interiors are edited, not decorated. Every
              project starts with how a space is actually used — then we
              build a material palette, a furniture plan, and a lighting
              scheme around that truth. The result is quiet, considered work
              that still feels unmistakably designed.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-terracotta"
            >
              More about the studio <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-5">What We Do</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Design services for every stage of a space.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-terracotta"
          >
            View all services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceTeaser.map((service) => (
            <Link
              to="/services"
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={unsplash(service.image, { w: 800 })}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected projects */}
      <section className="hairline bg-secondary/40 py-20 md:py-28">
        <div className="container-editorial">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Selected Work</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Recent Projects</h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-terracotta"
            >
              View full portfolio <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Link
                to={`/portfolio/${project.slug}`}
                key={project.slug}
                className={`group block ${i % 3 === 0 ? "sm:col-span-2" : ""}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.name}
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      i % 3 === 0 ? "h-[28rem]" : "h-80"
                    }`}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.category} — {project.location}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-terracotta opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-5">How We Work</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">From first walkthrough to final styling.</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processTeaser.map((step) => (
            <div key={step.number} className="hairline pt-6">
              <span className="font-display text-4xl font-semibold text-terracotta">{step.number}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <Link
          to="/process"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-terracotta"
        >
          See our full process <ArrowUpRight size={16} />
        </Link>
      </section>

      {/* Testimonials */}
      <section className="hairline bg-primary py-24 text-primary-foreground md:py-32">
        <div className="container-editorial">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-5">Client Words</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">What clients say</h2>
            </div>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:text-terracotta"
            >
              Read all client stories <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonialTeaser.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl bg-primary-foreground/[0.07] p-8"
              >
                <div className="flex gap-1 text-[hsl(35_65%_62%)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-primary-foreground/90">
                  "{t.quote}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt=""
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 font-display text-sm">
                      {t.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-sm text-primary-foreground/60">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden py-20 text-center md:py-28">
        <img
          src={unsplash(img.heroFarmhouseBeams, { w: 2000 })}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-editorial relative z-10">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white md:text-5xl">
            Have a space in mind? Let's talk about it.
          </h2>
          <Link to="/book-consultation" className="mt-10 inline-block">
            <Button variant="terracotta" size="lg">
              Book a Consultation
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
