"use client";
import Link from "next/link";

import { Icons } from "@/assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto flex flex-col justify-between py-6 lg:flex-row">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <p className="text-sm font-medium text-white">
            CvLife © Copyright 2024
          </p>
          <Link
            href={"https://docs.vaporfund.com/term-of-service"}
            target="_blank"
            className="text-sm font-medium text-[#7F7F7F] transition-all hover:opacity-70 active:brightness-110"
          >
            Term of Service
          </Link>
          <Link
            href={"https://docs.vaporfund.com/privacy-policy"}
            target="_blank"
            className="text-sm font-medium text-[#7F7F7F] transition-all hover:opacity-70 active:brightness-110"
          >
            {/* {t("privacyPolicy")} */} Privacy Policy
          </Link>
          {/* <Link href={'#'} className="text-sm font-medium text-[#7F7F7F] hover:opacity-70">
            {t('legalDisclosures')}
          </Link> */}
          {/* <Link href={'#'} className="text-sm font-medium text-[#7F7F7F] hover:opacity-70">
            {t('cookiePreference')}
          </Link> */}
        </div>
        {/* <div className="mt-5 flex items-center gap-[1.625rem] lg:mt-0">
          {SOCIAL_DATA.map(({ name, icon, href }) => (
            <Link href={href} key={name}>
              {icon}
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
