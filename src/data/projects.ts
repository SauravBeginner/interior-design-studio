import { img, unsplash } from "./images";

export type ProjectCategory = "Residential" | "Commercial" | "Renovation";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: string;
  size: string;
  description: string;
  cover: string;
  gallery: string[];
  scope: string[];
}

export const projects: Project[] = [
  {
    slug: "whitefield-garden-residence",
    name: "Whitefield Garden Residence",
    category: "Residential",
    location: "Whitefield, Bangalore",
    year: "2024",
    size: "4,200 sq. ft.",
    description:
      "A four-bedroom family home built around a central courtyard, reworked with a warm, gallery-like palette and custom joinery throughout. We opened up the ground floor into one continuous living, dining and reading sequence, letting the garden read as part of the interior.",
    cover: unsplash(img.livingRoomGallery),
    gallery: [
      unsplash(img.livingRoomGallery),
      unsplash(img.livingRoomWarm),
      unsplash(img.bedroomBrightGlassDoors),
      unsplash(img.kitchenWhiteRed),
    ],
    scope: ["Full Interior Design", "Space Planning", "Furniture Curation", "Lighting Design"],
  },
  {
    slug: "indiranagar-parkview-loft",
    name: "Indiranagar Parkview Loft",
    category: "Residential",
    location: "Indiranagar, Bangalore",
    year: "2023",
    size: "1,850 sq. ft.",
    description:
      "A young couple's first home, designed as one open loft with a cobalt anchor sofa against warm parquet flooring. Every piece was chosen to be lived on, not around — durable fabrics, low-maintenance surfaces, storage built into every wall.",
    cover: unsplash(img.livingRoomBlueSofa),
    gallery: [unsplash(img.livingRoomBlueSofa), unsplash(img.bedroomNightstand)],
    scope: ["Full Interior Design", "Furniture Curation"],
  },
  {
    slug: "koramangala-family-home",
    name: "Koramangala Family Home",
    category: "Residential",
    location: "Koramangala, Bangalore",
    year: "2023",
    size: "3,100 sq. ft.",
    description:
      "A multigenerational household spanning three floors, unified with a consistent material language — brushed brass, cane, and warm plaster — so every floor feels part of the same home despite very different daily rhythms.",
    cover: unsplash(img.livingRoomMirrors),
    gallery: [unsplash(img.livingRoomMirrors), unsplash(img.bedroomHotelStyle)],
    scope: ["Full Interior Design", "Space Planning", "Color Consultation"],
  },
  {
    slug: "hsr-layout-apartment-refresh",
    name: "HSR Layout Apartment Refresh",
    category: "Residential",
    location: "HSR Layout, Bangalore",
    year: "2022",
    size: "1,400 sq. ft.",
    description:
      "A compact two-bedroom apartment refreshed on a tight timeline without a full renovation — new upholstery, a reworked seating plan, and a considered layer of textiles and objects that made the existing shell feel entirely new.",
    cover: unsplash(img.livingRoomCozyKnit),
    gallery: [unsplash(img.livingRoomCozyKnit), unsplash(img.livingRoomSunroom)],
    scope: ["Color Consultation", "Furniture Curation"],
  },
  {
    slug: "prestige-atrium-workspace",
    name: "Prestige Atrium Workspace",
    category: "Commercial",
    location: "Outer Ring Road, Bangalore",
    year: "2024",
    size: "12,000 sq. ft.",
    description:
      "A 120-seat technology office designed to feel nothing like a technology office — warm timber flooring, low partitions, and a material palette borrowed from hospitality design to support long, focused work days.",
    cover: unsplash(img.officeOpenWood),
    gallery: [
      unsplash(img.officeOpenWood),
      unsplash(img.officeDeskPlant),
      unsplash(img.officeDeskCityView),
    ],
    scope: ["Space Planning", "Full Interior Design", "Furniture Curation", "Renovation Management"],
  },
  {
    slug: "the-reading-room-boutique-office",
    name: "The Reading Room — Boutique Office",
    category: "Commercial",
    location: "Lavelle Road, Bangalore",
    year: "2023",
    size: "3,600 sq. ft.",
    description:
      "A private wealth advisory office designed around a single material idea: a continuous plaster arch motif borrowed from the client's family home, softened with cane furniture and an entirely book-lined reception hall.",
    cover: unsplash(img.officeArchedHall),
    gallery: [unsplash(img.officeArchedHall), unsplash(img.officeLoungeWood)],
    scope: ["Full Interior Design", "Space Planning", "Lighting Design"],
  },
  {
    slug: "villa-serena-renovation",
    name: "Villa Serena Renovation",
    category: "Renovation",
    location: "Sarjapur Road, Bangalore",
    year: "2024",
    size: "5,400 sq. ft.",
    description:
      "A dated 2008-built villa, stripped back to its shell and rebuilt around exposed timber beams, arched openings, and a completely reworked material palette. The renovation touched every room, including a full structural change to the kitchen and primary bathroom.",
    cover: unsplash(img.exteriorModernHouse),
    gallery: [
      unsplash(img.exteriorModernHouse),
      unsplash(img.heroFarmhouseBeams),
      unsplash(img.bathroomDarkModern),
      unsplash(img.kitchenBrightBar),
    ],
    scope: ["Renovation Management", "Full Interior Design", "Space Planning", "Sourcing"],
  },
  {
    slug: "jayanagar-kitchen-bath-remodel",
    name: "Jayanagar Kitchen & Bath Remodel",
    category: "Renovation",
    location: "Jayanagar, Bangalore",
    year: "2022",
    size: "600 sq. ft. remodeled",
    description:
      "A gut renovation of a 1990s kitchen and adjoining bathroom for a family who intended to stay in their home for another twenty years — durable stone surfaces, a completely reworked layout, and a warm-toned material palette built to age well.",
    cover: unsplash(img.kitchenBrightBar),
    gallery: [unsplash(img.kitchenBrightBar), unsplash(img.bathroomDarkModern)],
    scope: ["Renovation Management", "Space Planning"],
  },
];

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Renovation"];
