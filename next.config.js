module.exports = {
  async redirects() {
    return [
      {
        source: "/promo/1",
        destination: "/promo",
        permanent: true,
      },
      {
        source: "/blog/page/1",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/[slug]/page/1",
        destination: "/[slug]",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["localhost", "ak-cms.akbaraditama.com", "192.168.43.184"],
  },
};
