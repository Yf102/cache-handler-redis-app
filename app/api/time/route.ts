import { TimeData } from "../../[timezone]/components/cache-state-watcher";
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const  searchParams  = request.nextUrl.searchParams
    const timezone = searchParams.get('timezone');
    const tagname = searchParams.get('tagname');

    const res = await fetch(`https://timeapi.io/api/time/current/zone?timeZone=${timezone}`,{
        next: { tags: [`time-${tagname}`], revalidate: 60 },
    });

    if (!res.ok) {
        return Response.json({status: false, error: true});
    }

    const data = await res.json() as TimeData;

    return Response.json(data);
}