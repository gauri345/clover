const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./api');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

// app configs.
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());
app.use('/todos', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

//initialize the app.
async function initialize() {
    app.listen(PORT);
}

initialize()
    .finally(
        () => console.log(`app started on port:${PORT}`)
    );