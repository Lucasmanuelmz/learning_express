const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.end('Olá mundo!')
})

function myLogger(req, res, next) {
  console.log('Este é o primeiro console '+req.ip);
  console.log('Este é o segundo log '+res.method);
  console.log('Este é o último log '+ new Date());
  next();
}

app.use(myLogger)

app.listen(3000, () => {
    console.log('O servidor está ativo na porta 3000')
})