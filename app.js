const express = require('express');
const path = require("path");

const app = express();

const dirname = path.resolve();
app.use(express.static(dirname + '/public'));

const mainRoutes = require('./src/routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});