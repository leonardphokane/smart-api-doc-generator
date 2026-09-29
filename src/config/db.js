// Load environment variables
require('dotenv').config();

// PostgreSQL connection
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
