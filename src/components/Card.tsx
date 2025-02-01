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
				className="block grid gap-4 hover:bg-skin-accent/50 focus-visible:no-underline transition"
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
				<p className="text-xl sm:text-2xl font-sans leading-[150%]">
					{description}
				</p>
			</a>
		</li>
	);
}
