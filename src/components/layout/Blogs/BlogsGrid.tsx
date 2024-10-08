/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "../Container/Container";
import BlogCard from "./BlogCard";

// title, details, blogImage,

interface BlogsGridProps {
  blogs: any;
}

export default function BlogsGrid({ blogs }: BlogsGridProps) {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog: any, index: number) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </Container>
  );
}
