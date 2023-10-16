const expressApp = require('express');
const parser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shopington');
const expressApp = expressApp();

expressApp.use(parser.urlencoded({extended: false}));

expressApp.use('/admin',adminRoutes);

expressApp.use(shopRoutes);

expressApp.use((req,res,next) => {
    res.status(404).send('<h1>NOT FOUND</h1>')
})

expressApp.listen(5000)