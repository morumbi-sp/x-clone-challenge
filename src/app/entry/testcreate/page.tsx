'use client';

import BigButton from '@/components/BigButton';
import AuthInput from '@/components/authInput';
import AuthModal from '@/components/authModal';

import { useForm } from 'react-hook-form';

export interface createAccountForm {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

export default function TextCreateAccountPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<createAccountForm>({ mode: 'onBlur' });

  const onSubmit = async ({
    name,
    email,
    password,
    confirmedPassword,
  }: createAccountForm) => {};

  return (
    <AuthModal>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start w-[440px] h-full]'>
          <div className='text-[30px] font-bold py-4'>Create your account</div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-4'>
            <div className='space-y-6'>
              <AuthInput<createAccountForm>
                placeholder='Name'
                register={register}
                title='name'
                type='text'
                watch={watch}
              />
              <AuthInput<createAccountForm>
                placeholder='Email'
                register={register}
                title='email'
                type='email'
                watch={watch}
              />
              <AuthInput<createAccountForm>
                placeholder='Password'
                register={register}
                title='password'
                type='password'
                watch={watch}
              />
              <AuthInput<createAccountForm>
                placeholder='Confirm Password'
                register={register}
                title='confirmedPassword'
                type='password'
                watch={watch}
              />
            </div>
            <BigButton
              type='submit'
              className='bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 h-[52px] text-[16px] mt-28'
            >
              {isSubmitting ? 'Creating' : 'Next'}
            </BigButton>
          </form>
        </div>
      </div>
    </AuthModal>
  );
}
