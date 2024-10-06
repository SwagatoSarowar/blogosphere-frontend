import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center flex flex-col gap-y-8">
        <h1 className="text-5xl font-semibold">404 - Not Found</h1>
        <h2 className="text-2xl">Requested Page Doesn't Exist</h2>
        <Button onClick={() => navigate("/")} className="mx-auto">
          Home
        </Button>
      </div>
    </div>
  );
}
