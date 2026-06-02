function get(id){
    return document.getElementById(id);
}

let lat,lon;

function card(info){ 
    let build = `<div class="card fitted">
                    <h3>${info.legalbusinessname}</h3>
                    <hr>
                    <p>${info.borough}</p>
                    <p>${info.businessaddress}</p>
                    <hr>
                    <p>latitude: ${info.latitude}</p>
                    <p>longitude: ${info.longitude}</p>
                    <hr>
                    <p>${info.restaurantinspectionid}</p>`;
                    if(info.latitude && info.longitude){
                      build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                    }         
        build +=    `</div>`;
        if(info.latitude && info.longitude){
          lat = `${info.latitude}`;
          lon = `${info.longitude}`;
        }
     return build;
}