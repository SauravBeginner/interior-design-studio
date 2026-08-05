import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { cn } from "../lib/utils";
import { img, unsplash } from "../data/images";
import { projects, projectCategories, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio of considered spaces."
        description="Residential and commercial interiors across Bangalore, from full-scale renovations to single-room refreshes."
        image={unsplash(img.livingRoomGallery, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="mb-14 flex flex-wrap gap-3">
          {(["All", ...projectCategories] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "border px-5 py-2 text-sm tracking-wide transition-colors",
                filter === f
                  ? "border-terracotta bg-terracotta text-white"
                  : "border-border text-muted-foreground hover:border-terracotta hover:text-terracotta"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link to={`/portfolio/${project.slug}`} key={project.slug} className="group block">
              <div className="overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.name}
                  className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category} — {project.location}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {project.description}
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

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>
    </div>
  );
}
