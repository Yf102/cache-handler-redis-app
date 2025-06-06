"use client";

import { useFormStatus } from "react-dom";
import { revalidateByTag } from "../../../utils/actions/revalidate";
import { Dispatch, SetStateAction } from "react";
import {JokeType} from "../../api/joke/route";
import { RevalidateButton } from "../../components/revalidate-btn";

type Props = {
    setJoke: Dispatch<SetStateAction<JokeType>>
}

const JokeForm = ({ setJoke }: Props) => {
    const tagname = `joke-data`

    const handeRevalidateTag = async () => {
        revalidateByTag(tagname)
    }

    const handleFetch = async () => {
        const res = await fetch(`/api/joke?tagname=${tagname}`);

        if (!res.ok) {
            return null
        }

        const data = await res.json() as JokeType;

        setJoke(data)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
            <form className="revalidate-from-tag" action={handeRevalidateTag}>
                <RevalidateButton type='revalidate' btnMsg='Revalidate Joke'/>
            </form>

            <form className="revalidate-from-tag" action={handleFetch}>
                <RevalidateButton type='fetch' btnMsg='Fetch a Joke'/>
            </form>
        </div>
    );
}

export {JokeForm}
