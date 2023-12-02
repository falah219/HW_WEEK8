const express = require('express')
const routes = require("./routes")
const app = express()
const port = 3000




app.use(routes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})