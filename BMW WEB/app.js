const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.get('/Home', (req, res) => {
    res.render('Home.ejs')
});

app.get('/About', (req, res) => {
    res.render('About.ejs')
});

app.get('/Buy', (req, res) => {
    res.render('Buy.ejs')
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});