let firstTotal =0;
let economyTotal =0;
function ticketHandler(ticket, isIncrease){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount =0;
    if(isIncrease === true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease === false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    if(ticket === 'first'){
        firstTotal = ticketNewCount * 150;
    }
    if(ticket === 'economy'){
        economyTotal = ticketNewCount * 100;
    }
    const ticketTotal = firstTotal + economyTotal;
    document.getElementById('sub-total').innerText = '$' + ticketTotal;
    const vat = ticketTotal * .1;
    document.getElementById('total-vat').innerText = '$' + vat;
    const total = ticketTotal + vat;
    document.getElementById('total-amount').innerText = '$' + total;
};
