import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/assets/icons";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useMobile } from "@/hooks/breakpoint";
import { useFundCarousel } from "@/hooks/useFundCarousel";

import { cn } from "@/lib/utils";
import NewsCard from "./NewsCard";

const NewsCarouselContent = () => {
  const isMobile = useMobile();
  const { carouselRef } = useFundCarousel();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl mb-6 font-semibold leading-normal text-[#181818] lg:text-3xl">
          {/* {t("ourMutualFundProducts")} */}
          Mạng lưới
        </h2>
      </div>

      <div className="group relative">
        <CarouselContent className="-ml-[3rem]" ref={carouselRef}>
          {CAROUSEL_DATA.map((item) => (
            <CarouselItem
              key={item.type}
              className="pl-[3rem] md:basis-1/2 lg:basis-1/3"
            >
              <NewsCard
                image={item.image}
                title={``}
                subTitle={``}
                content={``}
                time={``}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </>
  );
};

export default NewsCarouselContent;

const CAROUSEL_DATA = [
  {
    image: "/images/viettel.jpg",
    title: "TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI VIETTEL",
    subTitle: "",
    content: "",
    type: "",
    time: "",
  },
  {
    image: "/images/HN-busstop.jpg",
    title: "CÔNG TY CỔ PHẦN BÊN XE HÀ NỘI",
    subTitle: "",
    content: "",
    type: "",
    time: "",
  },
  {
    image: "/images/cmc.jpg",
    title: "CÔNG TY TNHH CMC GLOBAL",
    subTitle: "",
    content: "",
    type: "",
    time: "",
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
