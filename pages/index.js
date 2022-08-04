import Link from "next/link";
import { FEEDS } from "../lib/rss";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12 font-title text-accent-1">RSN</h1>
      <div className="flex flex-col space-y-8 ">
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="font-title text-accent-1 hover:text-accent-1-hover text-2xl">
              {feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
