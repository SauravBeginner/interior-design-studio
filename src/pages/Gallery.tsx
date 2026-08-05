import { useState } from "react";
import PageHero from "../components/PageHero";
import { cn } from "../lib/utils";
import { img, unsplash } from "../data/images";
import { galleryImages, galleryCategories, type GalleryCategory } from "../data/gallery";

type Filter = "All" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="A closer look at the work."
        description="Browse finished spaces by room type, drawn from projects across our residential and commercial portfolio."
        image={unsplash(img.bedroomMoody, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="mb-14 flex flex-wrap gap-3">
          {(["All", ...galleryCategories] as Filter[]).map((f) => (
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

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {filtered.map((image, i) => (
            <figure key={image.src + i} className="group relative overflow-hidden break-inside-avoid">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
