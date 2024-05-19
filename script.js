let date1 = new Date();
let time = date1.toLocaleTimeString();
console.log(time);

// now this time variable will store the time of a fixed time when the browser is refreshed
// and will not change in each second, so to resolve this issue we will do the below setting


// below we made a function that fetches the current time of the region and then it changes the html of
// clock container to time;
get_current_time = ()=>{
    let date1 = new Date();
    document.querySelector('#clock_container').innerHTML = date1.toLocaleTimeString();
}


// and below we run the function every second, so it fetches current time and displays in clock_container

// we will use setInterval method as below:
setInterval(get_current_time, 1000);


