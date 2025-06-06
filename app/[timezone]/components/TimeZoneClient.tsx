"use client";

import {ReactNode, useEffect, useState} from "react";
import { TimeZoneForm } from "./TimeZoneForm";

export type TimeData = {
    timeZone: string;
    dateTime	: string
};

const TimeZoneClient = ({ timezone }: {timezone: string}): ReactNode => {
    const [timeData, setTimeData] = useState<undefined | TimeData>()

    return (
        <>
            <div style={{marginBottom: '20px'}}>
                <div className="pre-rendered-at">
                    {timezone.toUpperCase()} Time: {timeData?.dateTime}
                </div>

            </div>

            <TimeZoneForm timezone={timezone} setTimeData={setTimeData}/>
        </>
    );
}

export { TimeZoneClient }