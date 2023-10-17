'use client';
import BigButton from '@/components/BigButton';
import Image from 'next/image';
import googleIcon from '/public/googleIcon.png';
import githubIcon from '/public/githubIcon.png';
import AuthModal from '@/components/authModal';
import AuthInput from '@/components/authInput';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(user);
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex h-full items-center'>
        <section className='basis-1/2 flex justify-center'>
          <svg viewBox='0 0 24 24' width={400} className='dark:fill-white'>
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </section>
        <section className='flex flex-col h-[645px] p-[20px]'>
          <h1 className='text-[64px] font-[780] my-[48px]'>Happening now</h1>
          <h3 className='text-[30px] font-[780] mb-[30px]'>Join today.</h3>
          <div className='flex flex-col justify-between h-full w-[307px]'>
            <div className='flex flex-col items-start'>
              <BigButton>
                <Image src={googleIcon} alt='google-icon' width={20} />
                <span className={`font-noto font-[400] ml-2 text-[15px]`}>
                  Sign up with Google
                </span>
              </BigButton>
              <BigButton className='mt-3'>
                <Image src={githubIcon} alt='github-icon' width={20} />
                <span className='ml-2'>Sign up with GitHub</span>
              </BigButton>
              <div className='inline-flex items-center justify-center w-full my-5'>
                <hr className='bg-gray-200 w-full' />
                <span className='absolute bg-white px-2 -translate-y-[1px] text-[15px] dark:bg-black'>
                  or
                </span>
              </div>
              <BigButton
                href='/entry/create-account'
                className='bg-point text-white'
              >
                Create account
              </BigButton>
              <span className='text-[10.5px]  text-darkText mt-2'>
                By signing up, you agree to the{' '}
                <a className='text-point hover:underline'>Terms of Service</a>{' '}
                and <a className='text-point hover:underline'>Privacy Policy</a>{' '}
                , including{' '}
                <a className='text-point hover:underline'>Cookie Use.</a>{' '}
              </span>
            </div>
            <div>
              <h4 className='text-[17px] font-[700]'>
                Already have an account?
              </h4>
              <BigButton href='/entry/sign-in' className='text-point mt-5'>
                Sign in
              </BigButton>
            </div>
          </div>
        </section>
      </div>
      <footer className='h-[72px] w-full px-[16px] py-[12px]'>
        <div className='gap-x-4 gap-y-1 text-[13px] text-darkText flex flex-wrap justify-center'>
          <button className='hover:underline'>About</button>
          <button className='hover:underline'>Download the X app</button>
          <button className='hover:underline'>Help Center</button>
          <button className='hover:underline'>Terms of Service</button>
          <button className='hover:underline'>Privacy Polic</button>
          <button className='hover:underline'>Cookie Policy</button>
          <button className='hover:underline'>Accessibility</button>
          <button className='hover:underline'>Ads info</button>
          <button className='hover:underline'>Blog</button>
          <button className='hover:underline'>Status</button>
          <button className='hover:underline'>Careers</button>
          <button className='hover:underline'>Brand Resources</button>
          <button className='hover:underline'>Marketing</button>
          <button className='hover:underline'>X for Business</button>
          <button className='hover:underline'>Developers</button>
          <button className='hover:underline'>Directory</button>
          <button className='hover:underline'>Settings</button>
          <button className='hover:underline'>© 2023 X Corp</button>
        </div>
      </footer>
    </div>
  );
}
