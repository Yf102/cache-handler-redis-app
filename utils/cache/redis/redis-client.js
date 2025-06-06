import Redis from 'ioredis'

let connected = false
let redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
  reconnectOnError: (err) => {
    return true // Always try to reconnect
  },
  retryStrategy: (times) => {
    // Set delay for retry and cap at 2 seconds
    return Math.min(times * 100, 2000)
  },
})

redis.on('connect', () => {
  connected = true
  console.info('[Redis] Connected.')
})

redis.on('ready', () => {
  connected = true
  console.info('[Redis] Ready.')
})

redis.on('error', (err) => {
  connected = false
  // console.log('[Redis Error]')
})

redis.on('end', () => {
  connected = false
  console.warn('[Redis] Disconnected.')
})

export { connected, redis }
