// typescript file to import images and organize them into arrays with metadata
import { StaticImageData } from "next/image";
import p1 from "./photos/1.jpg";
import p2 from "./photos/2.jpg";
import p3 from "./photos/3.jpg";
import p4 from "./photos/4.jpg";
import p5 from "./photos/5.jpg";
import p6 from "./photos/6.jpg";
import p7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wonderImages: WonderImage[] = [
  {
    id: "1",
    name: "itza piramid",
    src: p1,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "2",
    name: "itza piramid",
    src: p2,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "3",
    name: "itza piramid",
    src: p3,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "4",
    name: "itza piramid",
    src: p4,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "5",
    name: "itza piramid",
    src: p5,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "6",
    name: "itza piramid",
    src: p6,
    photographer: "q",
    location: "Mexico",
  },
  {
    id: "7",
    name: "itza piramid",
    src: p7,
    photographer: "q",
    location: "Mexico",
  },
];

export default wonderImages;
