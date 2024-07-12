import Autoplay from "embla-carousel-autoplay";
import React from "react";

import { Carousel } from "@/components/ui/carousel";
import NewsCarouselContent from "./NewsCarouselContent";

const NewsCarousel = () => {
  return (
    <div className="container mx-auto">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ playOnInit: false, delay: 3000 }) as any]}
      >
        <NewsCarouselContent />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
