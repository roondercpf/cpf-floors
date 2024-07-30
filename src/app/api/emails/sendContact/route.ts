import { NextRequest, NextResponse } from "next/server";
import { BACKEND } from "@/utils/env";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/emails/sendEmail`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    
    if (res.status !== 200) {
        return NextResponse.json({ error: "Failed to send contact request" }, { status: 500 });
    }
    
    return NextResponse.json({ message: "Contact request sent" }, { status: res.status });
}