import { useEffect, useMemo, useState } from "react";
import type { CollectionEntry } from "astro:content";
import CardLarge from "./CardLarge";
import Card from "./Card";

interface Props {
  allFeaturedPosts: CollectionEntry<"blog">[];
}

export default function FeaturedPosts({ allFeaturedPosts }: Props) {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [currentPostIndexMobile, setCurrentPostIndexMobile] = useState(0);

  const lg = useMemo(() => window?.innerWidth < 1024, [window?.innerWidth]);
  const md = useMemo(() => window?.innerWidth < 768, [window?.innerWidth]);
  const sm = useMemo(() => window?.innerWidth < 640, [window?.innerWidth]);

  useEffect(() => {
    setCurrentPostIndex(0);
    setCurrentPostIndexMobile(0);
  }, [window.innerWidth]);

  const totalPosts = allFeaturedPosts.length;
  const currentPost = allFeaturedPosts[currentPostIndex];

  // Calculate pagination URLs - empty string means disabled
  const prevUrl = useMemo(() => currentPostIndex > 0, [currentPostIndex]);
  const nextUrl = useMemo(
    () => currentPostIndex < totalPosts - 2,
    [currentPostIndex, totalPosts]
  );

  const prevUrlMobile = useMemo(
    () => currentPostIndexMobile > 0,
    [currentPostIndexMobile]
  );
  const nextUrlMobile = useMemo(
    () => currentPostIndexMobile < totalPosts - 1,
    [currentPostIndexMobile, totalPosts]
  );

  // Handle pagination navigation
  const handleNavigation = (direction: "prev" | "next", isMobile: boolean) => {
    if (direction === "prev") {
      isMobile && prevUrlMobile
        ? setCurrentPostIndexMobile(prev => prev - 1)
        : prevUrl
          ? setCurrentPostIndex(prev => prev - 1)
          : null;
    } else if (direction === "next") {
      isMobile && nextUrlMobile
        ? setCurrentPostIndexMobile(prev => prev + 1)
        : nextUrl
          ? setCurrentPostIndex(prev => prev + 1)
          : null;
    }
  };

  const handleClick = (
    e: React.MouseEvent,
    direction: "prev" | "next",
    isMobile: boolean
  ) => {
    e.preventDefault();
    handleNavigation(direction, isMobile);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    direction: "prev" | "next",
    isMobile: boolean
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigation(direction, isMobile);
    }
  };

  if (!currentPost) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="hidden transition-transform duration-300 ease-in-out xl:flex"
          style={{
            transform: `translateX(-${currentPostIndex * 40}%)`,
          }}
        >
          {allFeaturedPosts.map(post => (
            <ul
              key={post.id}
              className={`w-full flex-shrink-0 px-6 sm:px-12 lg:px-0 ${allFeaturedPosts.length === 1 ? "" : "lg:w-[40%] lg:pl-12"}`}
            >
              <CardLarge
                href={`/posts/${post.id}/`}
                frontmatter={post.data}
                secHeading={false}
              />
            </ul>
          ))}
        </div>
        <div
          className="hidden transition-transform duration-300 ease-in-out lg:flex xl:hidden"
          style={{
            transform: `translateX(-${currentPostIndex * 45}%)`,
          }}
        >
          {allFeaturedPosts.map(post => (
            <ul
              key={post.id}
              className={`w-full flex-shrink-0 px-6 sm:px-12 lg:px-0 ${allFeaturedPosts.length === 1 ? "" : "lg:w-[45%] lg:pl-12"}`}
            >
              <CardLarge
                href={`/posts/${post.id}/`}
                frontmatter={post.data}
                secHeading={false}
              />
            </ul>
          ))}
        </div>
        <div
          className="flex transition-transform duration-300 ease-in-out lg:hidden"
          style={{
            transform: `translateX(-${100 * currentPostIndexMobile}%)`,
          }}
        >
          {allFeaturedPosts.map(post => (
            <ul
              key={post.id}
              className={`w-full flex-shrink-0 px-6 sm:px-12 lg:px-0 ${allFeaturedPosts.length === 1 ? "" : "lg:w-[40%] lg:pl-12"}`}
            >
              <CardLarge
                href={`/posts/${post.id}/`}
                frontmatter={post.data}
                secHeading={false}
              />
            </ul>
          ))}
        </div>
      </div>

      {allFeaturedPosts.length > 1 && (
        <div className="mt-8 flex items-center gap-4 px-6 sm:px-12 lg:hidden">
          <button
            type="button"
            onClick={e => prevUrlMobile && handleClick(e, "prev", true)}
            onKeyDown={e => prevUrlMobile && handleKeyDown(e, "prev", true)}
            className="section-icon-button"
            disabled={!prevUrlMobile}
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
            <span className="hidden sm:block">Prev</span>
          </button>

          {/* <div className="font-mono">
          {currentPostIndex + 1} / {totalPosts}
        </div> */}

          <button
            type="button"
            onClick={e => nextUrlMobile && handleClick(e, "next", true)}
            onKeyDown={e => nextUrlMobile && handleKeyDown(e, "next", true)}
            className="section-icon-button"
            disabled={!nextUrlMobile}
            aria-label="Next post"
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
      )}
      {allFeaturedPosts.length > 2 && (
        <div className="mt-8 hidden items-center gap-4 px-6 sm:px-12 lg:flex">
          <button
            type="button"
            onClick={e => prevUrl && handleClick(e, "prev", false)}
            onKeyDown={e => prevUrl && handleKeyDown(e, "prev", false)}
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
            <span className="hidden sm:block">Prev</span>
          </button>

          {/* <div className="font-mono">
          {currentPostIndex + 1} / {totalPosts}
        </div> */}

          <button
            type="button"
            onClick={e => nextUrl && handleClick(e, "next", false)}
            onKeyDown={e => nextUrl && handleKeyDown(e, "next", false)}
            className="section-icon-button"
            disabled={!nextUrl}
            aria-label="Next post"
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
      )}
    </div>
  );
}
