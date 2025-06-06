import { lru } from "./lru-client.js";
import { withPrefix } from "../config.js";

export function getCache(key) {
    return lru.get(withPrefix(key));
}

export function setCache(key, value) {
    lru.set(withPrefix(key), value);
}

export function delCache(key) {
    lru.delete(withPrefix(key));
}

export function getAllKeys(pattern = '*') {
    let allKeys = [...lru.keys()];
    if (pattern === '*') return allKeys;

    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return allKeys.filter((key) => regex.test(key));
}