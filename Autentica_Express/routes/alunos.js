var express = require('express')
var router = express.Router()

var dao = require('../database/dao')

router.get('/', function(request, response) {
    dao.list()
    response.render('alunos/list')
});

router.get('/form', function(request, response) {
    response.render('alunos/form')
});

module.exports = router;