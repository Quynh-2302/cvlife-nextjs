"use client";
import React from "react";
import NewsCarousel from "./components/NewsCarousel";
import ProjectSection from "../Projects";

const NewsSection = () => {
  return (
    <div className="flex flex-col py-[2.75rem] lg:py-[3.2rem] bg-[#F8F8F8]">
      <NewsCarousel />
      <ProjectSection />
    </div>
  );
};

export default NewsSection;
