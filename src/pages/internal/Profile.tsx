import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useGet } from "../../api/api-calls";
import placeholder from "../../assets/placeholder.jpg";
import BlogsGrid from "../../components/layout/Blogs/BlogsGrid";
import { Container } from "../../components/layout/Container/Container";
import { Button } from "../../components/ui/Button/Button";
import { Loader } from "../../components/ui/Loader/Loader";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, isPending } = useGet(`blogs?author=${user?._id}`);

  return (
    <div>
      <img
        className="h-[200px] md:h-[350px] w-full object-cover"
        src="https://picsum.photos/1600/500"
        alt=""
      />
      <Container>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 md:-mb-10">
            <div className="rounded-full p-3 bg-secondary/20 backdrop-blur-md w-fit -translate-y-1/3">
              <img
                className="w-[100px] md:w-[200px] aspect-square object-cover rounded-full"
                src={user?.profileImage || placeholder}
                alt="user"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl mt-4 mb-2">Swagoto</h2>
              <p className="opacity-75">{data?.data?.blogs?.length} Blogs</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/edit-profile">
              <Button>Edit Profile</Button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => navigate("/create-blog")}
          className="bg-white shadow-[2px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_6px_10px_0px_rgba(0,0,0,0.15)] dark:bg-boxdark p-4 md:p-6 rounded-2xl text-xl md:text-xl flex items-center gap-3 justify-center cursor-pointer"
        >
          <FaPlus /> Whats on your mind?
        </div>
      </Container>
      <div className="mt-8">
        {isPending ? (
          <div className="flex items-center justify-center h-[500px]">
            <Loader size="lg" />
          </div>
        ) : (
          <BlogsGrid blogs={data?.data?.blogs} />
        )}
      </div>
    </div>
  );
}
