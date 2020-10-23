const express = require('express');
const app = express();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index',{});
});


app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});