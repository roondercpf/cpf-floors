import { FRONTEND } from "@/utils/env";
import { Blog } from "@/interfaces/blogs.model";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/sass/Blogs.scss";
import BlogArticleCarousel from "@/components/BlogArticleCarousel";

async function BlogsID({
  params: { blog_id },
}: {
  params: { blog_id: string };
}) {
  const res = await fetch(`${FRONTEND}/api/blog/${blog_id}`);
  const data: Blog = await res.json();

  if ("error" in data) {
    notFound();
  }

  console.log(data.paragraphs);

  return (
    <>
      <div className="blog-article-container">
        {data ? (
          <>
            <div className="blog-title">
              <Link className="underline mb-10" href="/blogs">
                Back to the Blog
              </Link>
              <h1>{data.title}</h1>
            </div>
            <>
              <BlogArticleCarousel />
            </>
            <div key={data._id} className="blog-article">
              <Image
                src={data.featured_image}
                alt={data.title}
                width={200}
                height={200}
              />
              <Link className="article-link-2 underline mb-10" href="/blogs">
                Back to the Blog
              </Link>
              <h1 className="article-title">{data.title}</h1>
              <h3>{data.subtitle}</h3>
              {data.paragraphs.length > 0 ? (
                data.paragraphs.map((paragraph, index) => (
                  <>
                    <p className="my-5" key={index}>
                      {paragraph}
                    </p>
                  </>
                ))
              ) : (
                <>
                  <p>Not found</p>
                </>
              )}
            </div>
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

export default BlogsID;
