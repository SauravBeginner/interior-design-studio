import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { img, unsplash } from "../data/images";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  date: string;
  time: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  description: "",
  date: "",
  time: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function BookConsultation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.projectType) next.projectType = "Select a project type.";
    if (!form.budget) next.budget = "Select a budget range.";
    if (!form.description.trim()) next.description = "Tell us a little about the project.";
    if (!form.date) next.date = "Choose a preferred date.";
    if (!form.time) next.time = "Choose a preferred time.";
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "w-full border border-input bg-background px-4 py-3 text-sm focus:border-terracotta focus:outline-none";
  const errorClass = "mt-1.5 text-xs text-destructive";

  return (
    <div>
      <PageHero
        eyebrow="Get Started"
        title="Book a consultation."
        description="Tell us about your project and we'll schedule an introductory call with our design team."
        image={unsplash(img.heroBohoLiving, { w: 2000 })}
      />

      <section className="container-editorial pt-16 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-xl">
            <img
              src={unsplash(img.livingRoomSunroom, { w: 1000 })}
              alt="A sunlit living room designed by Studio Linden"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-terracotta">
              What happens next
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
              A 45-minute conversation, no obligation.
            </h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>We walk through your space, your budget and your timeline.</li>
              <li>You get an honest view of what is realistic and what it costs.</li>
              <li>If we are a fit, we send a scope and fixed fee within a week.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="hairline flex flex-col items-center pt-10 text-center">
              <CheckCircle2 className="text-terracotta" size={44} />
              <h2 className="mt-6 font-display text-3xl font-semibold">
                Consultation requested, {form.name.split(" ")[0]}.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                We've received your request for a {form.projectType.toLowerCase()} project on{" "}
                {new Date(form.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                around {form.time}. A member of Studio Linden will confirm by
                email at {form.email} within one business day.
              </p>
              <Button
                variant="outline"
                className="mt-8"
                onClick={() => {
                  setForm(initialState);
                  setSubmitted(false);
                }}
              >
                Book another consultation
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="projectType">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => update("projectType", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a project type</option>
                    <option>Full Home Design</option>
                    <option>Single Room</option>
                    <option>Renovation</option>
                    <option>Commercial / Office</option>
                    <option>Color Consultation</option>
                  </select>
                  {errors.projectType && <p className={errorClass}>{errors.projectType}</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="budget">
                  Budget Range
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a budget range</option>
                  <option>Under ₹10 lakh</option>
                  <option>₹10 – 25 lakh</option>
                  <option>₹25 – 50 lakh</option>
                  <option>₹50 lakh – ₹1 crore</option>
                  <option>Above ₹1 crore</option>
                </select>
                {errors.budget && <p className={errorClass}>{errors.budget}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="description">
                  Project Description
                </label>
                <textarea
                  id="description"
                  rows={5}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  className={inputClass}
                  placeholder="Tell us about your space, timeline and what you're hoping to achieve..."
                />
                {errors.description && <p className={errorClass}>{errors.description}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputClass}
                  />
                  {errors.date && <p className={errorClass}>{errors.date}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="time">
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={inputClass}
                  />
                  {errors.time && <p className={errorClass}>{errors.time}</p>}
                </div>
              </div>

              <Button type="submit" variant="terracotta" size="lg" className="w-full sm:w-auto">
                Request Consultation
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
