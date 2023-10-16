'use client';
interface Props {
  placeholder: string;
  className?: string;
}
export default function AuthInput({ placeholder, className }: Props) {
  return (
    <div className={`w-full relative group ${className}`}>
      <input
        type='text'
        id='inputWindow'
        className='border border-gray-300 w-full h-[56px] rounded-md peer pt-4 pl-[10px] focus:border-point focus:border-2 focus:outline-none ring-0'
      />
      <label
        htmlFor='inputWindow'
        className='transform transition-all absolute top-4 left-[10px] peer-focus:top-[6px] peer-focus:text-[13px] text-darkText peer-focus:text-point pointer-events-none'
      >
        {placeholder}
      </label>
    </div>
  );
}
