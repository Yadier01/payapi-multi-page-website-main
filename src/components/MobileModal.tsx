import Modal from "react-modal";
import { Link } from "react-router-dom";
interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}
export const MobileModal = ({ isOpen, toggleModal }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      className={"w-4/5 float-right text-gray-300 bg-[#1b262f] h-full"}
    >
      <div className="w-full flex justify-end p-4 pt-9">
        <img
          src="/public/shared/mobile/close.svg"
          alt=""
          className="flex justify-end"
          onClick={toggleModal}
        />
      </div>
      <div className="w-full flex flex-col gap-8 items-center justify-center">
        <ul className="flex flex-col gap-4">
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <button className="px-5 py-2 bg-[#ba4270] rounded-full text-white ">
          Schedule a Demo
        </button>
      </div>
    </Modal>
  );
};
