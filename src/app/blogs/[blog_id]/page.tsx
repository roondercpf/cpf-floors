import { FRONTEND } from "@/utils/env";
import { Blog } from "@/interfaces/blogs.model";
import { notFound } from "next/navigation";

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

  return <div>BlogsID</div>;
}

export default BlogsID;
