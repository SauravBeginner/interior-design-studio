import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";
import { projects } from "../data/projects";
import { processSteps } from "../data/process";
import { testimonials } from "../data/testimonials";

const featuredProjects = projects.slice(0, 4);
const processTeaser = processSteps.slice(0, 4);
const testimonialTeaser = testimonials.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[600px] items-end overflow-hidden">
        <img
          src={unsplash(img.heroStaircaseDining, { w: 2400 })}
          alt="Architectural staircase and dining space designed by Studio Linden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
        <div className="container-editorial relative z-10 pb-20 text-white">
          <p className="eyebrow mb-5 text-white/90">Residential &amp; Commercial Interior Design</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Rooms people don't want to leave.
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/85 md:text-lg">
            Studio Linden is a Bangalore-based interior design studio crafting
            considered residential and commercial spaces — editorial, warm,
            and built to be lived in.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
                className="border-white text-white hover:border-terracotta hover:text-terracotta"
              >
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="container-editorial py-24 md:py-32">
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

      {/* Selected projects */}
      <section className="hairline bg-secondary/40 py-24 md:py-32">
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
      <section className="container-editorial py-24 md:py-32">
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
          <p className="eyebrow mb-5">Client Words</p>
          <h2 className="mb-14 font-display text-3xl font-semibold md:text-4xl">What clients say</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonialTeaser.map((t) => (
              <div key={t.name} className="flex flex-col">
                <p className="text-lg leading-relaxed text-primary-foreground/90">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-primary-foreground/60">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden py-28 text-center md:py-36">
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
