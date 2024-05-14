const express = require('express')
const app = express()
PORT = 3000

app.get('/', (req,res)=> (res.send('Recuperación')))
app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})