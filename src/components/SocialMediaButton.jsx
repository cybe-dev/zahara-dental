import { theme } from "../../tailwind.config";

export default function SocialMediaButton({
  href = "#",
  className,
  icon,
  ...props
}) {
  let css =
    "flex justify-center items-center w-8 h-8 bg-grayscale-400 hover:bg-primary-100";
  if (className) {
    css += " " + className;
  }
  const Icon = icon;
  return (
    <a href={href} className={css} {...props}>
      <Icon width={18} height={18} fill={theme.colors.grayscale[100]} />
    </a>
  );
}
