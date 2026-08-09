import Agriculture from "../images/islands/islandAgriculture.png";
import Climate from "../images/islands/islandClimate.png";
import Everyday from "../images/islands/islandEveryday.png";
import Jobs from "../images/islands/islandJobs.png";
import Nature from "../images/islands/islandNature.png";
import Recycling from "../images/islands/islandRecycling.png";
import Resources from "../images/islands/islandResources.png";

export interface NavigationCard {
  islandId: string;
  path: string;
  image: string;
  title: string;
}

export const ISLANDS_NAVIGATION: NavigationCard[]= [
  {
    islandId: "agriculture",
    path: "/agriculture",
    image: Agriculture,
    title: "Agriculture",
  },
  {
    islandId: "climate",
    path: "/climate",
    image: Climate,
    title: "Climate",
  },
  {
    islandId: "everyday",
    path: "/everyday",
    image: Everyday,
    title: "Everyday",
  },
  {
    islandId: "jobs",
    path: "/jobs",
    image: Jobs,
    title: "Jobs",
  },
  {
    islandId: "nature",
    path: "/nature",
    image: Nature,
    title: "Nature",
  },
  {
    islandId: "recycling",
    path: "/recycling",
    image: Recycling,
    title: "Recycling",
  },
  {
    islandId: "resources",
    path: "/resources",
    image: Resources,
    title: "Resources",
  },
];