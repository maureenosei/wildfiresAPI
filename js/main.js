//MAP
var json = [
  {
    title: "San Dimas",
    lat: 34.048,
    lng: -118.282,
    description: `<h3><b>San Dimas Fire</b></h3> 
    <b>Location:</b> Los Angeles  (34.048, -118.282)
    <br />
    <b>Start Date:</b> 11/6/2020
    <br />
    <b>Status:</b> INACTIVE
    <br />
    <b>Info:</b> The San Dimas Fires consumed over 100 acres in a mere eight hours, and continued to do so until the fire was eventually put out -- injuring three firefighters in the process. 
    <br />
    <br />
    <a href='#' onclick ="change1()" >Learn More </a>
     `,
  },
  {
    title: "Coleman and Dolan",
    lat: 36.1211,
    lng: -121.3274,
    description: `<h3><b>Coleman and Dolan Fires</b></h3> 
    <b>Location:</b> Pfeiffer Big Sur State Park (36.1211, -121.3274)
    <br />
    <b>Start Date:</b> 10/18/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Dolman Fire  scorched over 125,000 acres and was 98 percent contained before the Coleman Fire began. The Coleman Fire has grown to 574 additional acres and i snot 63 percent contained.
    <br />
    <br />
    <a href='#' onclick ="change2()" >Learn More </a>
     `,
  },
  {
    title: "Wolf",
    lat: 37.882,
    lng: -119.643,
    description: `<h3><b>Wolf Fire</b></h3> 
    <b>Location:</b> Yosemite National Park  (37.882, -119.643)
    <br />
    <b>Start Date:</b> 9/22/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Wolf Fire occured on the White Wolf Campground and all the fires associated were vivible from Highway 120 -- resulting in multiple road closures.  
    <br />
    <br />
    <a href='#' onclick ="change3()" >Learn More </a>
     `,
  },
  {
    title: "Bullfrog",
    lat: 37.135,
    lng: -119.027,
    description: `<h3><b>Bullfrog Fire</b></h3> 
    <b>Location:</b> Sierra National Forest (37.135, -119.027)
    <br />
    <b>Start Date:</b> 9/12/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Bullfrog Fire burned around 185 acres and is currently 60% contained. Crews remain on scene and  continue to montior the fire.  
    <br />
    <br />
    <a href='#' onclick ="change4()" >Learn More </a>
     `,
  },
  {
    title: "Slater",
    lat: 41.868,
    lng: -123.449,
    description: `<h3><b>Slater Fire</b></h3> 
    <b>Location:</b> Pacific Coast Ranges  (41.868, -123.449)
    <br />
    <b>Start Date:</b> 09/08/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The cause of the slater fire are currently under investigation. The fire covers 157,229 acres curretnly and 87 percent of the fire is contained. 
    <br />
    <br />
    <a href='#' onclick ="change5()" >Learn More </a>
     `,
  },
  {
    title: "Bobcat",
    lat: 34.224,
    lng: -117.964,
    description: `<h3><b>Bobcat Fire</b></h3> 
    <b>Location:</b>Angeles National Forest (34.224, -117.964)
    <br />
    <b>Start Date:</b> 09/06/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Bobcat Fire is curretnly active with multiple admin units on patrol. The fire spans 115,796 acres with 92 percent containment. The cause of the fire is still under investigation.
    <br />
    <br />
    <a href='#' onclick ="change6()" >Learn More </a>
     `,
  },
  {
    title: "El Dorado",
    lat: 34.08,
    lng: -116.986,
    description: `<h3><b>El Dorado Fire</b></h3> 
    <b>Location:</b> San Bernardino National Forest  (34.08, -116.986)
    <br />
    <b>Start Date:</b> 09/05/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The El Dorado Fire spans acoss two counties -- San Bernardino and Riverside. In addtion, this fire occured due to human causes. 
    <br />
    <br />
    <a href='#' onclick ="change7()" >Learn More </a>
     `,
  },
  {
    title: "Creek",
    lat: 37.191,
    lng: -119.261,
    description: `<h3><b>Creek Fire</b></h3> 
    <b>Location:</b> Sierra National Forest    (37.191, -119.261)
    <br />
    <b>Start Date:</b> 09/04/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Creek Fire spans 379,802 acres and is 70 percent contained. The cause is still under investigation and there are over 480 people on the containment team. 
    <br />
    <br />
    <a href='#' onclick ="change8()" >Learn More </a>
     `,
  },
  {
    title: "Rattlesnake",
    lat: 36.42,
    lng: -118.448,
    description: `<h3><b>Rattlesnake Fire</b></h3> 
    <b>Location:</b> Sequioa National Park  (36.42, -118.448)
    <br />
    <b>Start Date:</b> 09/03/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Rattlesnake fire is burning in Sequoia Kings Canyon National Parks Wilderness in the Rattlesnake drainage on the upper slope. This dire was dicovered after substaintial occured over the area. 
    <br />
    <br />
    <a href='#' onclick ="change9()" >Learn More </a>
     `,
  },
  {
    title: "Slink",
    lat: 38.568,
    lng: -119.568,
    description: `<h3><b>Slink Fire</b></h3> 
    <b>Location:</b> Coleville  (38.568, -119.568)
    <br />
    <b>Start Date:</b> 09/01/2020
    <br />
    <b>Status:</b> INACTIVE
    <br />
    <b>Info:</b> The Slink Fire occured in the Slinkyard Valley as a result of lightning striking the area. This fire is 90% contained and has gone down from over 120,000 acres to 26,756 acres. 
    <br />
    <br />
    <a href='#' onclick ="change10()" >Learn More </a>
     `,
  },
  {
    title: "Apple",
    lat: 33.991,
    lng: -116.961,
    description: `<h3><b>Apple Fire</b></h3> 
    <b>Location:</b> Oak Glen  (33.991, -116.961)
    <br />
    <b>Start Date:</b> 07/31/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The Apple Fire destroyed residential and commerical structures and caused civillian and fire personnel injuries. The fire also began due to human causes. 
    <br />
    <br />
    <a href='#' onclick ="change11()" >Learn More </a>
     `,
  },
  {
    title: "Blue Jay",
    lat: 37.844,
    lng: -119.605,
    description: `<h3><b>Blue Jay Fire</b></h3> 
    <b>Location:</b> Yosemite National Park  (37.844, -119.605)
    <br />
    <b>Start Date:</b> 08/18/2020
    <br />
    <b>Status:</b> ACTIVE
    <br />
    <b>Info:</b> The blue jay fire is 90% contained and spans a meere 6,922 acres. The fire was ignited by lightning and fire behavior continues to be minimal. 
    <br />
    <br />
    <a href="#" id="learnmore" onclick="change()">Learn More </a>
     `,
  },
];

