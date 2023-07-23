import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json({
    success: 1,
    file: {
      url: 'https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg',
      // ... and any additional fields you want to store, such as width, height, color, extension, etc
    },
  })
}
