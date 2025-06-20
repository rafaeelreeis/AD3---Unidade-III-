const express = require('express');
const router = express.Router();


const cursos = require('../public/cursos.json');


router.get('/', (req, res) => {
  res.json(cursos);
});


router.get('/:id', (req, res) => {
  const curso = cursos.find(c => c.id == req.params.id);
  if (curso) {
    res.json(curso);
  } else {
    res.status(404).send('Curso não encontrado.');
  }
});


router.post('/', (req, res) => {
  console.log(req.body);
  res.send('A requisição POST para cursos/ chegou: ' + req.body.nome);
});


router.put('/:id', (req, res) => {
  console.log(req.body);
  res.send('A requisição PUT para cursos/ chegou: ' + req.params.id);
});


router.delete('/:id', (req, res) => {
  console.log(req.body);
  res.send('A requisição DELETE para cursos/ chegou: ' + req.params.id);
});

module.exports = router;