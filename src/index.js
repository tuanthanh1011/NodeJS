const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 4001


//HTTP logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)
//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/new', (req, res) => {
  res.render('news')
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))