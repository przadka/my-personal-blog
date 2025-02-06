import { slugifyStr } from "@utils/slugify";
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
    className: "text-[40px] sm:text-[4vw] font-sans font-medium leading-[120%]",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="block grid gap-6 transition hover:bg-skin-accent/50 focus-visible:no-underline"
      >
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
