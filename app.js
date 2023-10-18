const path = require('path');
const express = require('express');
const parser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shopington');
const expressApp = express();

expressApp.set('view engine','pug');
expressApp.set('views','views');

expressApp.use(parser.urlencoded({extended: false}));
expressApp.use(express.static(path.join(__dirname,'public')))

expressApp.use('/admin',adminData.routes);

expressApp.use(shopRoutes);

expressApp.use((req,res,next) => {
    res.render('not-found')
})

expressApp.listen(5000)