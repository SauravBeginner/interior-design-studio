import { img, unsplash } from "./images";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    name: "Meera Anand",
    role: "Principal Designer & Founder",
    bio: "Meera founded Studio Linden in 2014 after six years designing hospitality interiors across Southeast Asia. Her work is defined by restraint — she believes the best rooms are edited, not decorated. She leads every residential project personally, from first walkthrough to final styling.",
    photo: unsplash(img.portraitWomanOrange, { w: 800 }),
  },
  {
    name: "Aditya Rao",
    role: "Design Director",
    bio: "Aditya joined Studio Linden in 2017 and leads the studio's commercial and workplace practice. Trained as an architect, he brings a spatial-planning-first approach to every brief, and has led delivery on some of the studio's largest projects, including Prestige Atrium.",
    photo: unsplash(img.portraitManGlasses, { w: 800 }),
  },
];
