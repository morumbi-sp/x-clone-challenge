export default function EntryLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  console.log(props);
  return (
    <>
      {props.children}
      {props.auth}
    </>
  );
}
