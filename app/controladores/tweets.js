const model = require('../modelos/tweets')

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
}

exports.getData = (req, res) => {
  /*
  res.send({
    data: "Esto viene desde RUTA"
  })
  */
  const nombre  = req.query
  console.log('query nombre', nombre);
  model.find({
    // aqui puede ir un query
  }, (err, docs) => {
    res.send({
      docs:docs // o simplmente docs
    })
  })

}

exports.getDataById = (req, res) =>{
    const { id } = req.params
    model.find({
      id: id
    }, (err, docs) => {
      res.send({
        docs: docs
      })
    })
}

exports.insertData = (req, res) => {
  const data = req.body;
  console.log("data", data);
  model.create(data, (err, docs) => {
    if (err) {
      console.log('error', err);
      res.send({
        error: 'Error'
      }, 422)
    }else {
      res.send({data: docs})
    }

  })
  //res.send({data})
}



exports.updateSingle = (req, res) => {
  const {idt} = req.params
  const body = req.body
  console.log('id',idt);
  console.log('body',body);

  model.updateOne(
    {
      idt: idt
    },
    body,
    (err, docs) => {
      if(err){
        console.log('mi error fue ', err);
        res.send({error: err})
      }
      res.send({
      docs: docs
      })
  })

}



exports.deleteData = (req, res) => {
  const { id } =req.params;
  model.deleteOne(
    {id: id},
    (err, docs) => {
      res.send({
        test: 'eliminado'
      })
    })
  }
