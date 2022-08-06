import Parser from "rss-parser";
export const FEEDS = [
  //   {
  //     slug: "nextjs-blog",
  //     title: "Next.js Blog",
  //     url: "https://nextjs.org/feed.xml",
  //   },
  //   {
  //     slug: "vercel-blog",
  //     title: "Vercel Blog",
  //     url: "https://vercel.com/atom",
  //   },
  {
    slug: "vox",
    title: "Vox",
    url: "https://www.vox.com/rss/index.xml",
  },
  {
    slug: "el-pais",
    title: "El Pais",
    url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
