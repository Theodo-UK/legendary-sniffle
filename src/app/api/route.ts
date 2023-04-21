import { callOpenai } from '@/utils/openai';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env.local') });

export async function POST(request: Request) {
  const requestBody = await request.json();
  if (!requestBody.question) {
    return NextResponse.json('Error: No question provided.', { status: 400 });
  }
  const response = await callOpenai(requestBody.question);
  return NextResponse.json({ response });
}
