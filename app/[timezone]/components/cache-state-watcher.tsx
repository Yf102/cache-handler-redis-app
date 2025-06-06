"use client";

import {ReactNode, useEffect, useState} from "react";
import { RevalidateTagFrom } from "./revalidate-form";

export type TimeData = {
    timeZone: string;
    dateTime	: string
};

const CacheStateWatcher = ({ timezone }: {timezone: string}): ReactNode => {
    const [timeData, setTimeData] = useState<undefined | TimeData>()

    return (
        <>
            <div style={{marginBottom: '20px'}}>
                <div className="pre-rendered-at">
                    {timezone.toUpperCase()} Time: {timeData?.dateTime}
                </div>

            </div>

            <RevalidateTagFrom timezone={timezone} setTimeData={setTimeData}/>
        </>
    );
}

export {CacheStateWatcher}