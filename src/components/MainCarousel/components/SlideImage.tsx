import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  image: string;
  title?: string;
  content?: {
    __html: string | TrustedHTML;
  };
  contact: string;
  explore: string;
}

const SlideImage: React.FC<Props> = ({
  id,
  image,
  title,
  content,
  contact,
  explore,
}) => {
  const commonContent = (
    <div className="md:max-w-[70%] lg:max-w-[50%] 2xl:max-w-[40%] z-[1] mt-20">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
      <p
        className="mb-4 text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        dangerouslySetInnerHTML={content}
      ></p>
      <div className="btn-box flex space-x-4 justify-center lg:justify-start">
        <a href="#" className="bg-[#c89551] text-white px-4 py-2 rounded">
          {contact}
        </a>
        <a href="#" className="bg-gray-500 text-white px-4 py-2 rounded">
          {explore}
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 h-screen">
      <div className="relative w-full h-full aspect-h-9">
        <Image
          src={image}
          alt="fund-mutual"
          fill
          objectFit="cover"
          className="absolute inset-0"
          unoptimized
          priority
        />
      </div>
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center lg:text-left text-white p-4`}
      >
        <div
          className={`container mx-auto flex ${
            id === 1
              ? "lg:justify-start slide-second"
              : "lg:justify-end 2xl:justify-center slide-first"
          }`}
        >
          {commonContent}
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
