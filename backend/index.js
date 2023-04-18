// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require("./db");
// mongoDB();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.json());
// app.use('/api', require("./Routes/CreateUser"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const User = require("./models/User")
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
