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
      <div className="embla">
        <div className="embla__viewport">
          <div className="embla__container">
            <div className="embla__slide">
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
                          <Link
                            className="link-dark"
                            href={`/blogs/${blog._id}`}
                          >
                            {"Read More"}
                          </Link>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h2>Article Not Found</h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*BUTTONS*/}

        <div className="home-carousel-buttons">
          <button
            className="embla__prev home-carousel-prev"
            onClick={scrollPrev}
          >
            <Image src="/prev.svg" height={50} width={50} alt="prev"></Image>
          </button>
          <button
            className="embla__next home-carousel-next"
            onClick={scrollNext}
          >
            <Image src="/next.svg" height={50} width={50} alt="next"></Image>
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogArticleCarousel;
