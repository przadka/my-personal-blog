import { useState } from "react";
import type { CollectionEntry } from "astro:content";
import CardLarge from "./CardLarge";
import Pagination from "./Pagination.astro";
import ArrowLeft from "./ArrowLeft.astro";
import ArrowRight from "./ArrowRight.astro";

interface Props {
	allFeaturedPosts: CollectionEntry<"blog">[];
}

export default function FeaturedPosts({ allFeaturedPosts }: Props) {
	const [currentPostIndex, setCurrentPostIndex] = useState(0);

	const totalPosts = allFeaturedPosts.length;
	const currentPost = allFeaturedPosts[currentPostIndex];

	// Calculate pagination URLs - empty string means disabled
	const prevUrl = currentPostIndex > 0 ? "#" : "";
	const nextUrl = currentPostIndex < totalPosts - 1 ? "#" : "";

	// Handle pagination navigation
	const handleNavigation = (direction: "prev" | "next") => {
		if (direction === "prev" && currentPostIndex > 0) {
			setCurrentPostIndex((prev) => prev - 1);
		} else if (direction === "next" && currentPostIndex < totalPosts - 1) {
			setCurrentPostIndex((prev) => prev + 1);
		}
	};

	const handleClick = (e: React.MouseEvent, direction: "prev" | "next") => {
		e.preventDefault();
		handleNavigation(direction);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent,
		direction: "prev" | "next",
	) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleNavigation(direction);
		}
	};

	if (!currentPost) return null;

	return (
		<>
			<ul className="section-cards-wrapper">
				<CardLarge
					href={`/posts/${currentPost.slug}/`}
					frontmatter={currentPost.data}
					secHeading={false}
				/>
			</ul>
			<div className="flex items-center px-[16.95vw] gap-4">
				<button
					type="button"
					onClick={(e) => prevUrl && handleClick(e, "prev")}
					className="section-icon-button"
					disabled={!prevUrl}
				>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="rotate-180"
						aria-label="Previous post"
						role="img"
					>
						<path
							d="M4 12.5L19 12.5"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="square"
							fill="none"
						/>
						<path
							d="M14.5 7L20 12.5L14.5 18"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="square"
							fill="none"
						/>
					</svg>
					<span className="hidden sm:block">Prev</span>
				</button>
				{currentPostIndex + 1} / {totalPosts}
				<button
					type="button"
					onClick={(e) => nextUrl && handleClick(e, "next")}
					className="section-icon-button"
					disabled={!nextUrl}
				>
					<span className="hidden sm:block">Next</span>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Next post"
						role="img"
					>
						<path
							d="M4 12.5L19 12.5"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="square"
							fill="none"
						/>
						<path
							d="M14.5 7L20 12.5L14.5 18"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="square"
							fill="none"
						/>
					</svg>
				</button>
			</div>
		</>
	);
}

const styles = {
	".pagination-button": {
		background: "none",
		border: "none",
		padding: 0,
		width: "100%",
		cursor: "pointer",
	},
} as const;
