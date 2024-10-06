import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../api/api-calls";
import bannerLogo from "../../assets/logo.png";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";
import { useAuth } from "../../hooks/useAuth";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { mutate, data, fetchError, isError, isPending, isSuccess } =
    usePost("users/signin");

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
      const loggedUser = data?.data?.user;
      if (setUser) setUser(loggedUser);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      navigate("/");
    }
  }, [data?.data?.user, isSuccess, navigate, setUser]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* ================= Logo ================ */}
        <div className="w-[250px] mx-auto mt-8">
          <img src={bannerLogo} alt="Logo" />
        </div>
        {/* ================ Login form ============== */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-[380px] p-10">
          <div className="mb-5">
            <Input
              {...register("email", { required: "Email required." })}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <p className="h-3 mt-1 text-danger">{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <Input
              {...register("password", { required: "Password rquired." })}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <p className="h-3 mt-1 text-danger">{errors.password?.message}</p>
          </div>

          <div className="mb-5">
            <Button className="w-full" type="submit" isLoading={isPending}>
              Sign In
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p>
              Don&apos;t have any account?{" "}
              <Link to="/signup" className="text-secondary font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
