import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <div>
      <PageHero
        eyebrow="How We Work"
        title="From first walkthrough to final styling."
        description="A structured process built over eleven years of projects, refined to keep every client informed and every timeline honest."
        image={unsplash(img.bedroomBrightGlassDoors, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="space-y-20 md:space-y-28">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={unsplash(step.image, { w: 1000 })}
                  alt={step.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-5xl font-semibold text-terracotta md:text-6xl">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline bg-secondary/40 py-20 text-center md:py-28">
        <div className="container-editorial">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold md:text-4xl">
            Ready to start with Discovery?
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
