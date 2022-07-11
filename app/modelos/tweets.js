const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const TweetScheme = new mongoose.Schema(
  {
    /*
    id:{
      type: Number
    },

    */
    nombre: {
      type: String
    },
    usuario: {
      type: String
    },
    avatar: {
      type: String
    },
    comentario: {
      type: String
    },
    favorito: {
      type: Boolean,
      default: false
    },
    cantfavorito: {
      type: Number,
      default: 0
    },
    whofavorito: [String],
    retweet: {
      type: Boolean,
      default: false
    },
    cantretweet: {
      type: Number,
      default: 0
    },
    whoretweet: [String]
  },{
    versionKey: false,
    timestamps: true
  }
)

TweetScheme.plugin(AutoIncrement, {inc_field: 'idt'});

module.exports = mongoose.model('tweets', TweetScheme);
