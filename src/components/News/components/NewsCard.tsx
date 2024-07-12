import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";
import { Clock9 } from "lucide-react";

interface Props {
  image: string;
  title: string;
  subTitle: string;
  content: string;
  time: string;
}
const NewsCard: React.FC<Props> = ({
  image,
  title,
  subTitle,
  content,
  time,
}) => {
  return (
    <div>
      <div className="relative aspect-[28.8125/20] w-full">
        <Image src={image} alt="section-holder" fill unoptimized />
      </div>

      <div className="flex flex-col xl:p-4 p-2 gap-4">
        <p className="text-lg font-bold flex text-center justify-center">
          {title}
        </p>

        {/* <div className="pb-4 text-base leading-normal text-[#666]">
            <p>{subTitle}</p>
            <p>{content}</p>
          </div> */}

        {/* <div className="flex flex-row gap-2 items-center justify-start">
            <Clock9 className="text-[#d7953e]" size={14} />
            <p className="text-[#c1c1c1] text-sm">{time}</p>
          </div> */}
      </div>
    </div>
  );
};

export default NewsCard;
