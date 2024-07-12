import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const Article: React.FC<ArticleProps> = ({ href, imgSrc, imgAlt, title }) => {
  return (
    <>
      <article className="relative p-2 w-full sm:w-1/2 md:w-1/4">
        <div className="relative overflow-hidden">
          <div className="relative aspect-[1/1] w-full ">
            <Image
              className="w-full h-auto object-cover"
              src={imgSrc}
              alt={imgAlt}
              fill
              unoptimized
              priority
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-end p-5 bg-[#bc6d2a] bg-opacity-80 opacity-0 transition duration-500 hover:opacity-100 transform group">
            <a
              href={href}
              className="absolute top-5 right-5 p-2 text-sm font-medium text-white border border-white transform translate-y-16 transition duration-500 ease-in-out group-hover:translate-y-0"
            >
              <Link size={20} />
            </a>
            <div className="mb-12 text-left text-white transform translate-y-16 transition duration-500 ease-in-out group-hover:translate-y-0">
              <h4 className="uppercase opacity-0 text-white text-xl group-hover:opacity-80">
                <a href={href}>{title}</a>
              </h4>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
