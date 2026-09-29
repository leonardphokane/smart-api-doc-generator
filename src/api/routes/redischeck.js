// src/api/routes/redischeck.js
const express = require('express');
const router = express.Router();
const redisClient = require('../../config/redis');

/**
 * @swagger
 * /api/redis-check:
 *   get:
 *     summary: Check Redis connectivity
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Redis connection successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 connected:
 *                   type: boolean
 *                   example: true
 *                 pong:
 *                   type: string
 *                   example: PONG
 *       500:
 *         description: Redis connection failed
 */
router.get('/', async (req, res) => {
  try {
    const pong = await redisClient.ping();
    res.json({ connected: true, pong });
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message });
  }
});

module.exports = router;
