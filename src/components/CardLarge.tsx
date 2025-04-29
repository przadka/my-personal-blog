import { slugifyStr } from "@/utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function CardLarge({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-[40px] lg:text-[4vw] font-sans font-medium leading-[120%]",
  };

  return (
    <li className="my-6">
      <a href={href} className="post-link gap-6">
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p className="font-sans text-2xl leading-[150%]">{description}</p>
      </a>
    </li>
  );
}
