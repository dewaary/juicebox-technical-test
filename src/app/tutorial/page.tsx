"use client";

import Image from "next/image";
import Vector from "../../../public/assets/Vector4.png";
import Header from "../components/Header";
import { IconLeft, IconRefresh } from "../../../public/assets/icon";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Tutorial: React.FC = () => {
  const router = useRouter();
  const lottieRef = useRef<any>(null);
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleContinue = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleBack = () => {
    if (currentSlide === 0) {
      router.back();
    } else {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };


  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(lottieRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

    const animationImage = gsap.to(".rotating-image", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    return () => {
      animationImage.kill();
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-darkBg">
      <div className="absolute w-full h-full bg-gradient-to-b from-zinc-900 via-gray-800 to-darkBg backdrop-blur-lg opacity-8" />
      <div className="p-4 phone:p-6 h-screen text-white relative w-full max-w-screen-xl mx-auto">
        <div className="my-5">
          <Header
            title="juicebox"
            leftIcon={<IconLeft />}
            rightIcon={<IconRefresh />}
            onLeftIconClick={handleBack}
            onRightIconClick={handleRefresh}
          />
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="${
                className.includes("swiper-pagination-bullet-active")
                  ? ""
                  : "background-color: #B488F2;"
              }"></span>`;
            },
          }}
          modules={[Pagination]}
          className="mt-40"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div className="relative h-full flex flex-col justify-end">
              <div className="flex justify-center items-center mt-10 mb-10 relative">
                <Image
                  src={Vector}
                  alt="Decorative background vector"
                  className="relative w-[60%] max-w-[160px] sm:max-w-[120px] lg:max-w-[160px] rotating-image"
                />
              </div>
              <div className="text-center mb-8 phone:mb-10">
                <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-8 lg:mb-10">
                  Professionals around the world shared how they feel abo
                  <span className="text-gray-400">ut</span> <br />
                  <span className="text-gray-400">
                    technology and I’ve listened. Now it’s your turn.
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex flex-col justify-end">
              <div className="flex justify-center items-center mt-10 mb-10 relative">
                <Image
                  src={Vector}
                  alt="Decorative background vector"
                  className="relative w-[60%] max-w-[160px] sm:max-w-[120px] lg:max-w-[160px] rotating-image"
                />
              </div>
              <div className="text-center mb-8 phone:mb-10">
                <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-8 lg:mb-10">
                  I’ll ask you a handful of meaningful questions{" "}
                  <span className="text-gray-400">
                    and compare your responses with people in your industry.
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex flex-col justify-end">
              <div className="flex justify-center items-center mt-10 mb-10 relative">
                <Image
                  src={Vector}
                  alt="Decorative background vector"
                  className="relative w-[60%] max-w-[160px] sm:max-w-[120px] lg:max-w-[160px] rotating-image"
                />
              </div>
              <div className="text-center mb-8 phone:mb-10">
                <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-8 lg:mb-10">
                  You’ll get insights into current industry sentiments an
                  <span className="text-gray-400">d</span>{" "}
                  <span className="text-gray-400">
                    a reality check about technology in a few minutes. Deal?
                    Great!
                  </span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-0 left-0 right-0 text-center mb-8 phone:mb-10">
          <Button
            variant={currentSlide === 2 ? "solid" : "outline"}
            onClick={
              currentSlide === 2 ? () => router.push("/multiform") : handleContinue
            }
            backgroundColor="white"
          >
            {currentSlide === 2 ? "Get Started" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
