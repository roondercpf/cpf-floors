import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "@/utils/env";

export async function GET(
  req: NextRequest,
  { params: { productType } }: { params: { productType: string } }
) {
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
