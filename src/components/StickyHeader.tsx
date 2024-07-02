"use client";
import { AlignJustify, Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", key: "home", label: "Trang Chủ" },
  { href: "/", key: "how_hilink_work", label: "Giới thiệu" },
  { href: "/", key: "services", label: "Dịch Vụ" },
  { href: "/", key: "pricing", label: "Dự án" },
  { href: "/", key: "pricing", label: "Tin tức" },
  { href: "/", key: "contact_us", label: "Liên hệ" },
];

const StickyHeader = () => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-between items-center padding-container sticky top-0 z-30 py-2 bg-white shadow-menu">
      <div className="col-span-2 md:col-span-1 w-[70%]">
        <Link href="http://localhost:3000/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={164}
            height={45}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="col-span-2 md:col-span-3 justify-self-end">
        <nav className="hidden lg:flex float-right border-0 shadow-none p-2 ml-10 -skew-x-[38deg] mb-0 -mr-28">
          <ul className="hidden lg:flex h-10">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-black flex items-center cursor-pointer pl-4 mx-3 transition-all hover:text-[#c89551] skew-x-[38deg] leading-10 text-[15px] font-medium"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <div className="flex flex-1 skew-x-[38deg] items-center pl-4 mx-0 lg:mx-3">
              <Search size={20} className="text-black" />
            </div>
            <div className="flex flex-1 skew-x-[38deg] items-center pl-4 mx-3 w-14"></div>
          </ul>
        </nav>
        {/* <Button
          rounded="default"
          size="icon"
          variant={"filled"}
          className="inline-block cursor-pointer bg-inherit lg:hidden"
        >
          <AlignJustify size="2rem" className="text-black" />
        </Button> */}
      </div>
    </div>
  );
};

export default StickyHeader;
