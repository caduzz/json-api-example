const cors = require('cors');

const express = require('express');
const routes = require('./routes');

// CRIAR O APP
const app = express()

// APLICAR MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(routes);

// MANDAR O SERVIDOR RODAR
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Online - ✅");
});