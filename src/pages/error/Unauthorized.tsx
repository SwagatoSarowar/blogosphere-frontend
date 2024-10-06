import { useMetaTitle } from "../../hooks/useMetaTitle";

export default function Unauthorized() {
  useMetaTitle("Unauthorized");

  return (
    <div className="h-screen flex items-center justify-center text-primary dark:bg-boxdark-2 dark:text-bodydark">
      <div className="text-center flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold">
          You do not have permission to access the admin panel.
        </h1>
        <h2 className="text-2xl">
          You can check out our website{" "}
          <a
            className="text-accent underline underline-offset-2"
            href="https://www.bari-vara.com"
          >
            here
          </a>
        </h2>
        <p className="text-xl">
          Please contact your administrator for more information.
        </p>
      </div>
    </div>
  );
}
