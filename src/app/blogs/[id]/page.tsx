import { FRONTEND } from "@/utils/env";
import { Blog, BlogsResponse } from "@/interfaces/blogs.model";
import Image from "next/image";
import Link from "next/link";

import "@/app/sass/Blogs.scss";
import { BlogArticleCarousel } from "@/components/BlogArticleCarousel";

async function BlogsID({
  params: { id },
}: {
  params: { id: string };
}) {
  let data: Blog | undefined = undefined;
  let carouselData: BlogsResponse | undefined = undefined;
  try {
    const [blog, blogs] = await Promise.all([
      await fetch(`${FRONTEND}/api/blog/${id}`, {
        cache: "no-store"
      }).then(res => res.json()),
      await fetch(`${FRONTEND}/api/blog/`, {
        next: {
          revalidate: 5,
        },
      }).then(res => res.json())
    ])
    data = blog;
    carouselData = blogs;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }

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
              <BlogArticleCarousel blogs={carouselData ? carouselData.blogs : []} />
            </div>
            
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
              {data?.paragraphs?.length > 0 ? (
                data.paragraphs.map((paragraph, index) => (
                  <>
                    <p className="my-5" key={(index * Math.random()) + 4 * Math.random()}>
                      {paragraph}
                    </p>
                  </>
                ))
              ) : (
                <p>Not found</p>
              )}
            </div>
          </>
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
}

export default BlogsID;
