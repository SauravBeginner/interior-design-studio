import PageHero from "../components/PageHero";
import { img, unsplash } from "../data/images";
import { team } from "../data/team";

const stats = [
  { value: "11", label: "Years in practice" },
  { value: "84", label: "Projects completed" },
  { value: "6", label: "Design awards" },
  { value: "3", label: "Cities served" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About the Studio"
        title="Design that starts with how you live."
        image={unsplash(img.heroFarmhouseBeams, { w: 2000 })}
      />

      {/* Story */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              Eleven years of considered rooms.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              Studio Linden was founded in 2014 by Meera Anand, out of a
              conviction that most interior design tries too hard. After
              years designing hotel interiors across Southeast Asia, she
              opened a small studio in Bangalore with a simple brief for
              every project: design the room around how someone actually
              lives, not around a trend.
            </p>
            <p>
              Eleven years on, the studio has grown into a nine-person team
              working across residential and commercial interiors throughout
              South India, but the brief hasn't changed. We still start every
              project with a long conversation before a single mood board,
              and we still believe restraint is the hardest and most valuable
              thing a designer can offer a client.
            </p>
            <p>
              Today the studio is led by Meera Anand and Design Director
              Aditya Rao, supported by a small team of designers, a dedicated
              sourcing lead, and a site-management team that sees every
              renovation through to completion.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="hairline bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow mb-5">Our Approach</p>
          <h2 className="mb-14 font-display text-3xl font-semibold md:text-4xl">
            Three ideas guide every project.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <span className="font-display text-4xl font-semibold text-terracotta">01</span>
              <h3 className="mt-4 font-display text-xl font-semibold">Restraint over decoration</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We edit as much as we add. A room with fewer, better things
                will always outlast one filled with trends.
              </p>
            </div>
            <div>
              <span className="font-display text-4xl font-semibold text-terracotta">02</span>
              <h3 className="mt-4 font-display text-xl font-semibold">Function before finish</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                No material or layout decision is made until we understand
                exactly how a space needs to work, day to day.
              </p>
            </div>
            <div>
              <span className="font-display text-4xl font-semibold text-terracotta">03</span>
              <h3 className="mt-4 font-display text-xl font-semibold">Built to be lived in</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every scheme is tested against real life — pets, kids, guests,
                long days — not just how it photographs on the day it's done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-editorial grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-terracotta md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-editorial py-24 md:py-32">
        <p className="eyebrow mb-5">Leadership</p>
        <h2 className="mb-14 font-display text-3xl font-semibold md:text-4xl">The people behind the work.</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.name}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-terracotta">{member.role}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
