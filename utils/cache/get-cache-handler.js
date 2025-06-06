import * as LruCache from './lru/lru-cache.js'
import * as RedisCache from './redis/redis-cache.js'
import { connected as RedisConnected } from './redis/redis-client.js'

let handler = LruCache
let useRedis = false

setInterval(() => {
  if (RedisConnected && !useRedis) {
    console.log('[CacheHandler] Redis recovered, switching back to Redis.')
    useRedis = true
    handler = RedisCache
  } else if (!RedisConnected && useRedis) {
    console.warn('[CacheHandler] Redis lost, switching to LRU.')
    useRedis = false
    handler = LruCache
  }
}, 5000)

export function getCacheHandler() {
  return handler
}
