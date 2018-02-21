// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var res = {}, resStr='{';
if (currency == 0) { return(res);}
if (currency > 10000){ res.error = "You are rich, my friend! We don't have so much coins for exchange"; return(res);}


if (currency >= 50) { 
  res.H = Math.trunc(currency/50); 
  currency = currency % 50;
}

if (currency >= 25){
  res.Q = 1;
  currency -=25;
}

if (currency >= 10){
  res.D = Math.trunc(currency/10);
  currency = currency % 10;
}

if (currency >= 5){
  res.N = 1;
  currency -=5;
}

if (currency >= 1){
  res.P = currency;
}
resStr+='}';
return(res);
}
