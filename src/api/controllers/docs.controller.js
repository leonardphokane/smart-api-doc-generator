const { setCache, getCache } = require('../services/cache.service');
const Spec = require('../../models/Spec');

exports.getDoc = async (req, res) => {
  const docId = req.params.id;

  // Try cache first
  const cachedDoc = await getCache(`doc:${docId}`);
  if (cachedDoc) {
    return res.json({ source: 'cache', data: cachedDoc });
  }

  // Fallback to DB
  const doc = await Spec.findById(docId);
  await setCache(`doc:${docId}`, doc);
  res.json({ source: 'db', data: doc });
};
