import { img, unsplash } from "./images";

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Studio Linden gave us a home that feels considered in every corner, without ever feeling precious. Two years in, we still notice new details we love.",
    name: "Rohan & Divya Kapoor",
    context: "Whitefield Garden Residence",
    avatar: unsplash(img.portraitManDarkSuit, { w: 120, q: 70 }),
  },
  {
    quote:
      "Meera has an incredible ability to listen to what you actually want, not what you think you're supposed to want. Our loft feels completely like us.",
    name: "Ananya Bhatt",
    context: "Indiranagar Parkview Loft",
    avatar: unsplash(img.portraitWomanOrange, { w: 120, q: 70 }),
  },
  {
    quote:
      "We interviewed four design studios before choosing Linden. They were the only team that asked how our team actually works before showing us a single mood board.",
    name: "Karthik Subramaniam",
    context: "CEO, Prestige Atrium Workspace",
    avatar: unsplash(img.portraitManGlasses, { w: 120, q: 70 }),
  },
  {
    quote:
      "The renovation was more involved than any of us expected, and the team never once made us feel like it was a burden. Communication was constant and honest.",
    name: "Priya & Suresh Iyer",
    context: "Villa Serena Renovation",
  },
  {
    quote:
      "Aditya redesigned our office in a way that changed how the whole team works — quieter, warmer, and somehow more productive. Clients comment on it constantly.",
    name: "Neha Chandran",
    context: "Partner, The Reading Room",
  },
  {
    quote:
      "What stayed with us most was how little we had to explain. They understood the brief, and then improved on it in ways we hadn't thought to ask for.",
    name: "Vikram Malhotra",
    context: "Koramangala Family Home",
  },
];
