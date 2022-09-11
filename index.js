const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("App listening on port 3000");
});

app.get('/', (req, res) => {
    // res.json({
    //     name: 'Greg Lim'
    // });
    res.sendFile(path.resolve(__dirname, 'index.html'));
});