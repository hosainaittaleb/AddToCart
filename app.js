const totalAmount = document.getElementById('total');
const shippingCharge = document.getElementById('shipping-charge');
const totalCartAmt = document.getElementById('total-cart-amt');

const discountCode1 = document.getElementById('discount-code1');



function decreaseNumber(incdec, itemPrice){
    const itemVal = document.getElementById(incdec); 
    const priceVal = document.getElementById(itemPrice);


    if(itemVal.value <= 0)
    {
        itemVal.value = 0;
        alert('Negative value not allowed');
        totalCartAmt.innerHTML = parseInt(totalAmount.innerHTML);
        
    }else{
        itemVal.style.background = '#fff';
        itemVal.style.color = '#000';
        itemVal.value = parseInt(itemVal.value) - 1;
        priceVal.innerHTML = parseInt(priceVal.innerHTML) - 15;
        totalAmount.innerText = parseInt(totalAmount.innerText) - 15;
        totalCartAmt.innerHTML = parseInt(totalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
        
    }
}

function increaseNumber(incdec, itemPrice){
    const itemVal = document.getElementById(incdec); 
    const priceVal = document.getElementById(itemPrice);

    if(itemVal.value >= 5)
    {
        itemVal.value = 5;
        alert('Maximun 5 items allowed');
        itemVal.style.background = '#ffcccb';
        itemVal.style.color = '#000';
    }else{
        itemVal.value = parseInt(itemVal.value) + 1;
        priceVal.innerHTML = parseInt(priceVal.innerHTML) + 15;
        totalAmount.innerText = parseInt(totalAmount.innerText) + 15;
        totalCartAmt.innerHTML = parseInt(totalAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}

function discount_Code() {
    const totalAmtCurr = parseInt(totalCartAmt.innerHTML);
    const error_trw = document.getElementById('error_trw');
    if(discountCode1.value === 'bazz')
    {
        error_trw.innerHTML = "Hurray! Code is valid";
        let newTotalAmt = totalAmtCurr - 15;
        totalCartAmt.innerHTML = newTotalAmt;
    }else{
        error_trw.innerHTML = "Code is Invalid! Valid code is bazz";
    }
}

