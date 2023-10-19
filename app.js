const path = require('path');
const express = require('express');
const parser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shopington');
const errorController = require('./controllers/error')
const expressApp = express();

expressApp.set('view engine','pug');
expressApp.set('views','views');

expressApp.use(parser.urlencoded({extended: false}));
expressApp.use(express.static(path.join(__dirname,'public')))

expressApp.use('/admin',adminRoutes);

expressApp.use(shopRoutes);

expressApp.use(errorController.getNotFound);

expressApp.listen(5000)