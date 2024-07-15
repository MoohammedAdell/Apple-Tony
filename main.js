let list = document.getElementById("list")
let closse = document.getElementById("close")
let boxs = document.querySelector("nav .boxs")
list.onclick = function(){
    boxs.style.display = "flex";
    list.style.display = "none"
    closse.style.display = "block"
}
closse.onclick = function(){
    boxs.style.display = "none";
    list.style.display = "block"
    closse.style.display = "none"
}