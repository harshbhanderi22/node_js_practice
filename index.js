const express = require('express');
const app = express();
const reqMiddle = require('./middleware');

//Instance of router to use middleware in group
const route = express.Router();


//To use middleware in all pages
//app.use(reqMiddle);

//This will help you to you middleware in group. In our case we have used middlware in contact and profile page.
route.use(reqMiddle);

//To apply middlwares in particular pages simply add middleware as a argument in get
app.get('/', reqMiddle, (req, resp) => {
    //In our case, to experiment middleware, proivide age through URL
     resp.send('Welcome to Home Page')
})

app.get('/about', (req, resp) => {
      resp.send('Welcome to About Page')
})

route.get('/profile', (req, resp) => {
      resp.send('Welcome to Profile Page')
})

route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact Page')
})

//route in app
app.use('/', route);
app.listen(5000)
