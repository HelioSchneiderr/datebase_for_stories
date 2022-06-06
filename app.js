const express = require("express");
const app = express();
const Handlebars = require("express-handlebars");
var bodyParser = require('body-parser')
const Sequelize = require("sequelize");
const bank = require("./assets/bank");
const post = require('./assets/create')


//template engine
var handle = Handlebars.create({
    defaultLayout: 'main'
});


//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handle.engine);
app.set('view engine', 'handlebars');



app.get("/", function(req, res){
    post.findAll().then(function(posts){
        res.render("home", {posts: posts})
    })
})

app.get("/formulario",function(req, res){
    res.render("formulario");
})

app.post("/add", function(req, res){
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Houve um erro:" + erro)
    })
});

app.get('/deletar/:id', (req, res) => {
    post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Esta postagem não existe!')
    })
})


app.listen(8095,function(){
    console.log("Servidor Online!");
});