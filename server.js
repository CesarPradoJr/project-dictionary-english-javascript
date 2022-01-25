const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;
const sqldb = require('./connect_db').db;
const scraping = require('./scraping');
const cors = require('cors');
var fs=require('fs');
var data=fs.readFileSync('grammar.json', 'utf8');
var grammar=JSON.parse(data);

app.set('view engine', 'ejs');     // Setamos que nossa engine será o ejs
app.use(expressLayouts);           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded());  // Com essa configuração, vamos conseguir parsear o corpo das requisições
app.use(bodyParser.json());  // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(cors())
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server ON: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get("/result", (request, response) => {
    sql = "SELECT * FROM Translate WHERE Learned = 0 ORDER BY random() LIMIT 1";
    sqldb.all(sql, function (err, rows) {
      if (rows) {
        var result = JSON.stringify(rows);
        var result_ok = JSON.parse(result);
        response.status(200).json({ result_ok });
        
      }
      if (err) {
        response.status(500).json({ err: err });
      }
      console.log(rows);
    });
  });


app.get('/grammar',sendAll);
 
 function sendAll(request,response){
 response.send(grammar);

 }
  