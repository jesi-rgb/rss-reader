import { formatDistance } from "date-fns";

export default function ArticleItem({ item }) {
  return (
    <a
      key={item.link}
      className="block p-2 hover:text-accent-1-hover"
      href={item.link}
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
    </a>
  );
}

function spliceSentences(text, nSentences = 3) {
  let sentences = text.split(".");

  if (sentences.length > nSentences) {
    sentences = sentences.splice(0, nSentences);
  }
  console.log(sentences);

  return sentences.join(" ");
}
