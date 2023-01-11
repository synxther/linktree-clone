function myFunction() {
    var element = document.body;
    //add or remove class dark
    element.classList.toggle("dark");
    //check se existe a classe dark
    if(element.classList.contains("dark")) {
        document.getElementById("theme").innerHTML="🌞"
    }
    else {
        document.getElementById("theme").innerHTML="🌚"}
 }

