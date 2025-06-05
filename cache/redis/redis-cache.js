import { getRedisClient } from './redis-client.js';
import { withPrefix } from "../config.js";

export async function getCache(key) {
    const redis = getRedisClient();
    const data = await redis.get(withPrefix(key));
    return data ? JSON.parse(data) : null;
}

export async function setCache(key, value) {
    const redis = getRedisClient();
    await redis.set(withPrefix(key), JSON.stringify(value));
}

export async function delCache(key) {
    const redis = getRedisClient();
    await redis.del(withPrefix(key));
}

export async function getAllKeys(pattern = '*') {
    const redis = getRedisClient();
    return redis.keys(withPrefix(pattern));
}