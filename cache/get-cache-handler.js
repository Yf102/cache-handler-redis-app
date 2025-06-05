import * as RedisCache from './redis/redis-cache.js';
import * as LruCache from './lru/lru-cache.js';
import { getRedisClient } from './redis/redis-client.js';

let handler = LruCache;

const redis = getRedisClient()
let useRedis = false;

// Try to connect once at startup
try {
    // TODO: Very slow
    await redis.ping();
    console.log('[CacheHandler] Connected to Redis');
    useRedis = true;
    handler = RedisCache;
} catch (err) {
    console.warn('[CacheHandler] Redis unavailable at startup, falling back to LRU.');
}

// Start health check
setInterval(async () => {
    try {
        await redis.ping();
        if (!useRedis) {
            console.log('[CacheHandler] Redis is back, switching to Redis.');
            useRedis = true;
            handler = RedisCache;
        }
    } catch (err) {
        if (useRedis) {
            console.warn('[CacheHandler] Redis down, switching to LRU.');
            useRedis = false;
            handler = LruCache;
        }
    }
}, 5000);

export function getCacheHandler() {
    return handler;
}