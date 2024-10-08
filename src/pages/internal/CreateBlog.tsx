/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePost } from "../../api/api-calls";
import { Container } from "../../components/layout/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import { Input } from "../../components/ui/Input/Input";

type Inputs = {
  title: string;
  details: string;
};

export default function CreateBlog() {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState("");

  const { data } = useGet("categories");
  const { mutate, isPending, isSuccess, isError, fetchError } =
    usePost("blogs");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = function (data) {
    const formdata = new FormData();

    formdata.append("title", data.title);
    formdata.append("details", data.details);
    formdata.append("category", category);
    if (image) formdata.append("blogImage", image);

    mutate(formdata);
  };

  useEffect(() => {
    if (isError) {
      toast.error((fetchError?.response?.data as { message: string })?.message);
    }
  }, [fetchError, isError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog Created");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="mt-[100px]">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="font-semibold">Select Category*</label> <br />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white dark:bg-boxdark px-3 py-2 rounded-lg mt-4"
            >
              <option>Choose Category</option>
              {data?.data?.categories?.map((c: any, i: number) => (
                <option key={i} value={c?._id}>
                  {c?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5 max-w-[500px]">
            <Input
              type="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              label="Image"
            />
          </div>
          <div className="mb-5 max-w-[500px]">
            <Input
              {...register("title", { required: "Title required." })}
              label="Title*"
              placeholder="Blog Title"
            />
            <p className="h-3 mt-1 text-danger">{errors.title?.message}</p>
          </div>
          <div className="mb-5 max-w-[500px]">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Details*
            </label>
            <textarea
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              {...register("details", { required: "Details required." })}
              placeholder="Blog Details"
              rows={6}
            />
            <p className="h-3 mt-1 text-danger">{errors.title?.message}</p>
          </div>

          <div className="mb-5 flex items-center gap-4">
            <Button type="submit" isLoading={isPending}>
              Submit
            </Button>
            <Button color="danger" type="button">
              Cancel
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
