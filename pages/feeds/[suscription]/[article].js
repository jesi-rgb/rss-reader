import { FEEDS, getFeed } from "../../../lib/rss";
import { useRouter } from "next/router";
import { titleToUrl } from "../../../utils/utils";
import ArticleBody from "../../../components/ArticleBody";

export default function Article(props) {
  return (
    <>
      <ArticleBody
        title={props.title}
        date={props.date}
        content={props.content}
        link={props.link}
        author={props.author}
        suscription={props.suscription}
      />
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];
  for (let feed of FEEDS) {
    let f = await getFeed(feed.url);
    for (let article of f.items) {
      paths.push({
        params: {
          suscription: feed.slug.toString(),
          article: titleToUrl(article.title).toString(),
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let feed = await getFeed(
    FEEDS.find((feed) => feed.slug === params.suscription).url
  );

  let article = feed.items.find(
    (art) => titleToUrl(art.title) === params.article
  );
  return {
    props: {
      title: article.title,
      link: article.link,
      suscription: params.suscription,
      date: article.pubDate,
      author: article.author,
      content: article.content,
      contentSnippet: article.contentSnippet,
    },
  };
}
