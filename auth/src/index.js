const express = require("express")
const { connectDb } = require("./helpers/db")
const { port, host, db, api_url } = require("./config")
const axios = require("axios")

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


app.get("/api/currentUser", (req, res)=>{
	res.json({
		id: 123,
		email: "isgrammar@gmail.com"
	})
})

app.get("/testwithapidata", (req, res) => {
	axios.get(api_url + "/testapidata").then(response => {
		res.json({
			gotData: response.data
		})
	})
})

connectDb()
	.on("error", console.log)
	.on("disconnect", connectDb)
	.once("open", startServer)

