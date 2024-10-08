import { ButtonHTMLAttributes, ReactNode } from "react";
import { ColorType } from "../../../types";
import { getColorClass } from "../../../utils/getColorClass";
import { Loader } from "../Loader/Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  color?: ColorType;
  className?: string;
}

export const Button = function ({
  children,
  color = "primary",
  isLoading = false,
  className,
  ...props
}: ButtonProps) {
  const styleClass = getColorClass(color);

  return (
    <button
      disabled={isLoading}
      {...props}
      className={`${styleClass} disabled:bg-opacity-50 disabled:cursor-not-allowed rounded-lg inline-flex items-center justify-center py-3 px-6 text-center font-medium text-white hover:bg-opacity-90 duration-200 ${className}`}
    >
      {isLoading ? <Loader size="sm" color={color} /> : children}
    </button>
  );
};
