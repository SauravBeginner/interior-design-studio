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
        image={unsplash(img.heroOpenPlanDog, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="relative">
          <div className="hairline absolute left-6 top-0 hidden h-full md:block" />
          <div className="space-y-16 md:space-y-20">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 md:block">
                    <span className="font-display text-5xl font-semibold text-terracotta md:text-6xl">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9 md:col-start-4">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && <div className="hairline md:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline bg-secondary/40 py-24 text-center md:py-28">
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
