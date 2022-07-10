const express = require('express');
const router = express.Router()
const path = 'user'
const controller = require('../controladores/user')
const conexionBD = require('../../config/db');
/**
Ruta /user GET
*/
router.get(
  `/${path}`,
  controller.getData
)

router.post(
`/${path}`,
  controller.insertData
  /*(req, res) => {
    const data = req.body;
    console.log("datax", data);
    res.send({data})
  }*/
)

router.get(`/${path}/:id`,controller.getDataById)

router.put(`/${path}/:id`, controller.updateSingle)
router.delete(`/${path}/:id`, controller.deleteData)

/*
router.get(
  `/${path}_bd`,
  async(req, res) => {
    try {
      const conexion = new conexionBD();
      await conexion.conectarse();
      const resultados = await conexion.db.collection('tweets').find({}).toArray(); // query
      conexion.desconectarse();
      // print res of console
      console.log(resultados);
      // print to the screen
      res.send(resultados);
    } catch (e) {
      console.log(e);
    }
  }
)

*/

module.exports = router
