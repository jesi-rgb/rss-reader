import { format } from "date-fns";

export default function ArticleItem({ item }) {
  return (
    <a
      key={item.link}
      className="block p-4 border border-gray-200 hover:border-gray-500 rounded-lg"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="font-bold">{item.title}</div>
      <div>{format(new Date(item.isoDate), "PPP")}</div>
    </a>
  );
}
