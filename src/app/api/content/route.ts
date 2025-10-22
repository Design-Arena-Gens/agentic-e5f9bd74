
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const jsonFilePath = path.join(process.cwd(), 'src', 'data', 'db.json');
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new NextResponse('Error reading data', { status: 500 });
  }
}
