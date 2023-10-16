const path = require('path');
const express = require('express');
const parser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shopington');
const expressApp = express();

expressApp.use(parser.urlencoded({extended: false}));
expressApp.use(express.static(path.join(__dirname,'public')))

expressApp.use('/admin',adminRoutes);

expressApp.use(shopRoutes);

expressApp.use((req,res,next) => {
    res.sendFile(path.join(__dirname, 'views','not-found.html'))
})

expressApp.listen(5000)