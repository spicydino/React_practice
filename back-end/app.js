const express = require('express');
const loginRoute = require('./routes/login');
const cors = require('cors');
const { default: dbConnect } = require('./database/db');
const app = express();



app.get('/', (req, res) => {
  res.send("Hello, World!");
});
app.use(cors());
app.use(express.json());
app.use('/',loginRoute);



app.listen(3000, () => {
    dbConnect();
  console.log("Server started at port 3000");
});
