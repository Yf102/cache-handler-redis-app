"use client";

import { revalidateByTag } from "../../../utils/actions/revalidate";
import { Dispatch, SetStateAction } from "react";
import { TimeData } from "./TimeZoneClient";
import { RevalidateButton } from "../../components/revalidate-btn";

type Props = {
    timezone: string
    setTimeData: Dispatch<SetStateAction<TimeData>>
}

const TimeZoneForm = ({ timezone, setTimeData }: Props) => {
    const tagname = `time-data:/${timezone}`

    const handeRevalidateTag = async () => {
        revalidateByTag(tagname)
    }

    const handleFetch = async () => {
        const res = await fetch(`/api/time?timezone=${timezone}&tagname=${tagname}`);

        if (!res.ok) {
            return null
        }

        const data = await res.json() as TimeData;

        setTimeData(data)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
            <form className="revalidate-from-tag" action={handeRevalidateTag}>
                <RevalidateButton type='revalidate' btnMsg='Revalidate TAG'/>
            </form>

            <form className="revalidate-from-tag" action={handleFetch}>
                <RevalidateButton type='fetch' btnMsg='Fetch time'/>
            </form>
        </div>
    );
}

export { TimeZoneForm }
