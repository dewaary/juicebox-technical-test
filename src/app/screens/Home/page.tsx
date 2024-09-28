"use client";

import Image from "next/image";
import Vector from "../../../../public/assets/Vector4.png";
import "./globals.css";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import { IconRefresh } from "../../../../public/assets/icon";
import Button from "@/app/components/Button";

const Home: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/step");
  };

  return (
    <div className="flex justify-center items-center bg-darkBg">
      <div className="absolute w-full h-full bg-gradient-to-b from-zinc-900 via-gray-800 to-darkBg backdrop-blur-lg opacity-8" />
      <div className="p-4 phone:p-6 h-screen text-white relative w-full max-w-screen-xl mx-auto">
        <div className="my-5">
          <Header title="juicebox" rightIcon={<IconRefresh />} onRightIconClick={handleContinue}/>
        </div>

        <div className="relative mt-40 tablet:mt-24 flex justify-center items-center w-full">
          <div className="relative w-full max-w-md flex justify-center">
            <div className="absolute w-[180px] h-[180px] bg-gradient-to-b from-purple-400 to-transparent rounded-full blur-lg opacity-75" />
            <Image
              src={Vector}
              alt="Decorative background vector"
              className="w-[90%] sm:w-[70%] lg:w-[50%]"
            />

            {/* Overlay Text */}
            <p className="absolute top-[15%] left-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
              WA businesses feel confident about future growth
            </p>
            <p className="absolute bottom-[65%] right-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
              AI can't replace creativity
            </p>
            <p className="absolute bottom-[50%] left-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
              Sales measure true success
            </p>
            <p className="absolute bottom-[28%] right-[0.05%] break-words font-sohne text-left phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
              Human connection drives WA business
            </p>
            <p className="absolute bottom-[2%] left-[0.05%] phone:w-[60%] tablet:w-[50%] break-words font-sohne phone:text-[3.5vw] tablet:text-sm laptop:text-base font-normal">
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
          <Button variant="solid" onClick={handleContinue}>
            Get a reality check
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
