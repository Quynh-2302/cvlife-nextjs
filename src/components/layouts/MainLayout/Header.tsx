"use client";
import { Button } from "@/components/ui/button";
import { AlignJustify, Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "./StickyHeader";
import LangSwitcher from "@/components/LangSwitcher";

interface SocialData {
  name: string[];
}
const Header: React.FC<SocialData> = ({ name }) => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const handleScroll = () => {
    setShowStickyHeader(window.scrollY > 100);
  };
  const themeSwitcherRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showStickyHeader && <StickyHeader />}
      <div className="absolute top-0 left-0 w-full z-50 overflow-hidden">
        <div className="hidden container mx-auto lg:flex justify-end items-center max-container padding-container relative z-40 py-3 bg-black lg:bg-inherit gap-4">
          <div className="gap-[1.625rem] hidden h-full md:flex">
            {SOCIAL_DATA.map(({ name, icon }) => (
              <div key={name} className="flex flex-row gap-3 items-center">
                {icon}
                <p className="text-sm text-white">{name}</p>
              </div>
            ))}
          </div>
          <div ref={themeSwitcherRef}>
            <LangSwitcher />
          </div>
        </div>

        <div className="flex justify-between items-center max-container padding-container relative z-30 py-5 lg:py-0 bg-black lg:bg-inherit lg:container lg:mx-auto">
          <div className="container grid grid-cols-5 gap-4 justify-between items-center mx-auto">
            <div className="col-span-2 md:col-span-1 pr-12">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={204}
                  height={51}
                  className="w-[50%] lg:w-[100%]"
                />
              </Link>
            </div>

            <div className="col-span-3 md:col-span-4 justify-self-end relative">
              <nav
                className="relative hidden w-[calc(100%+15%)] lg:flex float-right shadow-none p-2 ml-10 bg-[rgba(19,16,14,0.8)] -skew-x-[38deg] mb-0"
                style={{ left: "15%" }}
              >
                <ul className="hidden w-full h-12 border-1 border-[#2d2621] border-solid lg:flex">
                  {name.map((key, index) => (
                    <li
                      key={key}
                      className="text-gray-50 flex items-center cursor-pointer pl-4 mx-1 2xl:mx-5 transition-all hover:text-[#c89551] skew-x-[38deg] leading-10 text-xs lg:text-sm font-medium 2xl:text-base"
                    >
                      <a href={`#/${key}`}>{key.toUpperCase()}</a>
                    </li>
                  ))}
                  <div className="flex flex-1 skew-x-[38deg] items-center pl-4 mx-3">
                    <Search size={20} className="text-gray-50" />
                  </div>
                </ul>
              </nav>
              <Button
                rounded="default"
                size="icon"
                variant="filled"
                className="cursor-pointer bg-inherit lg:hidden justify-end flex"
              >
                <AlignJustify size="2rem" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const SOCIAL_DATA = [
  {
    name: "(+84) 4730 888 84",
    icon: <Phone className="hover:opacity-70 text-white" size={14} />,
  },
  {
    name: "cvlifevietnam@gmail.com",
    icon: <Mail className="hover:opacity-70 text-white" size={14} />,
  },
];
