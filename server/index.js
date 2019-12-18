const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middle ware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
const posts1 = require('./routes/api/posts1');
const uyeler = require('./routes/api/uye');
const slide = require('./routes/api/slide');

app.use('/api/posts',posts)
app.use('/api/posts1',posts1)
app.use('/api/uye',uyeler)
app.use('/api/slide',slide)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))