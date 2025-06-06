'use client'
import React from 'react';
import {revalidateByPath} from "../../utils/actions/revalidate";
import {useFormStatus} from "react-dom";

const RevalidatePage = () => {
    const formStatus = useFormStatus();

    const handleRevalidatePath = async () => {
        revalidateByPath(window.location.pathname)
    }

    return (
        <form style={{width: 'fit-content', margin: '0 auto'}} action={handleRevalidatePath}>
            <button
                className={`revalidate-from-button revalidate-page ${formStatus.pending && 'disabled'}`}
                type="submit"
                disabled={formStatus.pending}
                aria-disabled={formStatus.pending}
            >
                Revalidate PAGE
            </button>
        </form>
    );
};

export default RevalidatePage;