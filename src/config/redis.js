// src/config/redis.js
const { createClient } = require('redis');

let client;

if (process.env.REDIS_URL) {
  client = createClient({ url: process.env.REDIS_URL });
  client.on('error', (err) => {
    console.error('❌ Redis Client Error:', err);
  });

  (async () => {
    try {
      await client.connect();
      console.log('✅ Redis connected successfully');
    } catch (err) {
      console.error('❌ Redis connection failed, caching disabled:', err);
    }
  })();
} else {
  console.log('⚠️ Redis disabled — no REDIS_URL set');
  client = {
    set: async () => null,
    get: async () => null,
    del: async () => null,
  };
}

module.exports = client;
