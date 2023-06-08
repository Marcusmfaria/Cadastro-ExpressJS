const pool = require('./config')

let operations = {
    list: function() {
        console.log('Listou!')
    },
    save: function(alunos) {},
    update: function(alunos){},
    remove: function(id){},
    findById: function(id){}
}

module.exports = operations

// pool.promise().query('select * from alunos')
// .then(([rows]) =>{
//     console.log(rows);
// })