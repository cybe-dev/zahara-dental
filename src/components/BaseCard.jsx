export default function BaseCard({ className, children }) {
  let css = "bg-grayscale-100 p-5 rounded-md";
  if (className) {
    css += ` ${className}`;
  }
  return <div className={css}>{children}</div>;
}
