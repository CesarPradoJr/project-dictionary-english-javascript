const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

app.set('view engine', 'ejs');     // Setamos que nossa engine será o ejs
app.use(expressLayouts);           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded());  // Com essa configuração, vamos conseguir parsear o corpo das requisições
app.use(bodyParser.json());  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server ON: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})

