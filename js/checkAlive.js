function checkAlive() {
    var api_host = "http://api.lamp.example.com:40002";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("is_srv_alive").innerHTML = "The api.lamp.example.com is alive.";
            document.getElementById("is_srv_alive").style.color = "blue";
        } else {
            document.getElementById("is_srv_alive").innerHTML = "The api.lamp.example.com is dead.";
            document.getElementById("is_srv_alive").style.color = "red";
        }
    };
    xhttp.open("GET", api_host + "/check.php", true);
    xhttp.send();
}