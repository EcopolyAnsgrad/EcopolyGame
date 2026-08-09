import Agriculture from "../images/islands/islandAgriculture.png";
import Climate from "../images/islands/islandClimate.png";
import Everyday from "../images/islands/islandEveryday.png";
import Jobs from "../images/islands/islandJobs.png";
import Nature from "../images/islands/islandNature.png";
import Recycling from "../images/islands/islandRecycling.png";
import Resources from "../images/islands/islandResources.png";

export interface NavigationCard {
  path: string;
  image: string;
  title: string;
}

export const ISLANDS_NAVIGATION: NavigationCard[]= [
  {
    path: "/agriculture",
    image: Agriculture,
    title: "Agriculture",
  },
  {
    path: "/climate",
    image: Climate,
    title: "Climate",
  },
  {
    path: "/everyday",
    image: Everyday,
    title: "Everyday",
  },
  {
    path: "/jobs",
    image: Jobs,
    title: "Jobs",
  },
  {
    path: "/nature",
    image: Nature,
    title: "Nature",
  },
  {
    path: "/recycling",
    image: Recycling,
    title: "Recycling",
  },
  {
    path: "/resources",
    image: Resources,
    title: "Resources",
  },
];