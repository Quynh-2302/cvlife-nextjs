import React from "react";
import { Icons } from "@/assets/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/breakpoint";
import { useFundCarousel } from "@/hooks/useFundCarousel";
import SlideImage from "./SlideImage";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

const MainCarousel = () => {
  const autoplay = Autoplay({ playOnInit: false, delay: 10000 });
  const t = useTranslations("Slider");
  const imagesKeys = Object.keys(t.raw("images"));

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
    <Carousel opts={{ loop: true }} plugins={[autoplay]}>
      <div className="relative">
        <CarouselContent ref={carouselRef}>
          {CAROUSEL_DATA.map((item, key) => (
            <CarouselItem key={key} className="w-full">
              <SlideImage
                image={item.image}
                title={t(`images.${key}.title`)}
                subTitle={item.subTitle}
                content={item.content}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          className={cn(
            "absolute left-4 top-1/2 z-50 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-white"
          )}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          type="button"
        >
          <Icons.chevronLeft size={42} />
        </button>

        <button
          className={cn(
            "absolute right-4 top-1/2 z-50 -translate-y-1/2 color-white opacity-0 transition duration-300 group-hover:opacity-100  text-white"
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
    </Carousel>
  );
};

export default MainCarousel;

const CAROUSEL_DATA = [
  {
    image: ["/images/slider-1.jpg", "/images/slider-2.jpg"],
    title: "Sứ mệnh CV LIFE",
    subTitle: "",
    content:
      "Sứ mệnh của CV LIFE là tạo ra những giá trị tiện ích cao nhất cho người dân Việt Nam trong tiêu dùng hiện đại và tối đa hóa tiện ích trên nền tảng công nghệ tự động hóa.",
  },
  {
    image: ["/images/slider-3.jpg", "/images/slider-4.jpg"],
    title: "Sứ mệnh CV LIFE",
    subTitle: "",
    content:
      "CV LIFE đặt mục tiêu trở thành cầu nối hiệu quả giữa nhà sản xuất, phân phối và người tiêu dùng, tối ưu hóa tiện ích và hoàn thiện chuỗi bán lẻ hiện đại tại Việt Nam.",
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
