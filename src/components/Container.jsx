export default function Container({ className, children, ...props }) {
  let styling = "xl:w-1024 mx-6 lg:mx-16 xl:mx-auto " + className;
  return <div className={styling}>{children}</div>;
}
