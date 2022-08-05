import { formatDistance } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { titleToUrl, spliceSentences } from "../utils/utils";

export default function ArticleItem({ item }) {
  const articleTitleToUrl = titleToUrl(item.title);

  const { suscription } = useRouter().query;
  return (
    <Link
      key={item.id}
      className="block p-2 hover:text-accent-1-hover"
      href={`/feeds/${suscription}/${articleTitleToUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col space-y-2">
        <div className="font-bold font-title text-xl text-accent-1">
          {item.title}
        </div>
        <div className="text-accent-1">
          {formatDistance(new Date(item.isoDate), new Date(), {
            addSuffix: true,
          })}
        </div>
        <div className="font-body font-normal">
          {spliceSentences(item.contentSnippet)}
        </div>
      </div>
    </Link>
  );
}
