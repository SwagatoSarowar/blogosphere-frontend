import { ReactNode } from "react";

export const Container = function ({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-6 2xl:px-10">
      {children}
    </div>
  );
};
