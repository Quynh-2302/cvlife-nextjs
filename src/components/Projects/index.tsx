import React from "react";
import Article from "../Article";

const articles = [
  {
    href: "",
    imgSrc: "/images/service-1.jpeg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-2.jpeg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-3.jpeg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-4.jpeg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-5.jpg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-6.jpg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-7.jpg",
    imgAlt: "",
    title: "",
  },
  {
    href: "",
    imgSrc: "/images/service-8.jpg",
    imgAlt: "",
    title: "",
  },
];

const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col container my-10 mx-auto">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl mb-6 font-semibold leading-normal text-[#181818] lg:text-3xl">
            {/* {t("ourMutualFundProducts")} */}
            Một số vị trí bán hàng tiêu biểu
          </h2>
        </div>
        <div className="flex flex-wrap">
          {articles.map((article, index) => (
            <Article
              key={index}
              href={article.href}
              imgSrc={article.imgSrc}
              imgAlt={article.imgAlt}
              title={article.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
