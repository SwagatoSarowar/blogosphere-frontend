import arrow from "../../../assets/arrow.png";
import bannerImage from "../../../assets/banner.webp";
import { Container } from "../Container/Container";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="bg-cover bg-center"
    >
      <div className="bg-boxdark/50 min-h-screen pt-20 md:pt-[150px]">
        <Container>
          <div>
            <div className="text-white text-center">
              <h1 className="text-6xl md:text-8xl text-secondary font-indie-flower mt-16">
                BlogoSphere
              </h1>
              <h2 className="text-2xl md:text-3xl my-8">
                Your world of ideas,{" "}
                <span className="text-meta-6 text-3xl md:text-4xl font-semibold font-mono uppercase">
                  Unbound
                </span>
              </h2>
              <div className="max-w-[700px] mx-auto">
                <p className="text-xl md:text-2xl mb-4">
                  Welcome to{" "}
                  <span className="text-secondary font-semibold">
                    Blogosphere
                  </span>
                  : Dive into a vibrant space where creativity knows no bounds
                  and every idea has a voice.
                </p>
                <p className="text-lg md:text-lg">
                  This is your digital canvas for sharing insights, stories, and
                  creative expressions, where every voice matters and ideas
                  thrive.
                </p>
              </div>
            </div>
            <p className="text-center mt-10 text-white">
              Check Out Latest Blogs
            </p>
            <img className="w-[100px] block mx-auto" src={arrow} alt="Arrow" />
          </div>
        </Container>
      </div>
    </div>
  );
}
