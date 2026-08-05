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
        image={unsplash(img.officeArchedHall, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div key={service.title} className="hairline pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/40 text-terracotta">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
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
