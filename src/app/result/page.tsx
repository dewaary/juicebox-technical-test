"use client";

import Image from "next/image";
import Vector from "../../../public/assets/Vector.png"; // Pastikan path ini benar
import Header from "../components/Header";
import { IconLeft, IconRefresh } from "../../../public/assets/icon"; // Pastikan Anda memiliki IconSubmit
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/JB2G_Lottie.json";

const Result: React.FC = () => {
  const router = useRouter();
  const lottieRef = useRef<any>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleRefresh = () => {
    setLoading(true);
    window.location.reload();
  };

  const handleContinue = () => {
    router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center bg-darkBg relative">
      {loading && (
        <>
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop
              autoplay
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="fixed inset-0 bg-black opacity-100 z-40" />
        </>
      )}
      <div className="absolute w-full h-full bg-gradient-to-b from-zinc-900 via-gray-800 to-darkBg backdrop-blur-lg opacity-8 z-10" />
      <div className="p-4 phone:p-6 h-screen text-white relative w-full max-w-screen-xl mx-auto z-20">
        <div className="my-5">
          <Header
            title="juicebox"
            leftIcon={<IconLeft />}
            rightIcon={<IconRefresh />}
            onLeftIconClick={handleBack}
            onRightIconClick={handleRefresh}
          />
        </div>

        <div className="relative flex-grow flex flex-col justify-center items-center my-20">
          <div className="flex justify-center items-center mt-10 mb-10 relative">
            <Image
              src={Vector}
              alt="Decorative background vector"
              className="relative w-[29px] h-[30.79px]"
            />
          </div>
          <div className="text-center mb-8 phone:mb-10">
            <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-4">
              Thanks, {name}! Now, it’s time to get a reality check.
              <span className="block mb-8" />
              This will take 2-3 minutes. 
            </h2>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center mb-8 phone:mb-10">
          <Button
            variant="solid"
            onClick={handleContinue}
            backgroundColor="white"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
