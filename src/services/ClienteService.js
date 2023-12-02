// Importa o módulo 'db' de '../db.js' para conectar ao banco de dados
import db from '../db.js';

// Função para recuperar todos os clientes do banco de dados
export function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes', (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}

// Função para recuperar um cliente específico por Id_Cliente do banco de dados
export function buscarUm(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}

// Função para inserir um novo cliente no banco de dados
export function inserir(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        db.query('INSERT INTO clientes (Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertId_Cliente);
            }
        );
    });
}

// Função para atualizar um cliente existente no banco de dados
export function alterar(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {

        db.query('UPDATE clientes SET Nome_Cliente= ?, Segmento = ?, Cidade = ?, Estado = ?, Pais = ?, Mercado = ?, Regiao = ? Where Id_Cliente = ? ',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            }
        );
    });
}

// Função para excluir um cliente por Id_Cliente do banco de dados
export function excluir(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('DELETE FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}
