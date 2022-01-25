const title = "zenfuse";
const description = "Revolutionary Trading Platform";
const fullDescription =
  "The ultimate solution for cryptocurrency trading with built-in connectivity to major exchanges, a next-gen toolset, analytics, portfolio management, news aggregation, set within an ecosystem extensible by developers.";
const url = "zenfuse.io";
const image = `/assets/images/seo.png`;

export const SEO = {
  index: {
    title: `${description} | ${title}`,
    description: fullDescription,
    url: url,
    image: `https://${url}${image}`,
    ogTitle: `${title}`,
    ogDescription: fullDescription,
    ogImage: `https://${url}${image}`,
    twitterCard: "summary_large_image",
    twitterTitle: `${description} | ${title}`,
    twitterDescription: fullDescription,
    twitterImage: `https://${url}${image}`,
  },
};
