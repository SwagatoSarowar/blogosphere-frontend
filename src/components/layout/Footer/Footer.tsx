import logo from "../../../assets/logo.png";
import { Container } from "../Container/Container";

export default function Footer() {
  return (
    <footer className="mt-6 pt-20 pb-10 bg-black-2">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <img className="w-[350px]" src={logo} alt="logo" />
          <p className="text-secondary text-2xl my-2">
            Your world of ideas, <span className="text-meta-6">Unbound</span>
          </p>
          <p className="mt-10 text-gray/50">© Swagato Sarowar - 2024</p>
        </div>
      </Container>
    </footer>
  );
}
