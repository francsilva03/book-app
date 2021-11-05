const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})

.then( db => console.log("Database is connected.", process.env.NODE_ENV))
.catch(err => console.error(err));

