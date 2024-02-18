const seats = document.getElementsByClassName('b-seat');
// console.log(seats);

let seatCount = 1;
let ticketPrice = 550;
let totalSeat = 39;
for(const seat of seats){
    // console.log(seat);

    seat.addEventListener('click', function(){
        const seatNumber = seat.innerText;
        // console.log(seatNumber);

        const ticketDetails = document.getElementById('ticket-details');
        // console.log(ticketDetails);

        const economy = 'Economy';
        const p2 = document.createElement('p');
        p2.innerText = economy;
        const p3 = document.createElement('p');
        p3.innerText = ticketPrice;
        const p = document.createElement('p');
        p.innerText = seatNumber;
        
        const li = document.createElement('li');

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        ticketDetails.appendChild(li);

        // price count 
        
        const totalPrice = parseFloat(document.getElementById('total-price').innerText);
        const tPrice = parseFloat(document.getElementById('t-price').innerText);
        document.getElementById('total-price').innerText = totalPrice + tPrice;

        // confirm  Seat 
        const confirmSeat = parseInt(document.getElementById('confirm-Seat').innerText);
        // confirmSeat.innerText = seatCount++;
        document.getElementById('confirm-Seat').innerText = seatCount++;

        // total seat 
        const totalSit = document.getElementById('total-sit').innerText;
        document.getElementById('total-sit').innerText = totalSeat--;
        // console.log(totalSeat--);
        
    })
}