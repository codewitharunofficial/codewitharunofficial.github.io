function timer() {
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var Sec = d.getSeconds();

   var date= document.getElementsByClassName("container");
   date.innerHTML ="Time"+":"+ hours+":"+min+":"+Sec;
}
setInterval(timer, 1000);

var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
     loader.style.display = "none";
    })