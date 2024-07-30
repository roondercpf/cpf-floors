import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "@/utils/env";
import { Blog } from "@/interfaces/blogs.model";

export async function GET(
  req: NextRequest,
  { params: { blog_id } }: { params: { blog_id: string } }
) {
  const res = await fetch(`${BACKEND}/api/blog/${blog_id}`);

  const data: Blog = await res.json();

  if (res.status !== 200) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(data, { status: res.status });
}
