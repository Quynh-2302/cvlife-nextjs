import Autoplay from "embla-carousel-autoplay";
import React from "react";

import { Carousel } from "@/components/ui/carousel";
import FundCarouselContent from "./FundCarouselContent";

const CAROUSEL_DATA = [
  {
    id: "1",
    imgSrc: "/images/partner-1.png",
    imgAlt: "2-1",
    height: 1872,
    width: 642,
  },
  {
    id: "2",
    imgSrc: "/images/partner-2.png",
    imgAlt: "1-2",
    height: 1024,
    width: 500,
  },
  {
    id: "3",
    imgSrc: "/images/partner-3.png",
    imgAlt: "3-1",
    height: 8000,
    width: 4500,
  },
  {
    id: "4",
    imgSrc: "/images/partner-4.png",
    imgAlt: "4-1",
    height: 500,
    width: 300,
  },
  {
    id: "5",
    imgSrc: "/images/partner-5.png",
    imgAlt: "4-1",
    height: 3508,
    width: 2480,
  },
  {
    id: "1",
    imgSrc: "/images/partner-1.png",
    imgAlt: "2-1",
    height: 1872,
    width: 642,
  },
  {
    id: "2",
    imgSrc: "/images/partner-2.png",
    imgAlt: "1-2",
    height: 1024,
    width: 500,
  },
  {
    id: "3",
    imgSrc: "/images/partner-3.png",
    imgAlt: "3-1",
    height: 8000,
    width: 4500,
  },
  {
    id: "4",
    imgSrc: "/images/partner-4.png",
    imgAlt: "4-1",
    height: 500,
    width: 300,
  },
  {
    id: "5",
    imgSrc: "/images/partner-5.png",
    imgAlt: "4-1",
    height: 3508,
    width: 2480,
  },
];

const FundMutualCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ playOnInit: false, delay: 3000 }) as any]}
    >
      <FundCarouselContent CAROUSEL_DATA={CAROUSEL_DATA} />
    </Carousel>
  );
};

export default FundMutualCarousel;
