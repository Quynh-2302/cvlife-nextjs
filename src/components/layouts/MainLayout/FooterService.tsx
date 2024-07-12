"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Icons } from "@/assets/icons";
import { Mail, MapPin, Phone } from "lucide-react";

const FooterService = () => {
  return (
    <div className="bg-primary">
      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 justify-between border-b border-[#868686] pb-[1.875rem] pt-[3.75rem] mx-auto">
        <div className="max-w-none mt-9 flex flex-col gap-6 font-medium lg:mt-0">
          <div className="space-y-4">
            <Link href="https://cvlife.vercel.app">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={264}
                height={51}
              />
            </Link>
            <div className="text-sm text-[#7c7c7c] font-medium">
              Công ty TNHH Thương Mại CV LIFE là công ty con của Tập đoàn
              DACKEON Hàn Quốc được thành lập ngày 23/10/2020. Bằng công nghệ kỹ
              thuật tiên tiến từ Hàn Quốc phát triển hạ tầng bán lẻ tự động
              thông minh tại Việt Nam thông qua mạng lưới máy bán hàng tự động
              hiện đại hàng đầu hiện nay được nhập khẩu từ các nước tiên tiến
              trên thế giới.
            </div>
            <div className="mt-5 flex items-center gap-[1.625rem] lg:mt-0">
              {/* {SOCIAL_DATA.map(({ name, icon, href }) => (
                <Link href={href} key={name}>
                  {icon}
                </Link>
              ))} */}
            </div>
          </div>
        </div>

        <div className="max-w-none mt-9 flex flex-col gap-6 font-medium lg:mt-0">
          <div className="space-y-4">
            <div className="text-lg text-[#c89551] font-medium uppercase">
              Địa chỉ
            </div>
            <div className="text-sm text-[#7F7F7F] font-medium">
              <ul className="flex flex-col gap-3 text-left md:order-1">
                {NAV_LINKS.map((link, index) => (
                  <li
                    key={index}
                    className="relative flex flex-row gap-3 items-center col-span-12 md:col-span-6 py-3 border-b-1 border-[#7F7F7F] border-solid last:border-0"
                  >
                    {link.icon}
                    <div className="text-sm font-medium text-[#7F7F7F]">
                      {link.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-none mt-9 flex flex-col gap-6 font-medium lg:mt-0">
          <div className="space-y-4">
            <div className="text-lg text-[#c89551] font-medium uppercase">
              Liên Hệ
            </div>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full border-gray-300 sm:text-sm p-2"
                placeholder="Nhập tên của bạn"
              />

              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full border-gray-300 sm:text-sm p-2"
                placeholder="Nhập email của bạn"
              />
              <textarea
                name="description"
                id="description"
                className="mt-1 block w-full border-gray-300 sm:text-sm p-2"
                placeholder="Nhập nội dung"
              />
              <button
                type="submit"
                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#c89551] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterService;

const SOCIAL_DATA = [
  {
    name: "XSocial",
    icon: <Icons.xSocial className="hover:opacity-70" size={28} />,
    href: "https://twitter.com/vaporfund",
  },
  {
    name: "Discord",
    icon: <Icons.discord className="hover:opacity-70" size={28} />,
    href: "https://discord.com/invite/qWXfwMz4pP",
  },
  {
    name: "Telegram",
    icon: <Icons.telegram className="hover:opacity-70" size={28} />,
    href: "https://t.me/vaporfund_co",
  },
  {
    name: "Medium",
    icon: <Icons.medium className="hover:opacity-70" size={28} />,
    href: "https://medium.com/@VaporFund",
  },
  {
    name: "Linkedin",
    icon: <Icons.linkedin className="hover:opacity-70" size={28} />,
    href: "https://www.linkedin.com/company/vaporfund/?originalSubdomain=th",
  },
];

const NAV_LINKS = [
  {
    key: "home",
    label: "Số 18, Dãy 16B6 Làng Việt Kiều Châu Âu, Hà Nội, Việt Nam",
    icon: <MapPin className="hover:opacity-70" size={20} />,
  },
  {
    key: "how_hilink_work",
    label: "(+84) 4730 888 84",
    icon: <Phone className="hover:opacity-70" size={20} />,
  },
  {
    key: "services",
    label: "cvlifevietnam@gmail.com",
    icon: <Mail className="hover:opacity-70" size={20} />,
  },
];
