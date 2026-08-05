import { img, unsplash } from "./images";

export type GalleryCategory = "Living Rooms" | "Kitchens" | "Bedrooms" | "Commercial";

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  { src: unsplash(img.livingRoomWarm), category: "Living Rooms", caption: "Whitefield Garden Residence" },
  { src: unsplash(img.livingRoomGallery), category: "Living Rooms", caption: "Whitefield Garden Residence" },
  { src: unsplash(img.livingRoomBlueSofa), category: "Living Rooms", caption: "Indiranagar Parkview Loft" },
  { src: unsplash(img.livingRoomCozyKnit), category: "Living Rooms", caption: "HSR Layout Apartment Refresh" },
  { src: unsplash(img.livingRoomSunroom), category: "Living Rooms", caption: "HSR Layout Apartment Refresh" },
  { src: unsplash(img.livingRoomMirrors), category: "Living Rooms", caption: "Koramangala Family Home" },

  { src: unsplash(img.kitchenWhiteRed), category: "Kitchens", caption: "Whitefield Garden Residence" },
  { src: unsplash(img.kitchenWoodOpenPlan), category: "Kitchens", caption: "Indiranagar Parkview Loft" },
  { src: unsplash(img.kitchenGreenCabinets), category: "Kitchens", caption: "Koramangala Family Home" },
  { src: unsplash(img.kitchenIslandPendant), category: "Kitchens", caption: "HSR Layout Apartment Refresh" },
  { src: unsplash(img.kitchenMarbleIsland), category: "Kitchens", caption: "Villa Serena Renovation" },
  { src: unsplash(img.kitchenBrightBar), category: "Kitchens", caption: "Jayanagar Kitchen & Bath Remodel" },

  { src: unsplash(img.bedroomMoody), category: "Bedrooms", caption: "Koramangala Family Home" },
  { src: unsplash(img.bedroomBrightGlassDoors), category: "Bedrooms", caption: "Whitefield Garden Residence" },
  { src: unsplash(img.bedroomNightstand), category: "Bedrooms", caption: "Indiranagar Parkview Loft" },
  { src: unsplash(img.bedroomTuftedBench), category: "Bedrooms", caption: "Villa Serena Renovation" },
  { src: unsplash(img.bedroomHotelStyle), category: "Bedrooms", caption: "Koramangala Family Home" },

  { src: unsplash(img.officeOpenWood), category: "Commercial", caption: "Prestige Atrium Workspace" },
  { src: unsplash(img.officeDeskPlant), category: "Commercial", caption: "Prestige Atrium Workspace" },
  { src: unsplash(img.officeArchedHall), category: "Commercial", caption: "The Reading Room" },
  { src: unsplash(img.officeLoungeWood), category: "Commercial", caption: "The Reading Room" },
  { src: unsplash(img.officeDeskCityView), category: "Commercial", caption: "Prestige Atrium Workspace" },
];

export const galleryCategories: GalleryCategory[] = ["Living Rooms", "Kitchens", "Bedrooms", "Commercial"];
