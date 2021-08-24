import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const PromoList = ({
  slug,
  title,
  imgSource,
  time,
  prefix = "/promo/detail",
}) => (
  <Link href={`${prefix}/${slug}`}>
    <a
      className="flex flex-col bg-grayscale-100 hover:shadow-lg rounded-lg roboto text-grayscale-700"
      title={title}
    >
      <div className="ratio-16-9 bg-grayscale-300 rounded-t-lg relative">
        {imgSource && (
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              unoptimized={true}
              alt={title}
              src={imgSource}
              layout="fill"
              objectFit="cover"
              quality={3}
              className="rounded-t-lg"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="poppins text-primary-200 font-bold">{title}</div>
        <span className="text-grayscale-700 roboto text-sm">
          {moment(time).locale("id").format("DD MMMM YYYY")}
        </span>
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
