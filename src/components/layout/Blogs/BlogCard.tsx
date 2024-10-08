import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../ui/Loader/Loader";

interface BlogCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function BlogCard({ data }: BlogCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="dark:bg-boxdark bg-white rounded-lg overflow-hidden shadow-card hover:shadow-[3px_5px_15px_0px_rgba(0,0,0,0.3)] hover:dark:shadow-[5px_5px_20px_0px_rgba(0,0,0,0.6)] duration-200">
      <Link to={`/${data._id}`}>
        <div className="relative aspect-video object-cover">
          {isLoading && (
            <div className="h-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          <img
            className="w-full aspect-video object-cover"
            src={data?.blogImage || "https://picsum.photos/1600/900"}
            alt="blogImage"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
          <span className="absolute top-2 left-2 text-sm text-white bg-black/50 backdrop-blur-lg px-4 py-1 rounded-full">
            {data?.category?.name}
          </span>
        </div>
        <div className="p-4">
          <div>
            <p className="text-sm">
              {moment(data?.createdAt).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="text-crop mt-2">
            <h1 className="text-lg lg:text-2xl font-semibold">{data?.title}</h1>
            <p className="text-base mt-3">{data?.details}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
