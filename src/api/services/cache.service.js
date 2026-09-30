// src/api/services/cache.service.js
// Redis disabled: safe fallback stubs

exports.setCache = async (key, value, ttl = 3600) => {
  console.log(`⚠️ Redis disabled — skipping cache set for ${key}`);
  return null;
};

exports.getCache = async (key) => {
  console.log(`⚠️ Redis disabled — skipping cache get for ${key}`);
  return null;
};

exports.deleteCache = async (key) => {
  console.log(`⚠️ Redis disabled — skipping cache delete for ${key}`);
  return null;
};
