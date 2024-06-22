// app/api/getCountry.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://extreme-ip-lookup.com/json/63.70.164.200?key=JFZOaF1Wq7PRkyF05wr3", {
      method: "GET",
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result && result.country) {
      return NextResponse.json({ country: result.country });
    } else {
      throw new Error('Country data not found');
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}