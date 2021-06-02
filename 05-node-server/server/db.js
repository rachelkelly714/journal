const Sequelize = require('sequelize');

//Option 1: passing parameters separately//

const sequelize = new Sequelize ('journal-walkthrough', 'postgres', 'Ifanandmia21',{
host: 'localhost',
dialect: 'postgres'
}); 

sequelize
.authenticate()
.then(() => {
    console.log('Verifying connection...connected');
})
.catch(err => {
    console.error('Error!', err);
});

module.exports = sequelize