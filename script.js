// let obj={

//     name:"bhart",
//     age:13,
//     roll_no:90,
//     greet:  function() {
//         console.log("age");

//     },

//     add:()=>{
//        let  a=9+9;
//         return a;

//     }

// } 




// let obj2={
//     Subject:"Sports",
//     class:12,
//     roll_no:90,

// }

// obj2.class=5;

// const obj4={...obj,...obj2};
// console.log(obj4)
// const obj2 = window.document.getElementById("option123");
// obj2.style.backgroundColor = "pink";

// function timmer(){
    

// const timer= document.getElementById("roots");
// const current_time =new Date();
// const live_time= current_time.toLocaleTimeString();
// timer.innerHTML=live_time;

// }

// function eventdate(){
//     const date1=new Date();
//     const date2=new Date("2028-06-21");
//     const date=date2-date1;
//     const Month=Math.floor((date/(1000*60*60*24)));
//     document.getElementById("month").innerHTML=1;

//     const days=Math.floor((date/(1000*60*60))%24);
//     document.getElementById("days").innerHTML=days;

//     const minutes=Math.floor((date/(1000*60))%60);
//     document.getElementById("minutes").innerHTML=minutes;


//     const second=Math.floor((date/(1000))%60);
//     document.getElementById("seconds").innerHTML=second;




// }

// setInterval(timmer,1000);

function timmer() {
    const timer = document.getElementById("roots"); // Correct ID
    const current_time = new Date();
    const live_time = current_time.toLocaleTimeString();
    timer.innerHTML = live_time;
  }
  
  function eventdate() {
    const current_date = new Date();
    const event_date = new Date("2028-07-14"); // Update the event date if incorrect
    const time_diff = event_date - current_date;
  
    // Calculate remaining months (approximate)
    const month = Math.floor(time_diff / (1000 * 60 * 60 * 24 * 30));
    document.getElementById("month").innerHTML = month;
  
    // Calculate remaining weeks
    const week = Math.floor(time_diff / (1000 * 60 * 60 * 24 * 7)) % 4;
    document.getElementById("week").innerHTML = week;
  
    // Calculate remaining days
    const days = Math.floor(time_diff / (1000 * 60 * 60 * 24)) % 30;
    document.getElementById("days").innerHTML = days;
  
    // Calculate remaining minutes
    const minutes = Math.floor((time_diff / (1000 * 60)) % 60);
    document.getElementById("minutes").innerHTML = minutes;
  
    // Calculate remaining seconds
    const seconds = Math.floor((time_diff / 1000) % 60);
    document.getElementById("seconds").innerHTML = seconds;
  }
  
  // Update the live time and event date
  setInterval(timmer, 1000); // Update live time every second
  setInterval(eventdate, 1000); // Update event countdown every second
  