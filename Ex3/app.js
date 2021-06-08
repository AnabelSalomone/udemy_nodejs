const express = require("express");
const path = require('path');

const app = express();
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
//By default it doesn't parse the body of the response
//So we need to do this to ensure it does
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))) //it serves statically the css files

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000);
