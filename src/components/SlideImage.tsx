import Image from "next/image";
import React from "react";

interface Props {
  image: string[];
  title: string;
  subTitle: string;
  content: string;
}

const SlideImage: React.FC<Props> = ({ image, title, subTitle, content }) => {
  return (
    <div className="relative grid grid-cols-2 h-screen" id="fund-mutual">
      {image.map((imgSrc, index) => (
        <div
          key={index}
          className="relative w-full h-full aspect-w-16 aspect-h-9"
        >
          <Image
            src={imgSrc}
            alt="fund-mutual"
            fill
            objectFit="cover"
            className="absolute inset-0"
            unoptimized
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 image-container">
        <div className="md:max-w-[70%] lg:max-w-[50%] z-[1] mt-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            {title}
            <br />
            {subTitle}
          </h1>
          <p className="mb-4 text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {content}
          </p>
          <div className="btn-box flex space-x-4 justify-center">
            <a
              href="#"
              className="btn1 bg-[#c89551] text-white px-4 py-2 rounded"
            >
              Liên hệ
            </a>
            <a
              href="#"
              className="btn2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Tìm hiểu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
