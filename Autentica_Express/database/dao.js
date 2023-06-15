const pool = require('./config')

let operations = {
    list: function(){
        return pool.promise().query('select * from alunos')
    },
    save: function(aluno){},
    findById: function(id){},
    update: function(aluno){},
    remove: function(id){
        return pool.promise().execute('delete from alunos where id = ?', [id ])
    }
}

module.exports = operations

// pool.promise().query('select * from alunos')
// .then(([rows]) =>{
//     console.log(rows);
// })