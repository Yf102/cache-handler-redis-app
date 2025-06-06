import { NextRequest } from 'next/server'

export type JokeType = {
  type: string
  setup: string
  punchline: string
  id: number
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const tagname = searchParams.get('tagname')

  const res = await fetch(`https://official-joke-api.appspot.com/random_joke`, {
    next: { tags: [`${tagname}`], revalidate: 60 },
  })

  if (!res.ok) {
    return Response.json({ status: false, error: true })
  }

  const data = (await res.json()) as JokeType

  return Response.json(data)
}
