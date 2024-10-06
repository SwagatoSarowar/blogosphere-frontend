import { forwardRef, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  Icon?: IconType;
  className?: string;
}

// Used forward ref inorder to make sure that the react-hook-form works.
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, Icon, className, ...props }, ref) => {
    return (
      <>
        {label && (
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}
          />
          {Icon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
              <Icon />
            </span>
          )}
        </div>
      </>
    );
  }
);
