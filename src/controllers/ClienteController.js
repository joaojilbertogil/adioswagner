// Importing CRUD operations from '../services/ClienteService.js'
import { buscarTodos as _buscarTodos, 
    buscarUm as _buscarUm, 
    inserir as _inserir, 
    alterar as _alterar, 
    excluir as _excluir } from '../services/ClienteService.js';

// Function to retrieve all clients and format the response
export async function buscarTodos(req, res) {
const json = { error: '', result: [] };

// Retrieve all clients from the service
const clientes = await _buscarTodos();

// Format the response with selected client details
for (let i in clientes) {
   json.result.push({
       codigo: clientes[i].Id_Cliente,
       nome: clientes[i].Nome_Cliente,
       cidade: clientes[i].Cidade,
       estado: clientes[i].Estado,
       pais: clientes[i].Pais
   });
}

// Send the formatted response as JSON
res.json(json);
}

// Function to retrieve a specific client by Id_Cliente and format the response
export async function buscarUm(req, res) {
let json = { error: '', result: {} };

// Extract Id_Cliente from request parameters
let id_cliente = req.params.Id_Cliente;

// Retrieve a specific client from the service
let cliente = await _buscarUm(id_cliente);

// If client exists, format the response
if (cliente) {
   json.result = cliente;
}

// Send the formatted response as JSON
res.json(json);
}

// Function to insert a new client and format the response
export async function inserir(req, res) {
let json = { error: '', result: {} };

// Extract client details from request body
let codigo = req.body.Id_Cliente;
let nome = req.body.Nome_Cliente;
let segmento = req.body.Segmento;
let cidade = req.body.Cidade;
let estado = req.body.Estado;
let pais = req.body.Pais;
let mercado = req.body.Mercado;
let regiao = req.body.Regiao;

// If all required details are present, insert the client and format the response
if (codigo && nome && segmento && cidade && estado && pais
   && mercado && regiao) {
   let cliente = await _inserir(codigo, nome, segmento, cidade,
       estado, pais, mercado, regiao);
   json.result = {
       cliente: codigo,
       nome,
       segmento,
       cidade,
       estado,
       pais,
       mercado,
       regiao
   };
}
else {
   json.error = 'Erro no envio dos dados';
}

// Send the formatted response as JSON
res.json(json);
}

// Function to update an existing client and format the response
export async function alterar(req, res) {
let json = { error: '', result: {} };

// Extract client details from request parameters and body
let codigo = req.params.Id_Cliente;
let nome = req.body.Nome_Cliente;
let segmento = req.body.Segmento;
let cidade = req.body.Cidade;
let estado = req.body.Estado;
let pais = req.body.Pais;
let mercado = req.body.Mercado;
let regiao = req.body.Regiao;

// If all required details are present, update the client and format the response
if (codigo && nome && segmento && cidade && estado && pais
   && mercado && regiao) {
   await _alterar(codigo, nome, segmento, cidade,
       estado, pais, mercado, regiao);
   json.result = {
       codigo,
       nome,
       segmento,
       cidade,
       estado,
       pais,
       mercado,
       regiao
   };
}
else {
   json.error = 'Erro no envio dos dados';
}

// Send the formatted response as JSON
res.json(json);
}

// Function to delete a client by Id_Cliente and format the response
export async function excluir(req, res) {
let json = { error: '', result: {} };

// Extract Id_Cliente from request parameters
let id_cliente = req.params.Id_Cliente;

// Delete the client and format the response
let cliente = await _excluir(id_cliente);

// If client exists, format the response
if (cliente) {
   json.result = cliente;
}

// Send the formatted response as JSON
res.json(json);
}
