import { ColorType } from "../types";

export const getColorClass = function (
  color: ColorType,
  type?: "bg" | "text" | "border"
) {
  if (!type) type = "bg";
  let colorClass: string = "";

  switch (color) {
    case "white":
      colorClass = `${type}-white`;
      break;
    case "black":
      colorClass = `${type}-black`;
      break;
    case "primary":
      colorClass = `${type}-primary`;
      break;
    case "danger":
      colorClass = `${type}-danger`;
      break;
    case "warning":
      colorClass = `${type}-warning`;
      break;
    case "success":
      colorClass = `${type}-success`;
      break;
  }

  return colorClass;
};
