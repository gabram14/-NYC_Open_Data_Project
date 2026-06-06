let data, info, leftPanel, mapObj; 

async function init(){
     let link = "axux.json";
    info = await fetch(link);
     data = await info.json();

    let leftPanel = get("leftPanel");
    let build = "";

    for(let i = 0; i < data.length; i++){
      let restaurant = data[i];
      build += card(restaurant);
    }

    leftPanel.innerHTML = build;  
}

function filterByBoro(){
  leftPanel = get("leftPanel");
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
      let complaint = data[i];
      if (complaint.borough == boro){   
        build += card(complaint);
      }
  }
  leftPanel.innerHTML = build;
}

function RestaurantsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  for(let i = 0; i < data.length; i++){
      let restaurant = data[i];
      if(restaurant.borough == "Queens"){
        q++;
      }else if(restaurant.borough == "Manhattan"){
        m++;
      }else if(restaurant.borough == "Brooklyn"){
        bk++;
      }else if(restaurant.borough == "Bronx"){
        bx++;
      }else if(restaurant.borough == "Staten Island"){
        s++;
      }
    }

    let chartData = [
      ["Queens", q],
      ["Manhattan", m],
      ["Brooklyn", bk],
      ["Bronx", bx],
      ["Staten Island", s]
    ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "output", chartType);
}


function displayChart( data, chart_id, chart_type ){
    let chart = c3.generate({
      bindto: `#${chart_id}`,
      data: {
        columns: data,
        type: chart_type
      }
    });
}