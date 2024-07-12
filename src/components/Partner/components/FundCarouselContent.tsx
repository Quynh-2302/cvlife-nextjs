import React from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useFundCarousel } from "@/hooks/useFundCarousel";
import Image from "next/image";

interface CarouselItem {
  id: string;
  imgSrc: string;
  imgAlt: string;
  height: number;
  width: number;
}

interface FundCarouselContentProps {
  CAROUSEL_DATA: CarouselItem[];
}

const FundCarouselContent: React.FC<FundCarouselContentProps> = ({
  CAROUSEL_DATA,
}) => {
  const { carouselRef } = useFundCarousel();

  return (
    <div className="group relative -mt-[5rem]">
      <CarouselContent className="-ml-[3rem] py-3" ref={carouselRef}>
        {CAROUSEL_DATA.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-[3rem] md:basis-1/4 lg:basis-1/5"
          >
            <div
              className="relative w-full h-full"
              style={{
                aspectRatio: `${item.height}/${item.width}`,
              }}
            >
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </div>
  );
};

export default FundCarouselContent;
