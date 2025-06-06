"use client";

import { useFormStatus } from "react-dom";
import { revalidateByTag } from "../../../utils/actions/revalidate";
import { Dispatch, SetStateAction } from "react";
import {JokeType} from "../../api/joke/route";

function RevalidateButton({ btnMsg, type }: { btnMsg: string; type: 'fetch' | 'revalidate' }) {
    const formStatus = useFormStatus();

    return (
        <button
            className={`revalidate-from-button ${type}`}
            type="submit"
            disabled={formStatus.pending}
            aria-disabled={formStatus.pending}
        >
            {btnMsg}
        </button>
    );
}

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
