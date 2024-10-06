import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../api/api-calls";
import logo from "../../assets/logo.png";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const navigate = useNavigate();
  const { mutate, fetchError, isError, isPending, isSuccess } =
    usePost("users/signup");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = function (data) {
    mutate(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error((fetchError?.response?.data as { message: string })?.message);
    }
  }, [fetchError, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Registration complete. Please login with your email and password."
      );
      navigate("/signin");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark my-4">
        {/* ================= Logo ================ */}
        <div className="w-[250px] mx-auto mt-8">
          <img src={logo} alt="Logo" />
        </div>
        {/* ================ Login form ============== */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-[380px] p-10">
          <div className="mb-5">
            <Input
              {...register("name", { required: "Name required." })}
              type="text"
              label="User Name"
              placeholder="Enter your name"
            />
            <p className="h-3 mt-1 text-danger">{errors.email?.message}</p>
          </div>

          <div className="mb-5">
            <Input
              {...register("email", { required: "Email required." })}
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <p className="h-3 mt-1 text-danger">{errors.email?.message}</p>
          </div>

          <div className="mb-5">
            <Input
              {...register("password", { required: "Password required." })}
              type="password"
              label="Password"
              placeholder="Enter a password"
            />
            <p className="h-3 mt-1 text-danger">{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <Input
              {...register("confirmPassword", {
                required: "Confirm password rquired.",
              })}
              type="password"
              label="Re-Type Password"
              placeholder="Confirm your password"
            />
            <p className="h-3 mt-1 text-danger">{errors.password?.message}</p>
          </div>

          <div className="mb-5">
            <Button className="w-full" type="submit" isLoading={isPending}>
              Sign Up
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p>
              Don&apos;t have any account?{" "}
              <Link to="/signin" className="text-secondary font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
