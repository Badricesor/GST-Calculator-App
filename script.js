function total(){
    let price = document.getElementById(`price`).value;
    let GST = document.getElementById(`GST`).value;
    let GST_price = price*GST
    let Total_Price = parseFloat(price) + parseFloat(GST-price);
    alert("TOTAL GST RATE :" + "" + GST_price.toFixed(2) + " "   + "TOTAL PRICE : " + price)
}
