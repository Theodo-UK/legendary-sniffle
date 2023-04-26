import { callOpenai } from '@/utils/handleQuestion/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const requestBody = await request.json();
  if (!requestBody.question) {
    return NextResponse.json('Error: No question provided.', { status: 400 });
  }
  const response = await callOpenai(requestBody.question);
  return NextResponse.json({ response });
}
