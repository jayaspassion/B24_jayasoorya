var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var countryAsia = data.filter((ctr) =>{
        return ctr.region == "Asia";
    })
    countryAsia.forEach(element => {
        console.log(element.name)
    });

    var countryPop = data.filter((ctr)=>{
        return ctr.population < 200000;
    })
    console.log("\n\nPopulation\n\n\n")
    countryPop.forEach(element => {
        console.log(element.name)
    });

    var totalPop = data.reduce((a, e)=>{
        return a+e.population;
    }, 0)
    console.log(`Population = ${totalPop}`)

    var cusd = data.filter((x) => {
       for (var i in x.currencies) {
           if (x.currencies[i].code === "USD") {
               return true;
               
           }
       }
    }).map((ele)=> console.log(ele.name));

    data.forEach((x, i) => {
        console.log(x.name + " " + x.capital + " " + x.flag);
    })

  



}