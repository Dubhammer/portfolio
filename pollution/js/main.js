//Mapquest and Openweathermap API
//https://developer.mapquest.com/documentation/mapquest-js/v1.3/examples/reverse-geocoding/
//https://developer.mapquest.com/documentation/common/forming-locations/
//https://openweathermap.org/current

//This was actually worked on during reading week so didn't know we were going to learn about Fetch
//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data


let myLat = '';
let myLon = '';
let map;
var airquality, air, components, co, no2, pm10, formattedTime;
var colist, no2list, pm10list = [];
var timelist, address;



var collapse = document.getElementById("collapse");
var legend = document.getElementById("legend");

collapse.addEventListener("click", function () {

    if (legend.style.display === "grid") {
        collapse.innerHTML = "<p>Legend &#9660;</p>"
        legend.style.display = "none";
    } else {
        collapse.innerHTML = "<p>Legend &#9650;</p>"
        legend.style.display = "grid";
    }
});



//Standard geolocation function
function onSuccess(position) {
    // console.log(position);
    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
    getMap(myLat, myLon);
}

//location defaults to oakville when user rejects geolocation request
function onError(error) {
    myLat = '43.4675';
    myLon = '-79.6877';
    getMap(myLat, myLon);
    alert("The location will be deafulted to Oakville, Ontario, Canada");
    //    alert('code: ' + error.code + '\n' + "message: " + error.message);
}


navigator.geolocation.getCurrentPosition(onSuccess, onError);

//Disable interaction with splash screen until geolocation is received
//Prompting user interaction with changed message


//reverse geolocation API
function getMap(LAT, LON) {

    var popup = L.popup();

    L.mapquest.key = 'CGL0vGl5jM0gwzM6PlzzdrBfaGkxNG8O';

    map = L.mapquest.map('map', {
        center: [LAT, LON],
        layers: L.mapquest.tileLayer('dark'),
        zoom: 12
    });

    map.addControl(L.mapquest.control());
    // map.addControl(L.mapquest.searchControl());

    map.on('click', function (e) {
        popup.setLatLng(e.latlng).openOn(map);
        L.mapquest.geocoding().reverse(e.latlng, pollutiondash);
    });

// map.on('search:results', function (e) {
//     var location = e.results[0].latlng;
//     popup.setLatLng(location).openOn(map);
//     L.mapquest.geocoding().reverse(location, pollutiondash);
// });

    map.fireEvent('click', {
        latlng: L.latLng(LAT, LON)
    });

    //API data call
    function pollutiondash(error, response) {
        var location = response.results[0].locations[0];
        var street = location.street;
        var city = location.adminArea5;
        var state = location.adminArea3;
        var postal = location.postalCode;
        var country = location.adminArea1;
        address = street + ', ' + city + ', ' + state + ', ' + country + ', ' + postal;

        var mqLAT = location.latLng.lat;
        var mqLNG = location.latLng.lng;
        clearArray()

        //Opaenweathermap API call based on Mapquest geolocation


        const api = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${mqLAT}&lon=${mqLNG}&appid=e0543862e5b3e7f6748f04bbb5aed62a&units=metric`;

        //https://stackoverflow.com/questions/51215161/how-to-select-all-buttons-with-foreach-in-js-dom-no-jquery

        //fetch api call
        //Spent so many hours during reading week to get this working only to taught in class a week after. RIP.
        fetch(api)
            .then(response => {
                return response.json()

            })
            .then(data => {
                // console.log(data)

                let pollutionloc = data.list;
                console.log(pollutionloc)

                pollutionloc.forEach(pollutiondata => {

                    let utctime = pollutiondata.dt;

                    //https://usefulangle.com/post/258/javascript-timestamp-to-date-time
                    var timeconvert = new Date(utctime * 1000);
                    var year = timeconvert.getFullYear();
                    var month = ("0" + (timeconvert.getMonth() + 1)).slice(-2);
                    var date = ("0" + timeconvert.getDate()).slice(-2);
                    var hours = ("0" + timeconvert.getHours()).slice(-2);
                    var minutes = ("0" + timeconvert.getMinutes()).slice(-2);
                    var seconds = ("0" + timeconvert.getSeconds()).slice(-2);

                    formattedTime = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;

                    airquality = pollutiondata.main.aqi;
                    components = pollutiondata.components;
                    co = components.co;
                    no2 = components.no2;
                    pm10 = components.pm10;

                    timelist = timelist.concat(formattedTime)
                    colist = colist.concat(parseInt(co));
                    no2list = no2list.concat(parseInt(no2));
                    pm10list = pm10list.concat(parseInt(pm10));

                });

                console.log(airquality);

                chart1(timelist, colist);
                chart2(timelist, no2list);
                chart3(timelist, pm10list);
                air = document.getElementById('airquality');

                air.innerHTML = `<div><p>Air Quality<br>Health Index</p><h2><b>${airquality}</b></h2></div>`;

                popup.setContent(`<p>${address}</p>`);
            })
        // .catch(error => console.log('Kill me now D:'))
        // var popContent = document.getElementById('middle');
        // popup.setContent(popContent);
    }
}

function clearArray() {
    colist = [];
    timelist = [];
    no2list = [];
    pm10list = [];
}


function chart1(value1, value2) {

    var trace1 = {
        x: value1,
        y: value2,
        // mode: 'markers',
        type: 'bar',
        marker: {
            color: '#96549B',
            size: 5,
        }
    };

    var data = [trace1];

    var layout = {
        title: '<b>Carbon Monoxide (CO)</b>',
        titlefont: {
            color: '#96549B',
        },
        font: {
            family: 'Poppins',
            size: 11,
            color: '#000000'
        },
        margin: {
            pad: 10
        },
        xaxis: {
            title: 'Date',
            titlefont: {
                color: '#96549B',
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'CO(μg/m3)',
            titlefont: {
                color: '#96549B',
            },
            rangemode: 'tozero'
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('chart1', data, layout, config);
}

function chart2(value1, value3) {

    var trace1 = {
        x: value1,
        y: value3,
        type: 'bar',
        marker: {
            color: '#D57329',
            size: 5,
        }
    };

    var data = [trace1];

    var layout = {
        title: '<b>Nitrogen dioxide (NO<sub>2</sub>)</b>',
        titlefont: {
            color: '#D57329',
        },
        font: {
            family: 'Poppins',
            size: 11,
            color: '#000000'
        },
        margin: {
            pad: 10
        },
        xaxis: {
            title: 'Date',
            titlefont: {
                color: '#D57329',
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'NO<sub>2</sub>(μg/m3)',
            titlefont: {
                color: '#D57329',
            },
            rangemode: 'tozero'
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('chart2', data, layout, config);
}


function chart3(value1, value4) {

    var trace1 = {
        x: value1,
        y: value4,
        type: 'bar',
        marker: {
            color: '#523D3D',
            size: 5,
        }
    };

    var data = [trace1];

    var layout = {
        title: '<b>Particles 10 microns or less (PM<sub>10</sub>)</b>',
        titlefont: {
            color: '#523D3D',
        },
        font: {
            family: 'Poppins',
            size: 11,
            color: '#000000'
        },
        // paper_bgcolor: "rgba(0,0,0,0)",
        // plot_bgcolor: "rgba(0,0,0,0)",
        margin: {
            pad: 10
        },
        xaxis: {
            title: 'Date',
            titlefont: {
                color: '#523D3D',
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'PM<sub>10</sub>(μg/m3)',
            titlefont: {
                color: '#523D3D',
            },
            rangemode: 'tozero'
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('chart3', data, layout, config);
}