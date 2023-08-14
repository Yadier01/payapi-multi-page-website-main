interface Props {
  className?: string;
}
export const ScheduleDemoBtn = ({ className }: Props) => {
  return (
    <button
      className={`px-5  bg-[#ba4270] rounded-full text-white ${className}`}
    >
      Schedule a Demo
    </button>
  );
};
