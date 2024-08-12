import type { Metadata } from "next";
import { FRONTEND } from "@/utils/env";
import { BlogsResponse } from "@/interfaces/blogs.model";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import "@/app/sass/Blogs.scss";

export const metadata: Metadata = {
  title: "Blog",
  description: "CPF Floors - Blogs",
};

async function Blogs() {
  const res = await fetch(`${FRONTEND}/api/blog/`, {
    next: {
      revalidate: 5,
    },
  });
  const { blogs }: BlogsResponse = await res.json();

  return (
    <>
      <>
        <div className="blogs-main-banner">
          <div className="blogs-img">
            <Image
              src="/blogs/Group 65.png"
              height={600}
              width={600}
              alt="CPF Floors - Become a dealer"
            ></Image>
          </div>
          <div className="blogs-text">
            <h2>How to Choose Flooring for Commercial Use</h2>
            <p>
              Are you a retail shop owner in sunny Florida, seeking to revamp
              your space? Look no further! At CPF Floors, we understand that
              commercial flooring is more than aesthetics.
            </p>
            <Link className="link-dark" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </>

      {/*BLOG ARTICLES */}

      <div className="blog-card-container">
        {blogs.length > 0 ? (
          <>
            {blogs.map((blog) => {
              return (
                <div key={blog._id} className="blog-card">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    width={200}
                    height={200}
                  />
                  <h2>{blog.title}</h2>
                  <p>{blog.subtitle}</p>
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

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>


      </div>

      <div className="bluetape-become-container">
        <div className="bluetape-become">
          <h2>Become a Dealer</h2>
          <p>& Transform Spaces with Style</p>
          <Link href="/become-a-dealer" className="link-light">
            Contact Now!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Blogs;
