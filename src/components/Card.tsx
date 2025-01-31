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
		<li className="my-12 sm:max-w-[64%] grid gap-4">
			<Datetime size="sm" pubDatetime={pubDatetime} modDatetime={modDatetime} />
			<a
				href={href}
				className="inline-block hover:text-skin-accent focus-visible:no-underline transition"
			>
				{secHeading ? (
					<h2 {...headerProps}>{title}</h2>
				) : (
					<h3 {...headerProps}>{title}</h3>
				)}
			</a>
			<p className="text-xl sm:text-2xl font-sans leading-[150%]">
				{description}
			</p>
		</li>
	);
}
