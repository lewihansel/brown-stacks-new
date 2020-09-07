import brownPhoto__mainImage from "./490px/ProjectDetails/MainImage.png";
import brownPhoto__desktop1 from "./490px/ProjectDetails/Desktop1.png";
import brownPhoto__desktop2 from "./490px/ProjectDetails/Desktop2.png";
import brownPhoto__desktop3 from "./490px/ProjectDetails/Desktop3.png";
import brownPhoto__mobile1 from "./490px/ProjectDetails/Mobile1.png";
import brownPhoto__mobile2 from "./490px/ProjectDetails/Mobile2.png";
import brownPhoto__mobile3 from "./490px/ProjectDetails/Mobile3.png";
import brownPhoto__mobileLast1 from "./490px/ProjectDetails/MobileLast1.png";
import brownPhoto__mobileLast2 from "./490px/ProjectDetails/MobileLast2.png";
import brownPhoto__otherMain from "./490px/DesktopView.png";
import brownPhoto__otherMobileFront from "./490px/490px__home.png";
import brownPhoto__otherMobileBack from "./490px/490px__modal.png";

import brownCommerce__mainImage from "./BrownCommerce/ProjectDetails/MainImage.png";
import brownCommerce__desktop1 from "./BrownCommerce/ProjectDetails/Desktop1.png";
import brownCommerce__desktop2 from "./BrownCommerce/ProjectDetails/Desktop2.png";
import brownCommerce__desktop3 from "./BrownCommerce/ProjectDetails/Desktop3.png";
import brownCommerce__mobile1 from "./BrownCommerce/ProjectDetails/Mobile1.png";
import brownCommerce__mobile2 from "./BrownCommerce/ProjectDetails/Mobile2.png";
import brownCommerce__mobile3 from "./BrownCommerce/ProjectDetails/Mobile3.png";
import brownCommerce__mobileLast1 from "./BrownCommerce/ProjectDetails/MobileLast1.png";
import brownCommerce__mobileLast2 from "./BrownCommerce/ProjectDetails/MobileLast2.png";
import brownCommerce__otherMain from "./BrownCommerce/DesktopView.png";
import brownCommerce__otherMobileFront from "./BrownCommerce/BrownCommerce__home.png";
import brownCommerce__otherMobileBack from "./BrownCommerce/BrownCommerce__checkout.png";

import brownMovie__mainImage from "./BrownMovie/ProjectDetails/MainImage.png";
import brownMovie__desktop1 from "./BrownMovie/ProjectDetails/Desktop1.png";
import brownMovie__desktop2 from "./BrownMovie/ProjectDetails/Desktop2.png";
import brownMovie__mobile1 from "./BrownMovie/ProjectDetails/Mobile1.png";
import brownMovie__mobile2 from "./BrownMovie/ProjectDetails/Mobile2.png";
import brownMovie__mobileLast1 from "./BrownMovie/ProjectDetails/MobileLast1.png";
import brownMovie__mobileLast2 from "./BrownMovie/ProjectDetails/MobileLast2.png";
import brownMovie__otherMain from "./BrownMovie/DesktopView.png";
import brownMovie__otherMobileFront from "./BrownMovie/BrownMovie__Home.png";
import brownMovie__otherMobileBack from "./BrownMovie/BrownMovie__modal1.png";

// project list import
import brownPhotoMain from "./490px/DesktopView.png";
import brownPhotoMobileFront from "./490px/490px__home.png";
import brownPhotoMobileBack from "./490px/490px__modal.png";

import brownMovieMain from "./BrownMovie/DesktopView.png";
import brownMovieMobileFront from "./BrownMovie/BrownMovie__Home.png";
import brownMovieMobileBack from "./BrownMovie/BrownMovie__modal1.png";

import brownCommerceMain from "./BrownCommerce/DesktopView.png";
import brownCommerceMobileFront from "./BrownCommerce/BrownCommerce__home.png";
import brownCommerceMobileBack from "./BrownCommerce/BrownCommerce__checkout.png";

