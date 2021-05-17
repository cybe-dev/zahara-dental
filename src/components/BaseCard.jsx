export default function BaseCard({ className, children, ...props }) {
  let css = "bg-grayscale-100 p-5 rounded-md";
  if (className) {
    css += ` ${className}`;
  }
  return (
    <div className={css} {...props}>
      {children}
    </div>
  );
}
