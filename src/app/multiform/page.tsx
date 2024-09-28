"use client";

import Image from "next/image";
import Vector from "../../../public/assets/Vector.png";
import Header from "../components/Header";
import { IconLeft, IconRefresh } from "../../../public/assets/icon";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import InputForm from "../components/InputForm";
import { gsap } from "gsap";

const MultiForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [step, setStep] = useState(1);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleBack = () => {
    if (step === 1) {
      router.back();
    } else if (step === 2) {
      setStep(1);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
  };

  const handleNameSubmit = (value: string) => {
    if (value) {
      setName(value);
      setStep(2);
    }
  };

  const handleEmailSubmit = () => {
    if (email && !emailError) {
      localStorage.setItem("userName", name);
      router.push("/result");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      gsap.fromTo(
        inputRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [step]);

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

        <div className="relative flex-grow flex flex-col justify-center items-center my-20">
          <div className="flex justify-center items-center mt-10 mb-10 relative">
            <Image
              src={Vector}
              alt="Decorative background vector"
              className="relative w-[29px] h-[30.79px]"
            />
          </div>
          <div className="text-center mb-8 phone:mb-10">
            {step === 1 ? (
              <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-4">
                Let’s start with the basics. Type in your first name.
              </h2>
            ) : (
              <h2 className="text-[6vw] tablet:text-lg laptop:text-xl px-2 sm:px-0 text-balance font-bagoss mb-4">
                Great! Now, please enter your email.
              </h2>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full text-center mb-8 phone:mb-10 flex justify-center">
          <div
            className="flex flex-col items-center w-3/4 max-w-md"
            ref={inputRef}
          >
            {step === 1 && (
              <InputForm placeholder="First name" onSubmit={handleNameSubmit} />
            )}
            {step === 2 && (
              <>
                <InputForm
                  placeholder="Email"
                  onSubmit={handleEmailSubmit}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
