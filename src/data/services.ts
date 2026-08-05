export interface Service {
  title: string;
  description: string;
  icon: "Home" | "Ruler" | "Sofa" | "Palette" | "Hammer" | "Compass";
}

export const services: Service[] = [
  {
    title: "Full Interior Design",
    description:
      "End-to-end design of a home or workspace — concept, material palette, furniture, lighting and styling, delivered as one coherent scheme from the first sketch to the final walkthrough.",
    icon: "Home",
  },
  {
    title: "Space Planning",
    description:
      "Layout and spatial strategy for new builds, renovations, or rooms that simply aren't working — how a space is organized, before a single finish is chosen.",
    icon: "Ruler",
  },
  {
    title: "Furniture Curation",
    description:
      "A fully sourced furniture and object scheme spanning custom joinery, vintage pieces, and considered new buys — procured, tracked and installed by our team.",
    icon: "Sofa",
  },
  {
    title: "Color Consultation",
    description:
      "A focused session and full palette proposal for clients who need direction on paint, materials and finishes without a complete redesign.",
    icon: "Palette",
  },
  {
    title: "Renovation Management",
    description:
      "On-site project management through structural and finishing work — contractor coordination, site visits and quality checks, so the design intent survives construction.",
    icon: "Hammer",
  },
  {
    title: "Design Direction",
    description:
      "Ongoing design advisory for multi-phase or multi-property projects, including developers and repeat commercial clients who need a consistent design point of view.",
    icon: "Compass",
  },
];
