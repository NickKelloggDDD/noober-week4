window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  
  
  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //finds the div named rides, which will contain the html we are writing
  let outputElement = document.querySelector('.rides')
  
  //Loops for the length of the returned json variable 
  for (let i=0; i < json.length; i++) {
    
    // sets ride to the json object being looked at
    let ride = json[i]
    
    // save ride object details as variables
    let dropoffAddress = ride.dropoffLocation.address  
    let dropoffCity = ride.dropoffLocation.city
    let dropoffState = ride.dropoffLocation.state
    let dropoffZipCode = ride.dropoffLocation.zip
    let passengersTotal = ride.numberOfPassengers
    let passengerFirstName = ride.passengerDetails.first
    let passengerLastName = ride.passengerDetails.last
    let passengerPhoneNumber = ride.passengerDetails.phoneNumber
    let pickupAddress = ride.pickupLocation.address
    let pickupCity = ride.pickupLocation.city
    let pickupState = ride.pickupLocation.state
    let pickupZipCode = ride.pickupLocation.zip
    let purple = ride.purpleRequested
    
    // declare the type of noober as nothing
    let nooberType = ""

    // logic for determining if the Noober is Purple or XL
    if (purple == true) {nooberType = " Purple"}
    else if (passengersTotal >= 4) {nooberType = " XL"}
    
   
    // prints out the passenger object "info card"
    outputElement.insertAdjacentHTML('beforeend', `<div><h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">      <i class="fas fa-car-side"></i>      <span>Noober ${nooberType}</span>    </h1>    <div class="border-4 border-gray-500 p-4 my-4 text-left">      <div class="flex">        <div class="w-1/2">          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>        </div>        <div class="w-1/2 text-right">          <span class="rounded-xl bg-gray-600 text-white p-2">            ${passengersTotal} passenger(s)          </span>        </div>      </div>      <div class="mt-4 flex">        <div class="w-1/2">          <div class="text-sm font-bold text-gray-600">PICKUP</div>          <p>${pickupAddress}</p>          <p>${pickupCity}, ${pickupState} ${pickupZipCode}</p>        </div>        <div class="w-1/2">          <div class="text-sm font-bold text-gray-600">DROPOFF</div>          <p>${dropoffAddress}</p>          <p>${dropoffCity}, ${dropoffState}  ${dropoffZipCode} </p>        </div>      </div>    </div>    </div>`)
      
  }

})