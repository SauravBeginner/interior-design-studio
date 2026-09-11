import PageHero from "../components/PageHero";
import { img, unsplash } from "../data/images";
import { team } from "../data/team";
import { stats } from "../data/stats";

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About the Studio"
        title="Design that starts with how you live."
        image={unsplash(img.heroFarmhouseBeams, { w: 2000 })}
      />

      {/* Story */}
      <section className="container-editorial py-20 md:py-28">
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
      <section className="hairline bg-secondary/40 py-20 md:py-28">
        <div className="container-editorial">
          <p className="eyebrow mb-5">Our Approach</p>
          <h2 className="mb-14 font-display text-3xl font-semibold md:text-4xl">
            Three ideas guide every project.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Restraint over decoration",
                body: "We edit as much as we add. A room with fewer, better things will always outlast one filled with trends.",
                image: img.livingRoomSunroom,
              },
              {
                n: "02",
                title: "Function before finish",
                body: "No material or layout decision is made until we understand exactly how a space needs to work, day to day.",
                image: img.kitchenGreenCabinets,
              },
              {
                n: "03",
                title: "Built to be lived in",
                body: "Every scheme is tested against real life — pets, kids, guests, long days — not just how it photographs on the day it's done.",
                image: img.bedroomNightstand,
              },
            ].map((idea) => (
              <div
                key={idea.n}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={unsplash(idea.image, { w: 800 })}
                    alt={idea.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <span className="font-display text-4xl font-semibold text-terracotta">
                    {idea.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{idea.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{idea.body}</p>
                </div>
              </div>
            ))}
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
      <section className="container-editorial py-20 md:py-28">
        <p className="eyebrow mb-5">Leadership</p>
        <h2 className="mb-14 font-display text-3xl font-semibold md:text-4xl">The people behind the work.</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="w-36 shrink-0 overflow-hidden rounded-2xl sm:w-44">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div>
              <h3 className="font-display text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-terracotta">{member.role}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
