import MainCarousel from "@/components/MainCarousel";

import { getTranslations } from "next-intl/server";
import ExperienceSection from "@/components/Experience/Experience";
import NewsSection from "@/components/News";
import IntroduceSection from "@/components/Introduce";
import FundMutualSection from "@/components/Partner";

import Footer from "@/components/layouts/MainLayout/Footer";

import Header from "@/components/layouts/MainLayout/Header";
import FooterService from "@/components/layouts/MainLayout/FooterService";

export default async function Home() {
  const t = await getTranslations("Home");
  const navigationKeys = Object.keys(t.raw("navigation"));

  const test = navigationKeys.map((key) => t(`navigation.${key}`));

  return (
    <>
      <Header name={test} />
      <main className="min-h-screen">
        <section className="min-h-screen ">
          <>
            <MainCarousel
              title={t("title")}
              desc={t("description")}
              contact={t(`navigation.contact`)}
              explore={t("explore")}
            />
            <ExperienceSection />
            <NewsSection />
            <IntroduceSection />
            <FundMutualSection />
          </>
        </section>
      </main>

      <FooterService />
      <Footer />
    </>
  );
}
