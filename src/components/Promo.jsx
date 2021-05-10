import Link from "next/link";

export const PromoList = ({ title, time }) => (
  <Link href="/promo/detail">
    <a className="flex flex-col bg-grayscale-100 hover:shadow-lg rounded-lg roboto text-grayscale-700">
      <div className="ratio-16-9 bg-grayscale-300 rounded-t-lg"></div>
      <div className="p-5">
        <div className="poppins text-primary-200 font-bold">{title}</div>
        <span className="text-grayscale-700 roboto text-sm">{time}</span>
      </div>
    </a>
  </Link>
);
export default function Promo({ children }) {
  return (
    <div className="grid grid-flow-row gap-5 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
      {children}
    </div>
  );
}
