let a = 20;
let b = 0;

//Worksame as async await, it will return 30 data to waitingtime and we will wait for it using promise
let waitingtime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    },2000)
})

//Fetch data from Promise, then will only work after it will get data from promise
waitingtime.then((data) => {
    b = data;
    console.log(a + b);
})