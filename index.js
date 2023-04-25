const express = require('express');

const app = express();
const port = process.env.PORT || 3002

const produtos = require("./src/produtos/produtos.json")

app.get('/',(request,response)=>{
    return response.json({message:'Server is up'});
})

app.get('/atualizou',(request,response)=>{
    return response.json({message:'Commit atualizou'});
})

app.get('/produtos',(req,res)=>{
    return res.json(produtos);
})

app.post('/teste',(request,response)=>{
    const {name,date} = request.body;
    return response.json({name,date});
})



app.listen(port, () => {
    console.log("Servidor está rodando ... aws")
})