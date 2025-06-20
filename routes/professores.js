const express = require('express')
const router = express.Router()


const professores = require('../public/professores.json')
router.get('/', (req,res) =>{
//carrega o arquivo professores.json

//Envia o arquivo JSON como resposta
res.json(professores)
})

router.get('/:id',(req, res)=>{
      const professor = professores[req.params.id]
      res.json(professores)
})

router.post('/',(req, res)=>{
      console.log(req.body) 
      res.send('A requisição POST para professores/ chegou:'+req.body.nomeProfessor)
      })

router.put('/:id',(req, res)=>{
      console.log(req.body) 
      res.send('A requisição PUT para professores/ chegou:'+req.params.id)
      })

router.delete('/:id',(req, res)=>{
      console.log(req.body) 
      res.send('A requisição DELETE para professores/ chegou:'+req.params.id)
      })

module.exports = router
