const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

// mongoose.connect(process.env.MONGO_URL);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/memo',
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
     useFindAndModify: false
    }
  );

  
require('dotenv').config();
  

//const dotenv = require('dotenv')
//dotenv.config({path:__dirname+'/.env'});

module.exports = mongoose.connection;