const mongoose = require("mongoose");

const db = {
  app: {
    url: 'mongodb+srv://olusoga:adebayo001@cluster0.c1knmna.mongodb.net/?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    },
  },
};

module.exports = { 
    connectToDatabase: () => {
        const connection = mongoose.connect(db.app.url, db.app.options)
      
      
        let hasConnected = false;
        let isOnline = false;
      
        mongoose.connection.on("error", (err) => {
          console.error("Connection could not be established, error: ", err);
          if (!hasConnected) {
            console.error("Could not connect to DB, exiting.");
            process.exit(1);
          }
        });
      
        mongoose.connection.on("connecting", () =>
          console.info(`DB attempting to connect...`)
        );
      
        mongoose.connection.on("reconnected", () => {
          isOnline = true;
          console.warn(`DB connection has been re-established.`);
        });
      
        mongoose.connection.on("disconnected", () => {
          isOnline = false;
          console.error(`DB connection was lost.`);
        });
      
        mongoose.connection.on("open", () => {
          console.info(`DB connection has been established.`);
          isOnline = hasConnected = true;
        });
      
        return connection;
      }   
} 


// // localhost:27017/usepractice

// const { MongoClient } = require('mongodb')
// let dbConnection
// let url = 'mongodb+srv://olusoga:adebayo001@cluster0.c1knmna.mongodb.net/?retryWrites=true&w=majority'

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect(url)
//             .then((client) => {
//                 dbConnection = client.db()
//                 return cb()
//             })
//             .catch((err) => {
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb: () => dbConnection
// } 