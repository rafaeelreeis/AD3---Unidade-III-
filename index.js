const express = require('express')
const app = express()
const cors = require('cors')


app.use(express.json())

app.use(cors({
    origin: '*'
}))

app.get('/',(req, res) => {
        res.send('Olá Mundo! ');
});

app.get('/sobre',(req, res) => {
        res.send('Esta é a página sobre ')
})

app.use('/', require('./routes'))

app.get('/professores', (req, res) => {
//carrega o arquivo professores.json
const professores = require('./public/professores.json')

//Envia o arquivo JSON como resposta
res.json(professores)
})

app.post('/professores', (req, res) => {
        res.send('A requisição POST para porfessores/ chegou'+req.body.nomeProfessor)

})


app.put('/professores',(req,res)=>{
        console.log(req.body)
        res.send('A requisição PUT para professores/ chegou: '+req.body.codigo)
})

app.delete('/professores',(req,res) => {
        console.log(req.body)
        res.send('A requisição DELETE para professores/ chegou: '+req.body.codigo)
})

app.get('/cursos', (req, res) => {
  const cursos = require('./public/cursos.json');
  res.json(cursos);
});


app.post('/cursos', (req, res) => {
  res.send('A requisição POST para /cursos chegou: ' + req.body.nome);
});


app.put('/cursos', (req, res) => {
  console.log(req.body);
  res.send('A requisição PUT para /cursos chegou: ' + req.body.id);
});


app.delete('/cursos', (req, res) => {
  console.log(req.body);
  res.send('A requisição DELETE para /cursos chegou: ' + req.body.id);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});