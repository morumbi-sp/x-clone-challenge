'use client';

import { createAccountForm } from '@/app/entry/testauth/page';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  register: UseFormRegister<createAccountForm>;
  title: keyof createAccountForm;
}
export default function AuthInput({
  placeholder,
  className,
  register,
  title,
  type,
}: Props) {
  return (
    <div className={`w-full relative group ${className}`}>
      <input
        {...register(title, { required: true })}
        type={type}
        required
        className='dark:bg-black border border-gray-300 w-full h-[56px] rounded-md peer pt-4 pl-[10px] focus:border-point focus:border-2 focus:outline-none ring-0'
      />
      <label
        htmlFor='inputWindow'
        className='transform transition-all absolute top-4 left-[10px] group-focus-within:top-[6px] group-focus-within:text-[13px]  group-focus-within:text-point peer-valid:top-[6px] peer-valid:text-[13px]  peer-valid:text-point pointer-events-none text-darkText 
        '
      >
        {placeholder}
      </label>
    </div>
  );
}
