import { FEEDS, getFeed } from "/lib/rss";
import ArticleItem from "../../components/ArticleItem";

export default function Feed({ feed, items }) {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12">{feed.title}</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <ArticleItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}
