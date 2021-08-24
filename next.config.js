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
        source: "/:slug/page/1",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["admin.zaharadental.com"],
  },
};
