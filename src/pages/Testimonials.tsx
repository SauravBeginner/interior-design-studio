import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
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
        image={unsplash(img.livingRoomCozyKnit, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="hairline pt-8">
              <Quote className="text-terracotta" size={28} />
              <p className="mt-6 text-xl leading-relaxed">"{t.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline bg-secondary/40 py-24 text-center md:py-28">
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
