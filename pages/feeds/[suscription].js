import { FEEDS, getFeed } from "/lib/rss";
import ArticleItem from "../../components/ArticleItem";

export default function Feed({ feed, items }) {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12 font-title text-accent-1">
        {feed.title}
      </h1>
      <div className="space-y-6">
        {items.slice(0, 10).map((item) => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { suscription: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.suscription);
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}
