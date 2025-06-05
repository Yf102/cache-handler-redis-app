import { getLruClient } from "./lru-client.js";
import { withPrefix } from "../config.js";

export function getCache(key) {
    const lru = getLruClient();
    return lru.get(withPrefix(key));
}

export function setCache(key, value) {
    const lru = getLruClient();
    lru.set(withPrefix(key), value);
}

export function delCache(key) {
    const lru = getLruClient();

    console.info('DELETING LRU CACHE')
    lru.delete(withPrefix(key));
}

export function getAllKeys(pattern = '*') {
    const lru = getLruClient();
    const allKeys = lru.keys();
    if (pattern === '*') return allKeys;

    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return allKeys.filter((key) => regex.test(key));
}