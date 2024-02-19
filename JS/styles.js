const seats = document.getElementsByClassName('b-seat');


let seatCount = 1;
let ticketPrice = 550;
let totalSeat = 39;
let selectedSeat = 0;
for(const seat of seats){
    // console.log(seat);

    seat.addEventListener('click', function(e){
        const seatNumber = seat.innerText;
        

        const ticketDetails = document.getElementById('ticket-details');

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
        const totalPrice = parseFloat(document.getElementById('total-price').innerText = seatCount * 550);
        seat.disabled = true;

        // confirm  Seat 
        const confirmSeat = parseInt(document.getElementById('confirm-Seat').innerText);
        // confirmSeat.innerText = seatCount++;
        document.getElementById('confirm-Seat').innerText = seatCount++;

        // total seat 
        const totalSit = document.getElementById('total-sit').innerText;
        document.getElementById('total-sit').innerText = totalSeat--;
        

        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = '#f8fafc';
        
        if( seatCount  > 5){
            alert('Sorry you can not buy Anymore');
            seatNumber.disabled = true;
            return
        }
        
        

     //----------------- coupon input field -------------------------
        const btn = document.getElementById('apply-btn');
        btn.addEventListener('click', function(){
        

            // get the value  from input 
            const couponElement = document.getElementById('input-field').value;
           
            if(totalPrice >= 2200){
                if(couponElement === 'NEW15'){
                    const discountPrice = document.getElementById('discount-price');
                    const discountAmount = totalPrice * 0.15; 
                    discountPrice.innerText = discountAmount.toFixed(2);
                    // grand total 
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalPrice - discountAmount.toFixed(2);              
                    document.getElementById('input-field').classList.add('hidden');
                    btn.classList.add('hidden');
                }
                else if(couponElement === 'Couple 20'){
                    const discountPrice = document.getElementById('discount-price');
                    const discountAmount = totalPrice * 0.2; 
                    discountPrice.innerText = discountAmount.toFixed(2);
                    // grand total 
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalPrice - discountAmount.toFixed(2);              
                    document.getElementById('input-field').classList.add('hidden');
                    btn.classList.add('hidden');
                }
                
                else{
                    alert('Invalid Coupon')
                }
            }
            else{
                // alert('please buy ticket more');
            }

        
        })
        
    }) 
}
