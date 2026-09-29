// src/api/services/cache.service.js
const redisClient = require('../../config/redis');

exports.setCache = async (key, value, ttl = 3600) => {
  try {
    await redisClient.set(key, JSON.stringify(value), { EX: ttl });
    return `Cached ${key}`;
  } catch (err) {
    console.error(`❌ Error caching ${key}:`, err);
    throw err;
  }
};

exports.getCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error(`❌ Error retrieving ${key}:`, err);
    throw err;
  }
};

exports.deleteCache = async (key) => {
  try {
    await redisClient.del(key);
    return `Deleted cache for ${key}`;
  } catch (err) {
    console.error(`❌ Error deleting ${key}:`, err);
    throw err;
  }
};
