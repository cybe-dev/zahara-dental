import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <ul className="breadcrumb lg:order-2">
      {items.map((item, index) => (
        <li key={`${index}`}>
          {item.href ? (
            <Link href={item.href}>
              <a>{item.title}</a>
            </Link>
          ) : (
            item.title
          )}
        </li>
      ))}
    </ul>
  );
}
