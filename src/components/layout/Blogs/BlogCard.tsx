import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../ui/Loader/Loader";

interface BlogCardProps {
  data: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
}

export default function BlogCard({ data }: BlogCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="dark:bg-boxdark bg-white rounded-lg overflow-hidden shadow-card">
      <Link to={`/${data.id}`}>
        <div className="relative aspect-video object-cover">
          {isLoading && (
            <div className="h-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          <img
            src="https://picsum.photos/1600/900"
            alt="blogImage"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />

          <span className="absolute top-2 left-2 text-sm text-white bg-black/50 backdrop-blur-lg px-4 py-1 rounded-full">
            Sports
          </span>
        </div>
        <div className="p-4">
          <div>
            <p className="text-sm">30 Jan 2024</p>
          </div>
          <div className="text-crop mt-2">
            <h1 className="text-lg lg:text-2xl font-semibold">{data.title}</h1>
            <p className="text-base mt-3">{data.body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