// MODAL WINDOWS
//San Dimas
var modal1 = document.getElementById("modal-san");
function change1() {
  modal1.style.display = "block";
}
function closeModal1() {
  modal1.style.display = "none";
}

//Coleman
var modal2 = document.getElementById("modal-cole");
function change2() {
  modal2.style.display = "block";
}
function closeModal2() {
  modal2.style.display = "none";
}

//Wolf
var modal3 = document.getElementById("modal-wolf");
function change3() {
  modal3.style.display = "block";
}
function closeModal3() {
  modal3.style.display = "none";
}

//Bullfrog
var modal4 = document.getElementById("modal-bull");
function change4() {
  modal4.style.display = "block";
}
function closeModal4() {
  modal4.style.display = "none";
}

//Slater
var modal5 = document.getElementById("modal-slat");
function change5() {
  modal5.style.display = "block";
}
function closeModal5() {
  modal5.style.display = "none";
}

//Bobcat
var modal6 = document.getElementById("modal-bob");
function change6() {
  modal6.style.display = "block";
}
function closeModal6() {
  modal6.style.display = "none";
}

//El Dorado
var modal7 = document.getElementById("modal-dora");
function change7() {
  modal7.style.display = "block";
}
function closeModal7() {
  modal7.style.display = "none";
}

//Creek
var modal8 = document.getElementById("modal-cree");
function change8() {
  modal8.style.display = "block";
}
function closeModal8() {
  modal8.style.display = "none";
}

//Rattlesnake
var modal9 = document.getElementById("modal-ratt");
function change9() {
  modal9.style.display = "block";
}
function closeModal9() {
  modal9.style.display = "none";
}

//Slink
var modal10 = document.getElementById("modal-slin");
function change10() {
  modal10.style.display = "block";
}
function closeModal10() {
  modal10.style.display = "none";
}

//Apple
var modal11 = document.getElementById("modal-app");
function change11() {
  modal11.style.display = "block";
}
function closeModal11() {
  modal11.style.display = "none";
}

//BLUE JAY
var modal = document.getElementById("modalBlueJay");
function change() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

// MAP AND MARKERS
let map;

function initMap() {
  //Creates the map centered on Los Angeles, CA
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.936, lng: -119.783 },
    zoom: 7,
  });

  var infoWindow = new google.maps.InfoWindow({
    maxWidth: 400,
  });

  for (var i = 0, length = json.length; i < length; i++) {
    var data = json[i],
      latLng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: "img/smallfire.png",
      title: data.title + " Fire",
    });

    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        infoWindow.setContent(data.description);
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
