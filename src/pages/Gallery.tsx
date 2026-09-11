import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import { cn } from "../lib/utils";
import { img, unsplash } from "../data/images";
import { galleryImages, galleryCategories, type GalleryCategory } from "../data/gallery";

type Filter = "All" | GalleryCategory;

/** Masonry needs explicit columns so the bottom edge can be made flush. */
function useColumnCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const measure = () =>
      setCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return count;
}

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  const columnCount = useColumnCount();
  const columns = Array.from({ length: columnCount }, (_, c) =>
    filtered.filter((_, i) => i % columnCount === c),
  );

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

        {/* Columns stretch to the tallest, and each column's last tile absorbs the
            remainder, so every column ends on the same line. */}
        <div className="flex items-stretch gap-6">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-1 flex-col gap-6">
              {column.map((image, i) => {
                const isLast = i === column.length - 1;
                return (
                  <figure
                    key={image.src + i}
                    className={cn(
                      "group relative overflow-hidden",
                      isLast && "min-h-[200px] flex-1",
                    )}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className={cn(
                        "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                        isLast && "h-full",
                      )}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {image.caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
