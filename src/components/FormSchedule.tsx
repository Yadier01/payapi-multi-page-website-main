import { ScheduleDemoBtn } from "./ScheduleDemoBtn";

interface Props {
  className?: string;
}
export const FormSchedule = ({ className }: Props) => {
  return (
    <form
      className={`${className} flex mt-5 gap-4 flex-col  lg:w-3/5 w-full md:flex-row md:items-center md:justify-center`}
    >
      <div
        className={`md:relative flex w-full flex-col  md:flex-row gap-4 md:gap-0 justify-center items-center ${className}`}
      >
        <input
          type="text"
          placeholder="Enter email address"
          className="p-4 shadow-2xl font-bold w-5/6 rounded-full "
        />
        <ScheduleDemoBtn className="md:absolute right-10 p-4 w-5/6 md:w-auto md:py-4 md:px-12" />
      </div>
    </form>
  );
};
