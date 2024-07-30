import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "../../../utils/env";
import { BlogsResponse } from "@/interfaces/blogs.model";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  revalidatePath(req.nextUrl.basePath);
  const res = await fetch(`${BACKEND}/api/blog/`);

  const data: BlogsResponse = await res.json();

  return NextResponse.json(data, { status: res.status });
}
