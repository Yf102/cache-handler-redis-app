export const PREFIX = process.env.REDIS_KEY_PREFIX || 'default:'

export function withPrefix(key) {
  return `${PREFIX}${key}`
}

export function getRawKey(key) {
  return key.replace(process.env.REDIS_KEY_PREFIX || '', '')
}
