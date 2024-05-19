let date1 = new Date();
let time = date1.toLocaleTimeString();
console.log(time);

get_current_time = ()=>{
    let date1 = new Date();
    document.querySelector('#clock_container').innerHTML = date1.toLocaleTimeString();
}

// now this time variable will store the time of a fixed time when the browser is refreshed
// and will not change in each second, so to resolve this issue we will do the below setting

// we will use setInterval method as below:
setInterval(get_current_time, 1000);
