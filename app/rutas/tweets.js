const express = require('express');
const router = express.Router()
const path = 'tweets'
const controller = require('../controladores/tweets')
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

router.put(`/${path}/:idt`, controller.updateSingle)

router.delete(`/${path}/:id`, controller.deleteData)

module.exports = router
