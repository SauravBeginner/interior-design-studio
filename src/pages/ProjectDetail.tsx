import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container-editorial flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <Link to="/portfolio" className="mt-8">
          <Button variant="terracotta">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[460px] items-end overflow-hidden">
        <img src={project.cover} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="container-editorial relative z-10 pb-16 text-white">
          <p className="eyebrow mb-4 text-white/90">{project.category}</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <Link
          to="/portfolio"
          className="mb-14 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="space-y-8 md:col-span-4">
            <div>
              <p className="eyebrow mb-2">Location</p>
              <p className="text-lg">{project.location}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Year</p>
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Size</p>
              <p className="text-lg">{project.size}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Scope</p>
              <ul className="space-y-1">
                {project.scope.map((s) => (
                  <li key={s} className="text-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {project.gallery.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`${project.name} detail ${i + 1}`}
              className={`w-full object-cover ${i === 0 ? "sm:col-span-2 h-[32rem]" : "h-96"}`}
            />
          ))}
        </div>
      </section>

      <section className="hairline bg-secondary/40 py-20">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Next Project</p>
            <h3 className="font-display text-2xl font-semibold">{next.name}</h3>
          </div>
          <Link to={`/portfolio/${next.slug}`}>
            <Button variant="outline">
              View Project <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
