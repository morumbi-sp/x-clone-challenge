export default function Layout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      {props.auth}
    </div>
  );
}
