export default function Container({ className, children, ...props }) {
  let styling = "lg:w-768 xl:w-1024 mx-6 lg:mx-auto " + className;
  return <div className={styling}>{children}</div>;
}
