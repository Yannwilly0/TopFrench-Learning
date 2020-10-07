const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const frRoutes = require('./routes/frRoutes');
const enRoutes = require('./routes/enRoutes');
const adminRoutes = require('./routes/adminRoutes');

app = express();
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
//app.use('/js', express.static(__dirname + '/public/js'));
app.use(express.static(path.join(__dirname,'images')));

//app.use(adminRoutes);
app.use(enRoutes);
app.use('/fr',frRoutes);
app.listen(3000);
//mongoConnect(()=>{
  //  app.listen(3000);
//});
