const create = require("./bank");

const post = create.sequelize.define(`posts`, {
    titulo: {
        type: create.Sequelize.STRING
    },
    conteudo: {
        type: create.Sequelize.TEXT
    }
})
module.exports = post;
//post.sync({force:true})