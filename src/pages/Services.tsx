import { Link } from "react-router-dom";
import { Home, Ruler, Sofa, Palette, Hammer, Compass, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";
import { services } from "../data/services";

const icons = { Home, Ruler, Sofa, Palette, Hammer, Compass };

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Design services for every stage of a space."
        description="From a single consultation to full-scale renovation management, our services scale to meet the size of your project."
        image={unsplash(img.livingRoomMirrors, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
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
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="hairline bg-primary py-24 text-center text-primary-foreground md:py-28">
        <div className="container-editorial">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70">
            Most projects start with a single consultation. We'll help you
            work out the right scope from there.
          </p>
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
