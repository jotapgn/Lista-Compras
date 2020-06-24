module.exports = {
    dialect: 'mariadb',
    host: 'webbetim202001.mysql.dbass.com.br',
    username: 'webbetim202001',
    password: 'betim202001',
    databse: 'webbetim202001',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define:{
        timestamps: true, // cria campo de hora de inclusão e hora de alteração;
        underscored: true,
        underscoredAll: true, // já cria com unrderline chave estrangeira;
    }

};