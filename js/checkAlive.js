function checkAlive() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("is_srv_alive").innerHTML = "The api.lnmp.example.com is alive.";
            document.getElementById("is_srv_alive").style.color = "blue";
        } else {
            document.getElementById("is_srv_alive").innerHTML = "The api.lnmp.example.com is dead.";
            document.getElementById("is_srv_alive").style.color = "red";
        }
    };
    xhttp.open("GET", "http://api.lnmp.example.com:8888/check.php", true);
    xhttp.send();
}