

const API_URL = "https://restcountries.com/v3.1/all";

console.log(API_URL)

function reqListener() {
    const countriesdeta= JSON.parse(this.responseText);
    //this.responsetext;
    //console .log(countriesdeta.length);
    for (let ind =0;ind <countriesdeta.length;ind++ ){
        console.log(countriesdeta[ind].name.common,countriesdeta[ind].region,countriesdeta[ind].subregion,countriesdeta[ind].population );
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();





