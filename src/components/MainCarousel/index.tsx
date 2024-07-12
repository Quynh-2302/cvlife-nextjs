"use client";

import Autoplay from "embla-carousel-autoplay";
import React, { ReactNode } from "react";

import { Carousel } from "@/components/ui/carousel";
import MainCarouselContent from "./components/MainCarouselContent";

export interface PageLayoutProps {
  title: string;
  desc: string;
  contact?: string;
  explore?: string;
}

const MainCarousel: React.FC<PageLayoutProps> = ({
  title,
  desc,
  contact,
  explore,
}) => {
  return (
    <main>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ playOnInit: false, delay: 10000 }) as any]}
      >
        <MainCarouselContent
          title={title}
          desc={desc}
          contact={contact}
          explore={explore}
        />
      </Carousel>
    </main>
  );
};

export default MainCarousel;
