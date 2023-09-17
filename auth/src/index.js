const express = require("express")
const { connectDb } = require("./helpers/db")
const { port, host, db } = require("./config")

const app = express()


const startServer = () => {
	app.listen(port, () => {
		console.log("Server listening at port " + port + " on host " + host)
		console.log("Our database " + db)
	})
}


app.get("/", (req, res)=>{
	res.send("Auth server re stable up")}
)


connectDb()
	.on("error", console.log)
	.on("disconnect", connectDb)
	.once("open", startServer)

