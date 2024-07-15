import type { Metadata } from "next";
import { FRONTEND } from "../../utils/env";
import { BlogsResponse } from "@/interfaces/blogs.model";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogs",
  description: "CPF Floors - Blogs",
};

async function Blogs() {
  const res = await fetch(`${FRONTEND}/api/blog/`, {
    next: {
      revalidate: 5,
    },
  });
  const { blogs }: BlogsResponse = await res.json();
  console.log(blogs)
  return (
    <>
      {blogs.length > 0 ? (
        <>
          {blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <Image
                  src={blog.featured_image}
                  alt={blog.title}
                  width={200}
                  height={200}
                />
                <h2>{blog.title}</h2>
                <h3>{blog.subtitle}</h3>
                <a href={`/blogs/${blog._id}`}>{">"}</a>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Blogs;
