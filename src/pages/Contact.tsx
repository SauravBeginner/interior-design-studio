import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your space."
        description="Reach out with a few details and our studio will get back to you within two business days."
        image={unsplash(img.officeLoungeWood, { w: 2000 })}
      />

      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="space-y-10 md:col-span-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={unsplash(img.officeDeskPlant, { w: 900 })}
                alt="The Studio Linden office in Indiranagar"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-terracotta" size={20} />
              <div>
                <p className="font-medium">Studio Address</p>
                <p className="mt-1 text-muted-foreground">
                  4th Floor, Indiranagar 100ft Road, Bangalore 560038
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-terracotta" size={20} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="mt-1 text-muted-foreground">+91 80 4123 5566</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-terracotta" size={20} />
              <div>
                <p className="font-medium">Email</p>
                <p className="mt-1 text-muted-foreground">hello@studiolinden.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-terracotta" size={20} />
              <div>
                <p className="font-medium">Studio Hours</p>
                <p className="mt-1 text-muted-foreground">Monday – Saturday, 10am – 6:30pm</p>
              </div>
            </div>

            <div className="aspect-square w-full overflow-hidden">
              <iframe
                title="Studio Linden location"
                src="https://www.google.com/maps?q=Indiranagar+100ft+Road,+Bangalore,+560038&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {submitted ? (
              <div className="hairline flex flex-col items-start pt-8">
                <CheckCircle2 className="text-terracotta" size={40} />
                <h2 className="mt-6 font-display text-2xl font-semibold">Thank you, {name.split(" ")[0] || "there"}.</h2>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  Your message has been received. A member of our studio will
                  get back to you within two business days.
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    required
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full border border-input bg-background px-4 py-3 text-sm focus:border-terracotta focus:outline-none"
                    placeholder="Tell us a bit about your space..."
                  />
                </div>
                <Button type="submit" variant="terracotta" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
