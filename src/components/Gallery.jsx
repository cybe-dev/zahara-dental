import Image from "next/image";
import Link from "next/link";

export function GalleryList({ text, slug, image }) {
  return (
    <Link href={`/layanan/${slug}`}>
      <a className="p-2" title={text}>
        <div className="ratio-1-1">
          <div className="rounded-xl absolute top-0 left-0 w-full h-full flex justify-center items-center">
            {image ? (
              <Image
                unoptimized={true}
                alt={text}
                src={image}
                width={500}
                height={500}
                objectFit="contain"
                className="w-full h-full rounded-xl"
              />
            ) : null}
          </div>
        </div>
        <div className="text-center mt-2 text-grayscale-800 arimo font-bold">
          {text}
        </div>
      </a>
    </Link>
  );
}

export default function GalleryContainer({ children }) {
  return (
    <div className="grid grid-flow-row gap-8 md:gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
      {children}
    </div>
  );
}
