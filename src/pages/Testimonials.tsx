import { Link } from "react-router-dom";
import { ArrowRight, Quote, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <div>
      <PageHero
        eyebrow="Client Words"
        title="What it's like to work with us."
        description="Six clients on the projects featured throughout our portfolio."
        image={unsplash(img.kitchenBrightBar, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[hsl(35_55%_48%)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>
                <Quote className="text-terracotta/40" size={26} />
              </div>
              <p className="mt-6 flex-1 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-7 flex items-center gap-3">
                {t.avatar ? (
                  <img src={t.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 font-display text-sm text-terracotta">
                    {t.name.charAt(0)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline bg-secondary/40 py-20 text-center md:py-28">
        <div className="container-editorial">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Ready to become our next project?
          </h2>
          <Link to="/book-consultation" className="mt-8 inline-block">
            <Button variant="terracotta" size="lg">
              Book a Consultation <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
