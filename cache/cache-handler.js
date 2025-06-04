import { getCache, setCache, delCache, getAllKeys } from './redis/cache.js';

export default class CacheHandler {
    constructor(options) {
        this.options = options;
    }

    async get(key) {
        return getCache(key);
    }

    async set(key, data, ctx) {
        const tags =  ctx?.tags ?? [`_N_T_${key}`]

        await setCache(key, {
            value: data,
            lastModified: Date.now(),
            tags: tags,
        });
    }

    async revalidateTag(tags) {
        // tags is either a string or an array of strings
        tags = [tags].flat();
        const keys = await getAllKeys('*');

        for (const key of keys) {
            const value = await getCache(key.replace(process.env.REDIS_KEY_PREFIX, ''));
            if (value?.tags?.some((tag) => tags.includes(tag))) {
                await delCache(key.replace(process.env.REDIS_KEY_PREFIX, ''));
            }
        }
    }

    resetRequestCache() {
        // optional per-request memory cache
    }
}