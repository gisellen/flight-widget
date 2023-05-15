const tableBody = document.getElementById("table-body");
let flights = [
];

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");
        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  }
}

populateTable();




function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0,maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
        return numbers.charAt(Math.floor(Math.random() * numbers.length))
}


function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateTime() {
    let displayHour = hour;

    if(hour < 24){
        hour++
    }

    if(hour >=24){
        hour =1 
        displayHour=hour;
    }

    if(hour < 10){
        displayHour = "0" + hour
    }

    return displayHour+ ":" + generateRandomNumber(5) + generateRandomNumber(5)
}


function shuffleUp(){
    flights.shift()
    flights.push(  {
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: "OX 203",
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)],
      })
      tableBody.textContent = ""
      populateTable()
}

setInterval(shuffleUp, 3000)