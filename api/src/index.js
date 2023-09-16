const express = require("express")

const app = express()

const port = process.env.PORT

const host = process.env.HOST


app.get("/", (req, res)=> [
	res.send("API working right")
])


app.listen(port, () => {
	console.log("Server listening at port " + port + " on host " + host)
})
