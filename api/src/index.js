const express = require("express")
const { connectDb } = require("./helpers/db")
const { port, host, db } = require("./config")
const { mongoose } = require("mongoose")

const app = express()

const postSchema = new mongoose.Schema({
	name: String
})

const Post = mongoose.model("Post", postSchema)


const startServer = () => {
	app.listen(port, () => {
		console.log("Server listening at port " + port + " on host " + host)
		console.log("Our database " + db)

		Post.find()
    .then(posts => {
        console.log(posts, "posts");
    })
    .catch(err => {
        console.error(err);
    });

		const silence = new Post({name: "Silence"})

		silence.save()
    .then(saved_posts => {
			console.log("we saved " , saved_posts)
    })
    .catch(err => {
        console.error(err);
    });


	})
}


app.get("/", (req, res)=>{
	res.send("API working right")}
)


connectDb()
	.on("error", console.log)
	.on("disconnect", connectDb)
	.once("open", startServer)

