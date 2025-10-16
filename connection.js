const mongoose = require('mongoose')

async function dbConnection() {
    try
    { 
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connected to DB");
    }
    catch(err)
    {
        console.log("Unable to connect DB", err)
    }
    
}

module.exports = {dbConnection};
