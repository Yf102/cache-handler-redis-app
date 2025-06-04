import redis from './redis-client.js';

const PREFIX = process.env.REDIS_KEY_PREFIX || 'default:';

export async function getCache(key) {
    const data = await redis.get(PREFIX + key);
    return data ? JSON.parse(data) : null;
}

export async function setCache(key, value) {
    await redis.set(PREFIX + key, JSON.stringify(value));
}

export async function delCache(key) {
    await redis.del(PREFIX + key);
}

export async function getAllKeys(pattern = '*') {
    return redis.keys(PREFIX + pattern);
}