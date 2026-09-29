const express = require('express');
const router = express.Router();
const pool = require('../../config/db'); // fixed path

/**
 * @swagger
 * /api/specs:
 *   get:
 *     summary: Get all specs
 *     tags: [Specs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all specs
 */
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM specs');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/specs:
 *   post:
 *     summary: Create a new spec
 *     tags: [Specs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *               generated_doc:
 *                 type: string
 *     responses:
 *       201:
 *         description: Spec created successfully
 */
router.post('/', async (req, res) => {
  const { name, content, generated_doc } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO specs (name, content, generated_doc) VALUES ($1, $2, $3) RETURNING *',
      [name, content, generated_doc]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/specs/{id}:
 *   put:
 *     summary: Update a spec by ID
 *     tags: [Specs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *               generated_doc:
 *                 type: string
 *     responses:
 *       200:
 *         description: Spec updated successfully
 *       404:
 *         description: Spec not found
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, content, generated_doc } = req.body;
  try {
    const result = await pool.query(
      'UPDATE specs SET name=$1, content=$2, generated_doc=$3 WHERE id=$4 RETURNING *',
      [name, content, generated_doc, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Spec not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/specs/{id}:
 *   delete:
 *     summary: Delete a spec by ID
 *     tags: [Specs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Spec deleted successfully
 *       404:
 *         description: Spec not found
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM specs WHERE id=$1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Spec not found' });
    res.json({ message: 'Spec deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
