

import { useCallback } from "react";
import type { Metadata } from "next";
import { FRONTEND } from "@/utils/env";
import { BlogsResponse } from "@/interfaces/blogs.model";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import useEmblaCarousel from "embla-carousel-react";

async function BlogArticleCarousel() {
  const res = await fetch(`${FRONTEND}/api/blog/`, {
    next: {
      revalidate: 5,
    },
  });
  const { blogs }: BlogsResponse = await res.json();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="blog-card-container">
        {blogs.length > 0 ? (
          <>
            {blogs.map((blog) => {
              return (
                <div key={blog._id} className="blog-card">
                  <Image
                    src={blog.featured_image}
                    alt={blog.title}
                    width={200}
                    height={200}
                  />
                  <h2>{blog.title}</h2>
                  <h3>{blog.subtitle}</h3>
                  <Link className="link-dark" href={`/blogs/${blog._id}`}>
                    {"Read More"}
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h2>Not Found</h2>
          </>
        )}
      </div>
    </>
  );
}

export default BlogArticleCarousel;
