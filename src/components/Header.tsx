import { useState } from "react";
import { MobileModal } from "./MobileModal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      {/* mobile header */}
      <div className="flex sm:hidden justify-between p-4 items-center">
        <Link to={"/"}>
          <img src="/shared/desktop/logo.svg" alt="" />
        </Link>
        <img src="/shared/mobile/menu.svg" alt="" onClick={toggleModal} />
        <MobileModal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
      {/* desktop header & tablet */}
      <div className="hidden p-4 justify-between sm:flex items-center ">
        <Link to={"/"}>
          <img src="/shared/desktop/logo.svg" alt="" />
        </Link>
        <ul className="flex gap-4">
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <button className="px-5 py-2 bg-[#ba4270] rounded-full text-white ">
          Schedule a Demo
        </button>
      </div>
    </>
  );
};
