import { img } from "./images";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a walkthrough of your space and an in-depth conversation about how you actually live or work — not just what you'd like it to look like. This shapes the brief, budget and timeline for everything that follows.",
    image: img.heroStaircaseDining
  },
  {
    number: "02",
    title: "Concept & Mood Boards",
    description:
      "We develop two to three spatial and material directions, presented as mood boards, layout studies and reference imagery, so you can react to real options before we commit to one direction.",
    image: img.livingRoomJewelTone
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "The chosen concept is developed into detailed layouts, elevations, custom furniture drawings and a full specification — every material, fixture and finish decided and documented.",
    image: img.bedroomTuftedBench
  },
  {
    number: "04",
    title: "Sourcing",
    description:
      "Our studio sources and procures every element of the scheme — from custom-made joinery to vintage finds — tracking lead times so nothing holds up your installation date.",
    image: img.livingRoomMirrors
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Our team manages delivery, placement and final styling on site, coordinating trades and installers so the space comes together in a single, tightly managed installation window.",
    image: img.kitchenIslandPendant
  },
  {
    number: "06",
    title: "Handover",
    description:
      "A final walkthrough together, a full documentation pack for every product and material used, and a studio that stays reachable long after the last cushion is placed.",
    image: img.livingRoomSunroom
  },
];
