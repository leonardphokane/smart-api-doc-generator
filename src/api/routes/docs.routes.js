const express = require('express');
const router = express.Router();
const docsController = require('../controllers/docs.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/upload', authMiddleware, docsController.uploadSpec);
router.get('/:id', authMiddleware, docsController.getDoc);
router.get('/:id/pdf', authMiddleware, docsController.downloadPDF);

module.exports = router;
