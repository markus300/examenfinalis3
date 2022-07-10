const mongoose = require('mongoose')
//const DB_URI = `mongodb://localhost:27017/my_app_db`
const DB_URI = `mongodb+srv://markus:GBeXwr8y5V6jK6nK@cluster0.jedlf.mongodb.net/twitter_clone`

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log('Error en la conexion');
        } else {
          console.log('Conexion correcta');
        }
      }
    )
  }
  connect();
};
