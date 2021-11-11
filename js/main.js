var isEnought = prompt("Pulingizni kiriting", 0);


var flightTicketUSD = 600;
var hotelCostUSD = 350;
var museumCostEUR = 220;

var USD_TO_UZS = 10750.44
var EUR_TO_UZS = 11000.54


var checkValidation = isEnought >= (( flightTicketUSD + hotelCostUSD) * USD_TO_UZS + museumCostEUR * EUR_TO_UZS); 


if (checkValidation) {
    alert("Alisher siz sayohatga bora olsiz " , isEnought);
}else {
    alert("Alisher o`zgina kutub turasiz" , isEnought);
}



