import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "../../../utils/env";
import { CollectionResponse } from "@/interfaces/collections.model";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  revalidatePath(req.nextUrl.basePath);
  const res = await fetch(`${BACKEND}/api/collections/`);

  const data: CollectionResponse = await res.json();

  return NextResponse.json(data, { status: res.status });
}