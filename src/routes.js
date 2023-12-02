// Import the 'express' module to create a router
import express from 'express';

// Create an instance of the Express router
const router = express.Router();

// Import controller functions from './controllers/ClienteController.js'
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

// Define routes and associate them with the corresponding controller functions
router.get('/clientes', buscarTodos); // Route to fetch all clients
router.get('/cliente/:Id_Cliente', buscarUm); // Route to fetch a specific client by ID
router.post('/cliente', inserir); // Route to insert a new client
router.put('/cliente/:Id_Cliente', alterar); // Route to update a client by ID
router.delete('/cliente/:Id_Cliente', excluir); // Route to delete a client by ID

// Export the router instance as the default export of this module
export { router as default };
