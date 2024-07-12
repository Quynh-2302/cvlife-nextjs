"use client";
import React from "react";
import Image from "next/image";
import { HStack } from "@/components/ui/Utilities";
import { motion } from "framer-motion";
import { CheckCircle, CircleArrowRight } from "lucide-react";

const NAV_LINKS = [
  { key: "home", label: "Công nghệ mã QR" },
  {
    key: "how_hilink_work",
    label: "Nhận diện khuôn mặt",
  },
  { key: "pricing", label: "Thanh toán không cần tiền mặt" },
];

const ExperienceSection = () => {
  return (
    <HStack className="mt-14 py-10">
      <div className="container grid grid-cols-1 justify-between lg:grid-cols-2 gap-14 mx-auto">
        <div className="col-span-1 gap-10 sm:hidden lg:inline-block flex justify-center">
          <Image
            src="/images/experience.jpeg"
            alt="1-1"
            width={6497}
            height={4331}
            className="w-full relative"
            unoptimized
            priority
          />
        </div>
        <div className="col-span-1 grid-row-2">
          <div className="flex flex-col gap-5 mb-8">
            <motion.h4
              viewport={{ once: true }}
              variants={{
                visible: { y: 0 },
                hidden: { y: 20 },
              }}
              whileInView="visible"
              initial="hidden"
              transition={{ duration: 0.3 }}
              className="text-left text-2xl font-bold leading-normal"
            >
              Sản phẩm, dịch vụ
            </motion.h4>
            <div className="font-normal text-lg text-[#898989]">
              CV LIFE luôn mong muốn trở thành thương hiệu tiên phong dẫn đầu
              làm cầu nối hiệu quả nhất giữa các nhà sản xuất, các đơn vị phân
              phối sản phẩm và người tiêu dùng bằng việc mang lại những tiện ích
              tối ưu cho người tiêu dùng, hoàn thiện mất xích cuối cùng trong
              chuỗi hạ tầng bên là hiện đại tại Việt Nam
            </div>
          </div>

          <ul className="flex flex-col gap-3 text-left md:order-1">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="flex flex-row gap-3 items-center">
                <CheckCircle size={12} className="text-[#c89551]" />
                <div className="text-lg font-medium text-[#c89551]">
                  {link.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HStack>
  );
};

export default ExperienceSection;
