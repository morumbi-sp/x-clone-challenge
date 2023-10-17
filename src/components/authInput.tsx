'use client';

import { createAccountForm } from '@/app/entry/testcreate/page';
import { SignInForm } from '@/app/entry/testsignin/page';
import { InputHTMLAttributes, useState } from 'react';
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  register: UseFormRegister<T>;
  title: Path<T>;
  watch: UseFormWatch<T>;
}
export default function AuthInput<T extends FieldValues>({
  placeholder,
  className,
  register,
  title,
  type,
  watch,
}: Props<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const inputValue = watch(title);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={`w-full relative group ${className}`}>
      <input
        {...register(title, {
          required: true,
        })}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='dark:bg-black border border-gray-300 w-full h-[56px] rounded-md peer pt-4 pl-[10px] focus:border-point focus:border-2 focus:outline-none ring-0 invalid:border-red-500'
      />
      <label
        htmlFor='inputWindow'
        className={`transform transition-all absolute top-4 left-[10px]  pointer-events-none text-darkText group-focus-within:top-[6px] group-focus-within:text-[13px]  group-focus-within:text-point
        ${
          inputValue
            ? `peer-valid:top-[6px] peer-valid:text-[13px]  peer-valid:text-point peer-invalid:top-[6px] peer-invalid:text-[13px] ${
                !isFocused && 'peer-invalid:text-red-500'
              }`
            : ''
        }
        `}
      >
        {placeholder}
      </label>
    </div>
  );
}
