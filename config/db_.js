/*
const { MongoClient } = require("mongodb");

console.log(MongoClient);
*/

const { MongoClient } = require("mongodb");
//clase conexion
class conexionBD {
  cliente = null;
  db = null;
  constructor(){
    //configurar conexión
    this.cliente = new MongoClient('mongodb://localhost:27017');
  };
  async conectarse(){//conectarse y elegir db por defecto
    await this.cliente.connect();
    this.db = await this.cliente.db('prueba1');
  };
  async desconectarse(){
    await this.cliente.close();
  };
};

module.exports = conexionBD;
