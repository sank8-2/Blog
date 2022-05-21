const express = require('express'); //returns function

// express app
const app = express();

// listen for express
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
   // res.send('<p>About page</p>');
   res.sendFile('./views/about.html', {root: __dirname});
});

// redirects 
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// 404 pages
app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname});
})