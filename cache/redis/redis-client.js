import Redis from 'ioredis';

let redis;

export function getRedisClient() {
    if (!redis) {
        redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

        redis.on('connect', () => {
            console.log('[Redis] Connected');
        });

        redis.on('error', (err) => {
            // console.warn('Redis error:', err);
        });
    }

    return redis;
}