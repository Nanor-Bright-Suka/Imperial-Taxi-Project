
    
const distance = document.getElementById("distance");
const time = document.getElementById("time");
const waitingTime = document.getElementById("waitingTime");
const suitcase = document.getElementById("suitcase");
const btn = document.querySelector(".btn");
const ul = document.querySelector(".info");


const tm = new Date()



let fare = 2;
btn.addEventListener("click",function doTheMaths(){
   
    //fare for distance
    fare +=  Math.ceil(parseFloat(distance.value) / 1000)  * 0.25;
    //fare for waiting time
   fare +=      Math.ceil(parseFloat(waitingTime.value) / 3 ) * 0.20;
    //fare for suitcase
   suitcase.value >= 1 ? fare += parseFloat(suitcase.value) * 1 : "";
        
   if(tm.getHours() >= 21 || tm.getHours() <= 6){
   fare -= 0.1;
   }

  seeWhat(fare)
})

    function seeWhat(val){
        const myArr = ["Minimal fare: $2. This fare covers the distance traveled up to 1000 yards and waiting time stopping for traffic lights or traffic jams, etc.) of up to 3 minutes.",
        "For every additional 250 yards or part of it: 25 cents.",
        "For every additional 2 minutes of stopping or waiting or part thereof: 20 cents.",
        "One suitcase: no charge; each additional suitcase: $1.",
        "Night supplement: 25%, effective for journeys between 21.00 and 06.00"];
        
        ul.innerHTML = myArr.join()
        document.querySelector(".tt").textContent = `Total Amount = $${val}`; 
        setTimeout(()=> {
            location.reload()
        },10000)
        
    }

 

// document.getElementById("calculateBtn").addEventListener("click", calculateFare);

//  function calculateFare(){
//     const distance = parseFloat(document.getElementById("distance").value);
//     const waitingTime = parseFloat(document.getElementById("waitingTime").value);
//     const time = new Date (document.getElementById("time").value);
//     const suitcases = parseFloat(document.getElementById("suitcases").value);
//     const nightTime = time.getHours() >= 21 || time.getHours() < 6;
//     const regularClient = false;
// console.log(time.getHours())

//     let fare = 2;

    // fare for distance 
   // fare += Math.ceil(distance / 250) * 0.25;

    // fare for waiting time 
   // fare += Math.ceil(waitingTime / 2) * 20;



    //suitcases 
    //fare += suitcases > 1 ? suitcases - 1 : 0;


    //fare for night time of travel 
    // if(!regularClient && nightTime){
    //     fare += fare * 0.25;
    // }

    //fare for night time all time passengers
//     if(regularClient){
//         fare -= fare * 0.10;
//     }

//     displaySummaryFare(fare);

// }


//  function displaySummaryFare(fare){
//     const listContainer = document.getElementById("list-container");
     
//     const params = [
//        " Minimal fare: $2. This fare covers the distance traveled up to 1000 yards and waiting time (stopping for traffic lights or traffic jams, etc.) of up to 3 minutes",
//     "For every additional 250 yards or part of it: 25 cents",
//    " For every additional 2 minutes of stopping or waiting or part thereof: 20 cents",
//     "One suitcase: no charge; each additional suitcase: $1",
//     "Night supplement: 25%, effective for journeys between 21.00 and 06.00."
//         ];

//         params.forEach(params => {
//             const li = document.createElement("li");
//             li.innerHTML = params;
//             listContainer.appendChild(li);
//         })
       
//        document.getElementById("amount").innerHTML = `$${fare.toFixed(2)}`;
// }