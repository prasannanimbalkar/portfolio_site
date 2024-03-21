/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { ScrollProgress } from "../components/ScrollProgress";
// import RadialGradient from "../components/RadialGradient";
import { Link } from 'react-router-dom';

import { projectsData } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
import { Autoplay, EffectCards, Pagination } from "swiper/modules";

const Projects: React.FC = () => {
  const { language } = useLanguage();

  const { theme } = useTheme();

  return (
    <>
      <Layout projectPage={true}>
      <ThemeSwitch />
        <header style={{zIndex: "4"}}>
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <LazyRadialGradient scale="scale-y-125" opacity="opacity-30" position="fixed" />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            className="w-[60vw] max-lg:hidden min-[1921px]:px-96"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            spaceBetween={30}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4">
                {projectsData.map((project, index) => (
                  <article
                  key={index}
                  className={`rounded-3xl shadow hover:shadow-xl transition duration-300 p-6 flex ${
                    theme === 'dark' ? 'bg-blackblue' : 'bg-white'
                  }`}
                >
                    <div className="overflow-auto rounded-md mb-4 w-1/2 max-h-400">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-[50vh] w-full object-cover object-top rounded-3xl"              />
                    </div>
                    <div className="w-1/2 px-5 flex flex-col">
                      <div className="flex-grow">
                        <h2 className="font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4 py-2">
                          {language === "DE" ? project.description : project.description_EN}
                        </p>
                        <Link to={`/projects/${project.title.replace(/\s+/g, '-')}`} className="inline-block text-blue-500 hover:text-orange transition duration-100">
                          Read more
                        </Link>
                      </div>
                      <div className="mt-4">
                        <p className="text-xl font-semibold mb-2">
                          {language === "DE" ? "Technologien" : "Technologies"}
                        </p>
                        <div className="flex gap-2">
                          {project.technologies.map((technology, innerIndex) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="w-16 h-8 object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                  </article>
                ))}
              </div>
            </Suspense>
          </Swiper>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Projects;
