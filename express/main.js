const express = require('express');
const app = express();
const port = 3000;


// 2
app.get('/', function(req, res){
    res.send('Hello');
});


// 3
app.get('/about', function(req, res){
res.send('<h1>Інформація про студента</h1>');
});


// 4
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('Error');
});

app.listen(port, function(){
    console.log('running');
});