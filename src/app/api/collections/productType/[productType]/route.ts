import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "@/utils/env";
import { revalidatePath } from "next/cache";

export async function GET(
  req: NextRequest,
  { params: { productType } }: { params: { productType: string } }
) {
  revalidatePath(req.nextUrl.pathname);
  if (!productType || productType.length === 0) {
    return NextResponse.json(
      { error: "product type is required" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `${BACKEND}/api/collections/productType/${productType}`
  );

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
