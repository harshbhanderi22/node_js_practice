const express = require('express');
//To make express executable
const app = express();
const path = require('path');

const webpath = path.join(__dirname, 'webPage');

//Set the engine to tell Node that which engine we are using
app.set('view engine', 'ejs');


//Load given file at home route
app.get('', (req, resp) => {
    resp.sendFile(`${webpath}/index.html`)
})

//It is compulsory to create folder named view to render this file using engine and file extension should be .ejs
app.get('/profile', (req, resp) => {
    const user = {
        name: "Harsh Bhanderi",
        branch: 'Engineering',
        college: 'ppsu'
   }
    resp.render('profile.ejs', {user}) 
});

//Load about file and here in url we just need to add about not about.html
app.get('/about', (req, resp) => {
    resp.sendFile(`${webpath}/about.html`)
})

//If url is wrong and not from defined urls
app.get('*', (req, resp) => {
    resp.sendFile(`${webpath}/nopage.html`)
})

app.listen(5000);

