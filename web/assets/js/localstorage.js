function checkCity (city) {
    if (!city) { 
        console.log("Item not found or may be deleted"); 
        return;
    }
}

function storeData () {
    localStorage.setItem("city-name", "Lahore");
}

function getData () {
    var city = localStorage.getItem("city-name");
    checkCity(city) && console.log(city);
}

function removeData () {
    var city = localStorage.getItem("city-name");
    checkCity(city);
    localStorage.removeItem("city-name");
}