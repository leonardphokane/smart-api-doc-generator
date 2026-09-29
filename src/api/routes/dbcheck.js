const express = require('express');
const router = express.Router();
const pool = require('../../config/db');

/**
 * @swagger
 * /api/db-check:
 *   get:
 *     summary: Check database connectivity
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Database connection successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 connected:
 *                   type: boolean
 *                   example: true
 *                 time:
 *                   type: string
 *                   example: 2026-09-23T18:54:00.000Z
 *       500:
 *         description: Database connection failed
 */
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ connected: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message });
  }
});

module.exports = router;
