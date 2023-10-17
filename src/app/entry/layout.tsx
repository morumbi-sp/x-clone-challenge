import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entry page',
  description: 'Cloning X',
};

export default function EntryLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.auth}
    </>
  );
}
