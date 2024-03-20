const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const usuariosRoutes = require('./src/routes/usuarios.routes');

const app = express();

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Ejemplo con Swagger',
        version: '1.0.0',
        description: 'Una API de ejemplo con Swagger para obtener una lista de usuarios.'
      },
    },
    apis: ['./src/routes/*.js'], // Corregido para que coincida con la ubicación real de tus archivos de rutas
  };
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Ruta para la documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
