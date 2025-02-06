import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-3xl sm:text-[2vw] font-sans font-medium leading-[120%]",
  };

  return (
    <li className="my-12 sm:max-w-[64%]">
      <a
        href={href}
        className={
          "block grid gap-4 transition-all duration-300 focus-visible:no-underline sm:hover:underline sm:hover:underline-offset-4"
        }
      >
        <Datetime
          size="sm"
          pubDatetime={pubDatetime}
          modDatetime={modDatetime}
        />
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <p className="font-sans text-xl leading-[150%] sm:text-2xl">
          {description}
        </p>
      </a>
    </li>
  );
}
