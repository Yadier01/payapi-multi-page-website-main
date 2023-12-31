import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="bg-zinc-900 p-8">
      <div className="flex flex-col md:flex-row  items-center justify-center md:justify-between  gap-8">
        <img src="/shared/desktop/logo-white.svg" alt="" />
        <ul className="flex flex-col gap-4 md:flex-row text-gray-300 items-center justify-center font-bold">
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <ul className="flex gap-7 items-center ">
          <li>
            <img src="/shared/desktop/facebook.svg" alt="" />
          </li>
          <li>
            <img src="/shared/desktop/twitter.svg" alt="" />
          </li>
          <li>
            <img src="/shared/desktop/linkedin.svg" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
