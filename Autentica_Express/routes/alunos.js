var express = require('express');
const { render } = require('../app');
var router = express.Router()
var dao = require('../database/dao')


router.get('/', function(request, response) {
    dao.list().then( ([rows]) => {
        response.render('alunos/list', { alunos: rows})
    }).catch( err => {
        console.log(err)
        response.render('alunos/list', { alunos: [] })

    })
});

router.post('/delete', function(request, response){
    dao.remove(request.body.id)
    .then( ({rows}) =>{
        request.flash('sucess', 'Aluno excluído.')
        response.redirect('/alunos')
    }).catch(err =>{
        console.log(err)
        request.flash('error', 'Ocorreu um erro.')
        response.redirect('/alunos')
    })
})

router.get('/form', function(request, response) {
    response.render('alunos/form')
});

module.exports = router;