import React from "react";
import { Icons } from "@/assets/icons";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/breakpoint";

import { useFundCarousel } from "@/hooks/useFundCarousel";
import SlideImage from "./SlideImage";
import { PageLayoutProps } from "..";

const MainCarouselContent: React.FC<PageLayoutProps> = ({
  title,
  desc,
  contact,
  explore,
}) => {
  const isMobile = useMobile();
  const {
    carouselRef,
    selectedIndex,
    scrollSnaps,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    onDotButtonClick,
  } = useFundCarousel();

  return (
    <div className="relative">
      <CarouselContent ref={carouselRef}>
        {CAROUSEL_DATA.map((item, key) => (
          <CarouselItem key={key} className="w-full">
            <SlideImage
              id={key}
              image={item.image}
              title={title}
              content={{ __html: desc }}
              contact={contact || ""}
              explore={explore || ""}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <button
        className={cn(
          "absolute left-4 top-1/2 z-10 -translate-y-1/2 opacity-0 transition duration-300 hover:opacity-100 text-white",
          {
            hidden: isMobile,
          }
        )}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        type="button"
      >
        <Icons.chevronLeft size={42} />
      </button>

      <button
        className={cn(
          "absolute right-4 top-1/2 z-10 -translate-y-1/2 color-white opacity-0 transition duration-300 hover:opacity-100 text-white",
          {
            hidden: isMobile,
          }
        )}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        type="button"
      >
        <Icons.chevronRight size={42} />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2 md:bottom-6 z-10">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            aria-label="dot"
            style={{
              height: "0.75rem",
              width: "0.75rem",
              borderRadius: "9999px",
              backgroundColor: selectedIndex === index ? "white" : "unset",
              border: selectedIndex === index ? "none" : "1px solid white",
            }}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarouselContent;

export const CAROUSEL_DATA = [
  {
    image: "/images/slider-2.jpg",
  },
  {
    image: "/images/slider-4.jpg",
  },
];

type PropType = React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
