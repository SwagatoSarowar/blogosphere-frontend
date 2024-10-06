import { ColorType, SizeType } from "../../../types";
import { getColorClass } from "../../../utils/getColorClass";

interface LoaderProps {
  color?: ColorType;
  size?: SizeType;
  className?: string;
}

export const Loader = function ({
  size = "base",
  color = "primary",
  className,
}: LoaderProps) {
  const colorClass = getColorClass(color, "border");
  let sizeClass = "";

  switch (size) {
    case "sm":
      sizeClass = "w-6 border-2";
      break;
    case "base":
      sizeClass = "w-8 border-4";
      break;
    case "lg":
      sizeClass = "w-12 border-6";
      break;
  }

  return (
    <div
      className={`${colorClass} ${sizeClass} aspect-square animate-spin rounded-full border-solid border-t-transparent ${className}`}
    ></div>
  );
};
