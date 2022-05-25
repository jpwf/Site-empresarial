const express = require("express")
const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({
	extended: true
}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/pages", {
	express: server,
	noCache: true,
	watch: true
})

//nunjucks.configure("public/css", {
//	express: server,
//	noCache: true,
//	watch: true
//})

server.get("/", (req, res) =>{
	return res.render("index.html")
})

const port = 3500

server.listen(port, () =>{
	console.log(`Servidor rodando na porta ${port}`)
})
