const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('./public'));

require('./routes/routes')(app);

// Listen route
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});