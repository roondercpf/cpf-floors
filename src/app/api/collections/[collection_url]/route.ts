import { NextResponse, NextRequest } from "next/server";
import { BACKEND } from "@/utils/env";

export async function GET(
  req: NextRequest,
  { params: { collection_url } }: { params: { collection_url: string } }
) {
  if (!collection_url || collection_url.length === 0) {
    return NextResponse.json(
      { error: "Collection ID is required" },
      { status: 400 }
    );
  }

  const response = await fetch(`${BACKEND}/api/collections/${collection_url}`);

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
