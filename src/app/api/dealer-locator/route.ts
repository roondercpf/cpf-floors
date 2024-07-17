import { NextRequest, NextResponse } from "next/server";
import { BACKEND } from "@/utils/env";
import { DealerLocatorResponse } from "@/interfaces/dealer-locator.model";

export async function GET(req: NextRequest) {
  const res = await fetch(`${BACKEND}/api/dealer-locator`);
  const data: DealerLocatorResponse = await res.json();

  if (res.status !== 200) {
    return NextResponse.json({ error: "Dealer not found" }, { status: 404 });
  }

  return NextResponse.json(data.dealers, { status: res.status });
}
