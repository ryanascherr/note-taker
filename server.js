const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

//set up body parsing , static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));