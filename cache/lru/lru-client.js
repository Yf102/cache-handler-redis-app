import { LRUCache } from 'lru-cache'

let lru = new LRUCache({
    max: 500, // maximum number of items
    ttl: 1000 * 60 * 60, // 1 hour
});

export { lru }