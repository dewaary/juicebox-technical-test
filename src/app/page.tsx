"use client";

import "./globals.css";
import Header from "./components/Header";
import { IconRefresh } from "../../public/assets/icon";
import Button from "./components/Button";
import Lottie from "lottie-react";
import animationData from "../../public/assets/JB2G_Lottie.json";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Vector from "../../public/assets/Vector4.png";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const lottieRef = useRef<any>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleContinue = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        router.push("/tutorial");
      }
    });
  };

  const handleRefresh = () => {
    setLoading(true);
    window.location.reload();
  };

  useEffect(() => {
    gsap.fromTo(lottieRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

    const animationImage = gsap.to(".rotating-image", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });

    return () => {
      animationImage.kill();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      textRefs.current.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, [loading]);

  return (
    <div className="flex justify-center items-center bg-darkBg h-screen relative">
      {loading && (
        <>
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop
              autoplay
              style={{ width: '200px', height: '200px' }}
            />
          </div>
          <div className="fixed inset-0 bg-black opacity-100 z-40" />
        </>
      )}
  
      <div ref={contentRef} className={`absolute w-full h-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute w-full h-full bg-gradient-to-b from-zinc-900 via-gray-800 to-darkBg backdrop-blur-lg opacity-8 flex flex-col justify-between">
          <div className="p-4 phone:p-6 flex-grow relative max-w-screen-xl mx-auto">
            <div className="my-5">
              <Header
                title="juicebox"
                rightIcon={<IconRefresh />}
                onRightIconClick={handleRefresh}
              />
            </div>
  
            <div className="relative mt-40 tablet:mt-24 flex justify-center items-center w-full">
              <div className="relative w-full max-w-md flex justify-center">
                <Image
                  src={Vector}
                  alt="Decorative background vector"
                  className="w-[90%] sm:w-[70%] lg:w-[50%] rotating-image"
                />
  
                <p ref={(el) => (textRefs.current[0] = el)} className="absolute top-[15%] left-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
                  WA businesses feel confident about future growth
                </p>
                <p ref={(el) => (textRefs.current[1] = el)} className="absolute bottom-[65%] right-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
                  AI can't replace creativity
                </p>
                <p ref={(el) => (textRefs.current[2] = el)} className="absolute bottom-[50%] left-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
                  Sales measure true success
                </p>
                <p ref={(el) => (textRefs.current[3] = el)} className="absolute bottom-[28%] right-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
                  Human connection drives WA business
                </p>
                <p ref={(el) => (textRefs.current[4] = el)} className="absolute bottom-[2%] left-[0.05%] phone:w-[60%] tablet:w-[50%] break-words font-sohne phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
                  <span>The primary barrier to digital</span>
                  <br />
                  <span>transformation is financial</span>
                </p>
              </div>
            </div>
  
            <div className="absolute bottom-0 left-0 right-0 text-center mb-8 phone:mb-10">
              <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-10">
                Compare your thoughts on{" "}
                <span className="text-blue-300">technology</span> with current
                industry opinions.
              </h2>
              <Button
                variant="solid"
                onClick={handleContinue}
                backgroundColor="#CDAAFF"
              >
                Get a reality check
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
