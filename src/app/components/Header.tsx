import { FC, ReactNode } from "react";

interface HeaderProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
}) => {
  return (
    <div className="absolute left-0 right-0 flex justify-between items-center px-4 z-50">
      {leftIcon ? (
        <div
          className="rounded-full p-2 bg-white/5 backdrop-blur-120 shadow-custom cursor-pointer"
          onClick={onLeftIconClick}
        >
          {leftIcon}
        </div>
      ) : (
        <div className="w-10 h-10" />
      )}

      <div className="text-headerText phone:text-[30px] tablet:text-[30px] text-center font-bold font-ppagrandir tracking-[0.05em]">
        {title}
      </div>

      {rightIcon ? (
        <div
          className="rounded-full p-2 bg-white/5 backdrop-blur-120 shadow-custom cursor-pointer"
          onClick={onRightIconClick}
        >
          {rightIcon}
        </div>
      ) : (
        <div className="w-10 h-10" />
      )}
    </div>
  );
};

export default Header;
