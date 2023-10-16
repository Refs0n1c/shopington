const express = require('express');
const parser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shopington');
const app = express();

app.use(parser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(5000)