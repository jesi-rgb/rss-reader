import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import formatDistance from "date-fns/formatDistance";
import { DotFilledIcon } from "@radix-ui/react-icons";

export default function ArticleBody({
  title,
  date,
  content,
  link,
  author,
  suscription,
}) {
  return (
    <>
      <div className="px-6 py-12 max-w-xl mx-auto">
        <div className="font-title text-accent-1 text-3xl mb-10">{title}</div>
        <div className="flex flex-row items-center space-x-2 font-body text-accent-1">
          <div>{suscription.replace(/^\w/, (c) => c.toUpperCase())}</div>
          <DotFilledIcon />
          <div>{author}</div>
          <DotFilledIcon />
          <div>
            {formatDistance(new Date(date), new Date(), {
              addSuffix: true,
            })}
          </div>
          <DotFilledIcon />
          <a href={link}>
            <div className="group flex flex-row space-x-1 items-center">
              <div className="font-body font-normal text-accent-1">
                {" "}
                Read online
              </div>
              <ArrowTopRightIcon className="mt-0.5 text-accent-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
        <div
          id="article"
          className="font-body font-normal text-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  );
}
