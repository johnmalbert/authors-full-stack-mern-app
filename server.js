const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//something with routes
require('./server/routes/routes')(app);

app.listen(8000, () => {console.log("Listening on port 8000!")});