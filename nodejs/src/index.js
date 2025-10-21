const express = require("express");
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
    //res.send('Hello Epic World!')
    res.render('index', { title: 'My Awesome App', message: 'Hello from EJS!' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
