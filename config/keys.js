// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'prodcution'){
  //production version
  googleClientI =  process.env.GOOGLE_CLIENT_ID;
  googleClientSecret =  process.env.GOOGLE_CLIENT_SECRET;
  mongoURI = process.env.MONGO_URI;
  cookieKey = process.env.COOKIEKEY;
  // module.exports = require('./prod');
}
// else {
//   //development version
//   module.exports = require('./dev');
// }
// prod.DB :mongodb+srv://adminUser:Hanh5336!@cluster0.1nuci.mongodb.net/<dbname>?retryWrites=true&w=majority
