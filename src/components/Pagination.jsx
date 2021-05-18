import Link from "next/link";

export default function Pagination({ now, total, prefix }) {
  const paging = [];

  let start = now < 3 ? 0 : now - 2 - 1;
  let end = now > total - 3 ? total : now + 2;
  if (now < 3) {
    const slice = 3 - now;
    if (end + slice <= total) {
      end = end + slice;
    }
  }
  if (now > total - 3) {
    const slice = 2 - (total - now);
    if (start - slice >= 0) {
      start = start - slice;
    }
  }

  for (let i = start; i < end; i++) {
    paging.push({
      page: i + 1,
      href: prefix + (i + 1),
    });
  }

  return (
    <div className="flex mt-5 mb-12 justify-center">
      {now - 1 > 0 && (
        <Link href={`${prefix}${now - 1}`}>
          <a
            title={`Halaman Sebelumnya`}
            className="py-1 px-3 border m-1 rounded border-primary-300 bg-primary-300 hover:bg-primary-400 text-grayscale-100 roboto"
          >
            &laquo;
          </a>
        </Link>
      )}
      {paging.map((item, index) => {
        if (item.page === now) {
          return (
            <span
              key={`${index}`}
              className="py-1 px-3 border m-1 rounded border-primary-300 text-primary-300 roboto"
            >
              {item.page}
            </span>
          );
        }
        return (
          <Link href={item.href} key={`${index}`}>
            <a
              title={`Halaman ${item.page}`}
              className="py-1 px-3 border m-1 rounded border-primary-300 bg-primary-300 hover:bg-primary-400 text-grayscale-100 roboto"
            >
              {item.page}
            </a>
          </Link>
        );
      })}
      {now + 1 <= total && (
        <Link href={`${prefix}${now + 1}`}>
          <a
            title={`Halaman Selanjutnya`}
            className="py-1 px-3 border m-1 rounded border-primary-300 bg-primary-300 hover:bg-primary-400 text-grayscale-100 roboto"
          >
            &raquo;
          </a>
        </Link>
      )}
    </div>
  );
}
