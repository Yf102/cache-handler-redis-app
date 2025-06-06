import { withPrefix } from '../config.js'
import { redis } from './redis-client.js'

export async function getCache(key) {
  const data = await redis.get(withPrefix(key))
  return data ? JSON.parse(data) : null
}

export async function setCache(key, value) {
  await redis.set(withPrefix(key), JSON.stringify(value))
}

export async function delCache(key) {
  await redis.del(withPrefix(key))
}

export async function getAllKeys(pattern = '*') {
  return redis.keys(withPrefix(pattern))
}
