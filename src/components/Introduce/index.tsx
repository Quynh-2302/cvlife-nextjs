"use client";
import React from "react";

const IntroduceSection = () => {
  return (
    <div className="grid grid-cols-12 gap-0 h-96 bg-[url('/images/service-6.jpg')]">
      <div className="col-span-4 hidden lg:inline-block"></div>

      <div className="relative col-span-12 lg:col-span-8 grid-row-2 py-12 pl-9 before:bg-[#bc6d2a] before:bg-opacity-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:z-0">
        <div className="relative flex flex-col gap-5 mb-8">
          <h4 className="text-left text-2xl font-bold leading-normal uppercase text-white">
            Giới thiệu về chúng tôi
          </h4>
          <div className="text-base leading-7 font-normal text-white max-w-[85%]">
            Công ty TNHH Thương Mại CV LIFE là công ty con của Tập đoàn DACKEON
            Hàn Quốc được thành lập ngày 23/10/2020 theo mà số doanh nghiệp
            0109389105 của Sở Kế hoạch Đầu tư Thành phố Hà Nội có trụ sở chính
            tại Nhà số LK6B 26 (38) - Khu đô thị Mỗ Lao - Phường Mộ Lao - Quân
            Hà Đông - TP. Hà Nội. Định vị lĩnh vực kinh doanh giống như tên
            thương hiệu CV LIFE là mang đến cuộc sống tiện lợi cho con người
            Việt Nam. Bằng công nghệ kỹ thuật tiên tiến từ Hàn Quốc phát triển
            hạ tầng bán lẻ tự động thông minh tại Việt Nam thông qua mạng lưới
            máy bán hàng tự động hiện đại hàng đầu hiện nay được nhập khẩu từ
            các nước tiên tiến trên thế giới.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
