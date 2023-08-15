interface Props {
  className?: string;
}
export const Innovators = ({ className }: Props) => {
  return (
    <span
      className={`grid  grid-cols-2 ${className} md:grid-cols-3 justify-items-center w-full gap-8 py-8 px-6 items-center justify-center`}
    >
      <img src="/shared/desktop/tesla-white.svg" alt="tesla" />
      <img src="/shared/desktop/microsoft-white.svg" alt="" />
      <img src="/shared/desktop/hewlett-packard-white.svg" alt="hp" />
      <img src="/shared/desktop/oracle-white.svg" alt="oracle" />
      <img src="/shared/desktop/google-white.svg" alt="google" />
      <img src="/shared/desktop/nvidia-white.svg" alt="nvidia" />
    </span>
  );
};
