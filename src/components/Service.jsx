import Link from "next/link";
import { theme } from "../../tailwind.config";

export function ServiceList({ icon, slug, name }) {
  const Icon = icon;

  return (
    <Link href={`/layanan/${slug}`}>
      <a className="group hover:shadow-lg cursor-pointer bg-grayscale-100 py-4 px-5 rounded-lg text-grayscale-800 font-bold arimo flex lg:text-lg items-center">
        <span className="w-10 h-10 rounded-full border border-primary-400 flex justify-center items-center">
          <Icon width={24} height={24} fill={theme.colors.primary[400]} />
        </span>
        <span className="ml-3">{name}</span>
      </a>
    </Link>
  );
}

export default function ServiceContainer({ className, children }) {
  let css =
    "mx-5 xl:mx-12 grid grid-flow-row gap-5 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  if (className) {
    css += ` ${className}`;
  }
  return <div className={css}>{children}</div>;
}
