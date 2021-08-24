import Image from "next/image";
import Link from "next/link";
import { useWeb } from "../context/web-interface";
import Search from "../images/Search";
import Container from "./Container";
import { theme } from "../../tailwind.config";
import { useRouter } from "next/router";

const NavbarList = ({ href, title }) => {
  const { asPath } = useRouter();
  const active = asPath.match(new RegExp(`^${href}`));
  let css = "block pb-2 border-b-2 noto font-bold hover:text-primary-200";
  if (active) {
    css += " text-primary-200 border-primary-200";
  } else {
    css += " text-grayscale-700 border-transparent";
  }
  return (
    <li className="mx-0 mr-5 lg:mx-4 text-sm">
      <Link href={href}>
        <a className={css} title={title}>
          {title}
        </a>
      </Link>
    </li>
  );
};

export default function BlogHeader({ h1 = false, categoryList }) {
  const HeadComponent = h1 ? "h1" : "div";
  const {
    state: { basicInformation },
  } = useWeb();

  return (
    <>
      <div className="bg-grayscale-100 pt-3 fixed top-0 left-0 w-full z-20 shadow-md">
        <Container className="flex items-center">
          <HeadComponent className="w-2/5 lg:w-1/5">
            <Link href="/">
              <a className="font-bold text-primary-100 flex items-center h-10 w-full relative">
                <Image
                  unoptimized={true}
                  src={basicInformation?.logo?.replace(
                    "public",
                    process.env.NEXT_PUBLIC_BASE_URL
                  )}
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  quality={90}
                />
              </a>
            </Link>
          </HeadComponent>
          <div className="w-full bg-grayscale-200 rounded-full flex items-center ml-5">
            <Search
              width={14}
              height={14}
              className="m-3"
              fill={theme.colors.grayscale[700]}
            />
            <input
              type="text"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  router.push(
                    "/blog/search?q=" + encodeURIComponent(e.target.value)
                  );
                }
              }}
              placeholder="Cari Artikel"
              className="h-6 w-full bg-transparent focus:ring-offset-transparent"
            />
          </div>
        </Container>
        <Container className="mt-5 overflow-y-hidden overflow-x-auto">
          <ul className="inline-flex lg:justify-center w-full">
            <NavbarList href="/blog" title="Beranda" />
            {categoryList?.map((item, index) => (
              <NavbarList
                key={`${index}`}
                href={`/${item.slug}`}
                title={item.name}
              />
            ))}
          </ul>
        </Container>
      </div>
      <div className="h-28" />
    </>
  );
}
