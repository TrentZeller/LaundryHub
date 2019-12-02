var submited = document.getElementById('submitbtn')
var pickup = document.getElementById("pickups")
var requests = document.getElementById("requests")
function addRequest(e){
    var formData = new formData(document.querySelector("form"));
  /*  localStorage.setItem("firstName", toString(document.getElementById("firstname")))
    localStorage.setItem("lastName", toString(document.getElementById("lastname")))
    localStorage.setItem("phoneNumber",toString(document.getElementById("number")))
    localStorage.setItem("building", toString(documnet.getElementById("building")))
    localStorage.setItem("room", toString(documnet.getElementById("room")))
    localStorage.setItem("floor", toString(documnet.getElementById("floor")))
    localStorage.setItem("time", toString(document.getElementById("time"))) */

    pickup.innerHTML = "Test"
    requests.innerHTML = "Test"
    addPickup()
}

function addPickup(){
    pickup.innerHTML = formData
}
submited.addEventListener("change", addRequest());