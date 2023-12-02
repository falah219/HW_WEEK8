const express = require("express")
const routes = express.Router()
const film = require("./film")
const category = require("./category");



routes.get("/", (req, res)=>{
    res.render("helo")
})

routes.use("/film", film)
routes.use("/category", category)


module.exports = routes