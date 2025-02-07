import { useEffect, useMemo, useState } from "react";
import type { CollectionEntry } from "astro:content";
import CardLarge from "./CardLarge";
import Card from "./Card";

interface Props {
  allFeaturedPosts: CollectionEntry<"blog">[];
}

export default function FeaturedPosts({ allFeaturedPosts }: Props) {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
      setCurrentPostIndex(0);
    }
  }, [window]);

  const totalPosts = allFeaturedPosts.length;
  const currentPost = allFeaturedPosts[currentPostIndex];

  // Calculate pagination URLs - empty string means disabled
  const prevUrl = useMemo(() => currentPostIndex > 0, [currentPostIndex]);
  const nextUrl = useMemo(
    () => currentPostIndex < totalPosts - (isMobile ? 1 : 2),
    [currentPostIndex, totalPosts, isMobile]
  );

  // Handle pagination navigation
  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPostIndex > 0) {
      setCurrentPostIndex(prev => prev - 1);
    } else if (
      direction === "next" &&
      currentPostIndex < totalPosts - (isMobile ? 1 : 2)
    ) {
      setCurrentPostIndex(prev => prev + 1);
    }
  };

  const handleClick = (e: React.MouseEvent, direction: "prev" | "next") => {
    e.preventDefault();
    handleNavigation(direction);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    direction: "prev" | "next"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigation(direction);
    }
  };

  if (!currentPost) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${isMobile ? 100 * currentPostIndex : currentPostIndex * 40}%)`,
          }}
        >
          {allFeaturedPosts.map((post, index) => (
            <ul
              key={post.slug}
              className={`w-full flex-shrink-0 max-sm:px-6 ${allFeaturedPosts.length === 1 ? "md:max-w-xl md:pl-[calc(16.95vw+48px)] lg:max-w-[64%]" : "lg:w-[40%] lg:pl-12"}`}
            >
              <CardLarge
                href={`/posts/${post.slug}/`}
                frontmatter={post.data}
                secHeading={false}
              />
            </ul>
          ))}
        </div>
      </div>

      {(isMobile && allFeaturedPosts.length > 1) ||
        (!isMobile && allFeaturedPosts.length > 2 && (
          <div className="mt-8 flex items-center gap-4 px-6 lg:px-12">
            <button
              type="button"
              onClick={e => prevUrl && handleClick(e, "prev")}
              onKeyDown={e => prevUrl && handleKeyDown(e, "prev")}
              className="section-icon-button"
              disabled={!prevUrl}
              aria-label="Previous post"
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
              <span className="hidden lg:block">Prev</span>
            </button>

            {/* <div className="font-mono">
          {currentPostIndex + 1} / {totalPosts}
        </div> */}

            <button
              type="button"
              onClick={e => nextUrl && handleClick(e, "next")}
              onKeyDown={e => nextUrl && handleKeyDown(e, "next")}
              className="section-icon-button"
              disabled={!nextUrl}
              aria-label="Next post"
            >
              <span className="hidden lg:block">Next</span>
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
        ))}
    </div>
  );
}
