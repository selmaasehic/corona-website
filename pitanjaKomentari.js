function getText(){
    var newText = document.getElementById("newCommentArea").value;
    document.getElementById("com1").innerHTML += newText;
    var comment = document.getElementById("com11");
    var show = document.getElementById("show");
    comment.setAttribute("style", "display:block;");
    show.classList.add("hide");
}
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

 