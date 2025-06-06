'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

const revalidateByTag = async (tag: string) => {
  revalidateTag(tag)
}

const revalidateByPath = async (path: string) => {
  revalidatePath(path)
}

export { revalidateByPath, revalidateByTag }
