const express = require('express')
const app = express()
const port = 5000

app.get('/ProjekRPL', (req, res) => {
  res.send('GACOR KANG')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})