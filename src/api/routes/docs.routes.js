const express = require('express');
const router = express.Router();
const docsController = require('../controllers/docs.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Upload a new spec
router.post('/upload', authMiddleware, docsController.uploadSpec);

// Get generated documentation by ID
router.get('/:id', authMiddleware, docsController.getDoc);

// Download PDF version of documentation
router.get('/:id/pdf', authMiddleware, docsController.downloadPDF);

module.exports = router;
