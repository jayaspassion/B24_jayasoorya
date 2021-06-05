var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
        try{
            var name = data[i].name;
            var lang = data[i].latlng;
            //console.log(lang);
            if(lang.length === 0)throw new Error("Longitude not found");

            weatherdata(name, ...lang);       
        }catch(e){
            console.log("some coordinates are invalid" + name + " "  + e.message)
        }
    }
}

var weatherdata = function(name, lat, lng){
    var request=new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=a7cc64b759379a560e0cbe40137d7792'
    request.open('GET', url, true);
    request.send();
    request.onload = function(){
        try{
            var data = JSON.parse(this.response);
            console.log(`${name} :${data.main.temp}`);
        }catch(e){
            console.log('Undefined response' + name)
        }

    }
    
}
