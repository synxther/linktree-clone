function myFunction() {
    var element = document.body;
    //add ou remover a classe dark
    element.classList.toggle("dark");
    //verifica se existe a classe dark
    if(element.classList.contains("dark")) {
        document.getElementById("theme").innerHTML="🌞"
    }
    else {
        document.getElementById("theme").innerHTML="🌚"}
 }

