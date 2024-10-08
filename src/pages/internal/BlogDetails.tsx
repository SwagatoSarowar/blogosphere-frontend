import { useParams } from "react-router-dom";
import { useGet } from "../../api/api-calls";
import { Container } from "../../components/layout/Container/Container";
import { Loader } from "../../components/ui/Loader/Loader";

export default function BlogDetails() {
  const { id } = useParams();

  const { data, isPending } = useGet(`blogs/${id}`);

  return (
    <div className="mt-[100px]">
      <Container>
        {isPending ? (
          <div className="flex items-center justify-center h-[500px]">
            <Loader size="lg" />
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-semibold mb-2">
              {data?.data?.blog?.title}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <p>
                by{" "}
                <span className="text-lg font-semibold">
                  {data?.data?.blog?.author?.name}
                </span>
              </p>
            </div>
            {data?.data?.blog?.blogImage ? (
              <img className="w-full aspect-video object-cover" src={data?.data?.blog?.blogImage} alt="blogimage" />
            ) : null}
            <div className="my-6">
              <p className="text-lg">{data?.data?.blog?.details}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
