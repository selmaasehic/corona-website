function hideIcon(){
    var icon = document.getElementById("icon");
    var navigation = document.getElementById("navigation");
    icon.setAttribute("style","display:none;");
    navigation.classList.remove("hide");
}
function showIcon(){
    var icon = document.getElementById("icon");
    var navigation = document.getElementById("navigation");
    icon.setAttribute("style","display:block;");
    navigation.classList.add("hide");
}