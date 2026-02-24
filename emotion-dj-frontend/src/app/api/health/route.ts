import { NextResponse } from "next/server";

const BACKEND = process.env.BACKEND_URL || "http://localhost:8002";

export async function GET() {
  const upstream = await fetch(`${BACKEND}/api/health`);
  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
