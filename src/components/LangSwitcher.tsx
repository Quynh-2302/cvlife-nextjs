import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import gbFlag from "../assets/img/bg_flag.png";
import nlFlag from "../assets/img/vn_flag.png";

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }

  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const options: Option[] = [
    { country: "English", code: "en", flag: gbFlag },
    { country: "Vietnamese", code: "vn", flag: nlFlag },
  ];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };

  return (
    <div className="-mb-2 relative text-lg z-100">
      <button
        className="justify-between w-full gap-2 text-white font-medium rounded-lg text-sm text-center inline-flex items-center"
        onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
        onBlur={() => setIsOptionsExpanded(false)}
      >
        {pathname === "/vn" ? (
          <Image src={nlFlag} width={"20"} height={"20"} alt="logo" />
        ) : (
          <Image src={gbFlag} width={"20"} height={"20"} alt="logo" />
        )}

        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${
            isOptionsExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-transform duration-500 ease-custom ${
          !isOptionsExpanded
            ? "-translate-y-1/2 scale-y-0 opacity-0"
            : "translate-y-0 scale-y-100 opacity-100"
        }`}
      >
        <ul className="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 flex items-center cursor-pointer"
              onMouseDown={(e) => {
                e.preventDefault();
                setOption(option);
              }}
              onClick={() => setIsOptionsExpanded(false)}
            >
              <Image src={option.flag} width={"20"} height={"20"} alt="logo" />
              &nbsp;&nbsp;{option.country}
              {pathname === `/${option.code}` && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7 text-green-500 ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
