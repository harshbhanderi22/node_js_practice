//Creating middleware
module.exports =  reqMiddle = (req, resp, next) => {
    if(!req.query.age){
        resp.send('Please provied age')
    }
    else if (req.query.age < 18) {
        resp.send('You can not access website.');
        resp.send('Age cannot be less than 18');
    }
    else {
        //It is used to load next page in case of passing all conditions or else page will keep loading 
        next()
    }
}