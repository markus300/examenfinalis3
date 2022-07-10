const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const UserScheme = new mongoose.Schema(
  {
    /*
    id:{
      type: Number
    },

    */
    name: {
      type: String
    },
    usuario: {
      type: String
    },
    avatar: {
      type: String
    },
  },{
    versionKey: false,
    timestamps: true
  }
)

UserScheme.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('user', UserScheme);
