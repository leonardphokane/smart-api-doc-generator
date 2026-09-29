const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const docsRoutes = require('./api/routes/docs.routes');
const authRoutes = require('./api/routes/auth.routes');
const usersRoutes = require('./api/routes/users');
const specsRoutes = require('./api/routes/specs');
const dbCheckRoutes = require('./api/routes/dbcheck'); 
const redisCheckRoutes = require('./api/routes/redischeck'); // ✅ new Redis health-check

// Middleware
const authenticateToken = require('./api/middleware/auth.middleware');

app.use('/api/docs', docsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

// Protect specs with JWT
app.use('/api/specs', authenticateToken, specsRoutes);

// Health-check routes
app.use('/api/db-check', dbCheckRoutes);
app.use('/api/redis-check', redisCheckRoutes);

// Swagger setup with JWT security definition
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { 
      title: 'Smart API Doc Generator', 
      version: '1.0.0',
      description: 'API documentation with JWT authentication enabled'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./swagger.yaml', './src/api/routes/*.js'], // include route files for JSDoc annotations
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
