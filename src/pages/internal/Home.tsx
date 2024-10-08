import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGet } from "../../api/api-calls";
import BlogsGrid from "../../components/layout/Blogs/BlogsGrid";
import { Container } from "../../components/layout/Container/Container";
import Hero from "../../components/layout/Hero/Hero";
import { Loader } from "../../components/ui/Loader/Loader";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState({
    _id: "",
    name: "all",
  });
  const { data, isPending } = useGet(
    `blogs?${
      selectedCategory.name === "all" ? "" : `category=${selectedCategory._id}`
    }`
  );
  const { data: categoriesData } = useGet("categories");

  return (
    <div>
      <Hero />
      <Container>
        <Link to="/create-blog">
          <div className="bg-white shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_6px_10px_0px_rgba(0,0,0,0.15)] dark:bg-boxdark p-6 rounded-2xl text-xl flex items-center gap-3 justify-center cursor-pointer mt-6 w-fit">
            <FaPlus /> Whats on your mind?
          </div>
        </Link>
        <div className="flex items-center justify-between my-6">
          <div className="flex gap-2 md:gap-4 my-4 overflow-x-auto no-scrollbar">
            <button
              className={`capitalize px-4 py-1 rounded-md ${
                selectedCategory.name === "all" ? "bg-meta-5 text-white" : ""
              }`}
              onClick={() => setSelectedCategory({ _id: "", name: "all" })}
            >
              All
            </button>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {categoriesData?.data?.categories?.map((c: any, i: number) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(c)}
                className={`capitalize px-4 py-1 rounded-md text-nowrap ${
                  selectedCategory.name === c.name ? "bg-meta-5 text-white" : ""
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
      {isPending ? (
        <div className="flex items-center justify-center h-[500px]">
          <Loader size="lg" />
        </div>
      ) : data?.data?.blogs?.length < 1 ? (
        <div className="flex items-center justify-center h-[300px]">
          <h3 className="text-xl">No blogs found.</h3>
        </div>
      ) : (
        <BlogsGrid blogs={data?.data?.blogs} />
      )}
    </div>
  );
}
