const Sequelize = require("sequelize")

const sequelize = new Sequelize(`historias`, `root`, `Luffy2781`,{
    host: `localhost`,
    dialect: `mysql`,
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

sequelize.authenticate().then(function(){
    console.log("conectou")
}).catch(function(error){
    console.log("Não foi" + error)
});

