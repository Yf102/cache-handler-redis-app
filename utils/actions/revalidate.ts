"use server";

import { revalidatePath, revalidateTag } from 'next/cache'
import { TimeData } from '../../app/[timezone]/components/TimeZoneClient';



const revalidateByTag = async (tag: string) => {
    revalidateTag(tag)
}

const revalidateByPath = async (path: string) => {
    revalidatePath(path)
}

export { revalidateByTag, revalidateByPath }
