import { NextRequest, NextResponse } from 'next/server'
import ogs from 'open-graph-scraper'

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  if (url === null)
    return NextResponse.json({
      status: 400,
      message: 'URL is required',
    })

  try {
    const { result } = await ogs({ url })
    return NextResponse.json({
      success: 1,
      meta: {
        title: result.ogTitle,
        description: result.ogDescription,
        image: {
          url: result.ogImage ? result.ogImage[0].url : '',
        },
      },
    })
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: 'URL not found',
    })
  }
}
