"use client";
import { FC, ReactNode } from "react";

interface ButtonProps {
  variant: "solid" | "outline";
  onClick?: () => void;
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
}

const Button: FC<ButtonProps> = ({
    children,
    variant,
    onClick,
    backgroundColor,
    borderColor,
  }) => {
    const buttonStyle =
      variant === "solid"
        ? `text-darkBg`
        : `border ${borderColor || "border-gray-500"} text-white`;
  
    return (
      <button
        className={`
          ${buttonStyle} 
          rounded-[15px] 
          py-2 tablet:py-3  
          px-8 text-[5vw] 
          sm:text-[4.5vw] 
          md:text-[4vw] 
          lg:text-[3.5vw] 
          xl:text-lg 
          w-full 
          max-w-xs 
          md:max-w-sm 
          lg:max-w-md 
          font-sohne
        `}
        style={{ backgroundColor: variant === "solid" ? backgroundColor : 'transparent' }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  

export default Button;