const projectImages = {
  "brown-photo-app": {
    title: "490px",
    link: "https://brown-photo-share.netlify.app/",
    description:
      "490px was created with a photographer in mind. All UI is minimalistic to reduce the distraction so you can really focus on the photo only. The website is also designed to deliver a better experience from a mobile devices. Created using React with Firebase for database, authentication and storage bucket solution.",
    mainImage: brownPhoto__mainImage,
    uiPairs: [
      { desktop: brownPhoto__desktop1, mobile: brownPhoto__mobile1 },
      { desktop: brownPhoto__desktop2, mobile: brownPhoto__mobile2 },
      { desktop: brownPhoto__desktop3, mobile: brownPhoto__mobile3 },
    ],
    lastImage: [brownPhoto__mobileLast1, brownPhoto__mobileLast2],
    ohterImage: {
      main: brownPhoto__otherMain,
      front: brownPhoto__otherMobileFront,
      back: brownPhoto__otherMobileBack,
    },
    url: "brown-photo-app",
  },
  "brown-movie-lookup": {
    title: "Brown Movie Lookup",
    link: "https://brown-movie-lookup.netlify.app/",
    description:
      "This app was created to help people find information about the movie they want to watch. Created using React, consuming TMDB API. UI created using Chakra UI.",
    mainImage: brownMovie__mainImage,
    uiPairs: [
      { desktop: brownMovie__desktop1, mobile: brownMovie__mobile1 },
      { desktop: brownMovie__desktop2, mobile: brownMovie__mobile2 },
    ],
    lastImage: [brownMovie__mobileLast1, brownMovie__mobileLast2],
    ohterImage: {
      main: brownMovie__otherMain,
      front: brownMovie__otherMobileFront,
      back: brownMovie__otherMobileBack,
    },
    url: "brown-movie-lookup",
  },
  "brown-commerce": {
    title: "Brown Commerce",
    link: "https://brown-commerce.netlify.app/",
    description:
      "Find the best curated fashion and tech product from Brown Commerce. The UI was inspired by Amazon. Created using React, and Firebase as database and storage solution. All page is mobile responsive.",
    mainImage: brownCommerce__mainImage,
    uiPairs: [
      { desktop: brownCommerce__desktop1, mobile: brownCommerce__mobile1 },
      { desktop: brownCommerce__desktop2, mobile: brownCommerce__mobile2 },
      { desktop: brownCommerce__desktop3, mobile: brownCommerce__mobile3 },
    ],
    lastImage: [brownCommerce__mobileLast1, brownCommerce__mobileLast2],
    ohterImage: {
      main: brownCommerce__otherMain,
      front: brownCommerce__otherMobileFront,
      back: brownCommerce__otherMobileBack,
    },
    url: "brown-commerce",
  },
};
export default projectImages;

export const projectList = [
  {
    id: 1,
    images: {
      main: brownPhotoMain,
      front: brownPhotoMobileFront,
      back: brownPhotoMobileBack,
    },
    title: "490px",
    description:
      "Find inspiration, and share your best photo with others on 490px. All photo is uploaded by ohter photographer is provided with their camera setting, so you can learn more about photography technique",
    url: "brown-photo-app",
  },
  {
    id: 2,
    images: {
      main: brownMovieMain,
      front: brownMovieMobileFront,
      back: brownMovieMobileBack,
    },
    title: "Brown Movie Lookup",
    description:
      "Find all information about your favourite movie, plan your movie marathon using Brown Movie Lookup. Not just movie, Brown Movie Lookup will also help you find the best tv series information you want, to plan your watch.",
    url: "brown-movie-lookup",
  },
  {
    id: 3,
    images: {
      main: brownCommerceMain,
      front: brownCommerceMobileFront,
      back: brownCommerceMobileBack,
    },
    title: "Brown Commmerce",
    description:
      "Only best curated fashon and tech product. Brown Commerce will serve the best quality product to our loyal customer",
    url: "brown-commerce",
  },
];
