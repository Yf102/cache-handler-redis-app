import { LRUCache } from 'lru-cache'

let lru;

export function getLruClient() {
    if(!lru) {
        lru = new LRUCache({
            max: 500, // maximum number of items
            ttl: 1000 * 60 * 60, // 1 hour
        });
    }

    return lru
}