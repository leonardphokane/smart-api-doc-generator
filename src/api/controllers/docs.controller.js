const { setCache, getCache } = require('../services/cache.service');
const Spec = require('../../models/Spec');

// Upload a new spec
exports.uploadSpec = async (req, res) => {
  try {
    const { name, content } = req.body;
    const spec = await Spec.create({ name, content });
    res.status(201).json({ message: 'Spec uploaded successfully', spec });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get documentation by ID
exports.getDoc = async (req, res) => {
  const docId = req.params.id;

  try {
    // Try cache first
    const cachedDoc = await getCache(`doc:${docId}`);
    if (cachedDoc) {
      return res.json({ source: 'cache', data: cachedDoc });
    }

    // Fallback to DB
    const doc = await Spec.findById(docId);
    if (!doc) {
      return res.status(404).json({ error: 'Document not found' });
    }

    await setCache(`doc:${docId}`, doc);
    res.json({ source: 'db', data: doc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Download PDF version
exports.downloadPDF = async (req, res) => {
  const docId = req.params.id;

  try {
    // For now, just return a placeholder
    res.json({ docId, pdf: 'PDF download link here' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
