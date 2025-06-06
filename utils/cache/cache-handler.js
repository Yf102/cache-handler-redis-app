import { getCacheHandler } from './get-cache-handler.js';
import {getRawKey, PREFIX} from "./config.js";

export default class CacheHandler {
    constructor(options) {
        this.options = options;
    }

    async get(key) {
        console.log(`getting key: ${key}`)
        return getCacheHandler().getCache(key);
    }

    async set(key, data, ctx) {
        const tags =  ctx?.tags ?? [`${key}`]
        console.log(`Setting tags:`, tags)
        const payload = {
            value: data,
            lastModified: Date.now(),
            tags: tags,
        };
        return getCacheHandler().setCache(key, payload);
    }

    async revalidateTag(tags) {
        // tags is either a string or an array of strings
        tags = [tags]
            .flat()
            .map(s => s.replace(/^_N_T_/, ''));

        const handler = getCacheHandler();
        const keys = await handler.getAllKeys();

        for (const key of keys) {
            const rawKey = getRawKey(key);
            const value = await handler.getCache(rawKey);

            if (value?.tags?.some((tag) => tags.includes(tag))) {
                console.log(`Revalidating tags: ${rawKey}`)
                await handler.delCache(rawKey);
            }
        }
    }

    resetRequestCache() {
        // optional per-request memory cache
    }
}