const pool = require('../src/config/db');

async function seed() {
  try {
    // Create tables if they don't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS specs (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        generated_doc TEXT
      );
    `);

    // Insert sample user
    await pool.query(`
      INSERT INTO users (email, password)
      VALUES ('test@example.com', 'hashedpassword123')
      ON CONFLICT (email) DO NOTHING;
    `);

    // Insert sample API spec
    await pool.query(`
      INSERT INTO specs (name, content, generated_doc)
      VALUES ('Sample API', '{"openapi":"3.0.0","info":{"title":"Sample","version":"1.0.0"}}', 'Generated documentation here')
      ON CONFLICT DO NOTHING;
    `);

    console.log('✅ Seed data inserted successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
}

seed();
