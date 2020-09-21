//Copyright © TR Software 2020

function generatePrice(price1, price2, price3, price4, price5){
    var total = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4) + parseInt(price5);
    var totaltxt = document.getElementById('total');
    console.log(total);
    totaltxt.value = total;
}