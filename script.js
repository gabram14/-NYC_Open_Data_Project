let data, info; // global variables

async function init(){
  
  let link = "axux.json"; 
  info = await fetch(link);
  data = await info.json();
  
  //console.log(data);

  let output = document.getElementById("output");
  let build = "";

for()
{
       let build = `<div class="card fitted">
                            <h3>${info.legal_restaurant_.name}</h3>
                            <hr>
                            <p>${Info.borough}</p>
                            <p>${Info.business_address}</p>
                            <p>${Info.latitude}</p>
                            <hr>
                            <p>${info.longitude}</p>
                            <hr>
                            <p>${Info.restaurant_inspection_id}</p>
                            </div>`;

       return build;
}
  

  output.innerHTML = build;
}

function filterBy(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");

  let borough = document.getElementById("borough").value;
  
  let build = "";
  let ct = 0; 

 function card(  info ){
       let build = `<div class="card fitted">
                            <h3>${info.legal_restaurant_.name}</h3>
                            <hr>
                            <p>${Info.borough}</p>
                            <p>${Info.business_address}</p>
                            <p>${Info.latitude}</p>
                            <hr>
                            <p>${info.longitude}</p>
                            <hr>
                            <p>${Info.restaurant_inspection_id}</p>
                            </div>`;

       return build;
}
      ct += 1;

  
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}



