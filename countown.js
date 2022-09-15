// const countown = document.querySelector(".countown");
// const num=10;

// setTimeout(()=>{
// countdown.innerText = 9;
// setTimeout(()=>{
//     countdown.innerText = 8;
//     setTimeout(()=>{
//         countdown.innerText = 7;
//         setTimeout(()=>{
//             countdown.innerText = 6;
//             setTimeout(()=>{
//                 countdown.innerText = 5;
//                 setTimeout(()=>{
//                     countdown.innerText = 4;
           
//                 setTimeout(()=>{
//                     countdown.innerText = 3;
//                     setTimeout(()=>{
//                         countdown.innerText = 2;
//                         setTimeout(()=>{
//                             countdown.innerText = "Happy Independance Day";
                            
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
//     },1000);
// },1000);
// },1000);

const countdown = document.querySelector(".countdown")

const timerMsg = (num) =>
new Promise((resolve, reject)=> {
    if (num > 0) {
        setTimeout(()=> {
            console.log(num);
            countdown.innerText = num;
            resolve(num);
        },1000);

    }else{
        setTimeout(()=> {
            countdown.innerText = "Happy Independance Day🎊🎊🎊";
            reject("Happy Independance Day🎊🎊🎊");
        },1000);
    }
});

console.log("Timer Started");
timerMsg(10)
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.then((n) => timerMsg(--n))
.catch((msg) => console.log(msg));


// // data --> response data --> 
// console.log("Fetch data - Started")
// fetch("https://restcountries.com/v3.1/all")
// .then(data => data.json())
// .then((countries) => console.log(countries))
// .catch(errmsg => console.error("An error pccured: ", errmsg));