


// buttonColor changes the color of the box clicked to red, and the previously clicked box back to black
function buttonColor(curr_div) {
    if (curr_div.id == "all"){
        curr_div.className = "red-box";
        document.getElementById("comps").className= "grey-box";
        document.getElementById("typeDevice").innerHTML= "<img src='assets/laptop-icon.svg' height='30px' width='30px'/> All";
        document.getElementById('search').placeholder= "Search All Devices";
        document.getElementById('askisk').style.color = "#990000";
        


    }
    else if(curr_div.id == "comps"){
        curr_div.className = "red-box";
        document.getElementById("all").className = "grey-box";
        document.getElementById("typeDevice").innerHTML= "<img src='assets/laptop-icon.svg' height='30px' width='30px'/> Laptops";
        document.getElementById('search').placeholder= "Search Laptops";
        document.getElementById('askisk').style.color = "black";
    };
    $('#search').val("");
}

// helper function of 'listDevices' which sorts out the correct html to display on the page
function htmlForDevice(device,main_div){
    longString = "";
    longString += "<div class='text-with-device col-md-3'> <img src=" + device.img + " class=" + device.classs + " height=80 width=80 /> ";
    longString += "<div class='device-spacing'>";
    longString += "<h4>"+ device.name +"</h4>";
    if(device.redcircle == true){
       longString += "<div class='circle'> <medium> ! </medium> </div>";
    }
    if(device.newy == true){
        longString += "<div class='gold-box'> <regular> NEW </regular> </div>";
    }
    longString += "<div class='num-clicked'> <regular> " + device.number + " </regular> </div>";
    longString += "<p style='color: #999999;'>From $" + device.cost + "/month  </p>";
    longString += "</div>";
    longString += "</div>";
    main_div.innerHTML += longString;
}
// listDevices simply updates the page with the correct devices associated to the respective buttons at the top of the page
function listDevices(curr_div) {

var main_div = document.getElementById("listing");
main_div.innerHTML = "";
var listDevice = [mac, dellLat , mota, dellPre];

for (deviceIndex in listDevice){
    device = listDevice[deviceIndex];
    if(device.comps == true && curr_div.id == "comps"){
        htmlForDevice(device,main_div);

    }
    else if(curr_div.id == "all"){
        htmlForDevice(device,main_div);

    }
}

}
// searchUpdate updates the devices that are associated with what is currently typed in the search bar. 
// jQuery was used in 'index.html' to gather that information

function searchUpdate(search){
    var all_div = document.getElementById("all");
    var comps_div = document.getElementById("comps");
    var main_div = document.getElementById("listing");
    main_div.innerHTML = "";
    var listDevice = [mac, dellLat , mota, dellPre];
    if(all_div.className == "red-box"){
        for (deviceIndex in listDevice){
            device = listDevice[deviceIndex];
            if(device.name.toLowerCase().startsWith(search) == true){
                htmlForDevice(device,main_div);
            }
        }
    }
    else{
        for (deviceIndex in listDevice){
            device = listDevice[deviceIndex]
            if(device.name.toLowerCase().startsWith(search) == true && device.comps == true){
                htmlForDevice(device,main_div);
            }
        } 
    }

}

// JSON data of each device
var mac = {
        name: "MacBook Pro",
        classs: "mac",
        comps: true,
        redcircle: true,
        newy: true,
        number: "36",
        cost: "111.31",
        img: "assets/macbook-pro.png"

    };
var dellLat = {
        name: "Dell Latitude E7270",
        classs: "dell_lat",
        comps: true,
        redcircle: false,
        newy: false,
        number: "36",
        cost: "64.10",
        img: "assets/dell-latitude-e7270.png"

    };
var dellPre = {
        name: "Dell Precision M5520",
        classs: "dell_pre",
        comps: true,
        redcircle: false,
        newy: false,
        number: "36",
        cost: "104.60",
        img: "assets/dell-precision-m5520.png"

    };
var mota = {
        name: "Mototorola Mota Z",
        classs: "mota",
        comps: false,
        redcircle: false,
        newy: true,
        number: "36",
        cost: "0.01",
        img: "assets/motorola-mota-z.png"

    };