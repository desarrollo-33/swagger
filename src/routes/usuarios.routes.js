const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarios.controller');

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener lista de usuarios
 *     description: Obtiene una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Éxito. Retorna la lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del usuario.
 *                   nombre:
 *                     type: string
 *                     description: Nombre del usuario.
 *                 example:
 *                   - id: 1
 *                     nombre: Usuario 1
 *                   - id: 2
 *                     nombre: Usuario 2
 *                   - id: 3
 *                     nombre: Usuario 3
 */
router.get('/', usuariosController.obtenerUsuarios);

module.exports = router;
