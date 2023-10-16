'use client';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function BigButton({ children, className }: Props) {
  return (
    <button
      className={`flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </button>
  );
}
