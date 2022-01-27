const mails=[];
function unesi()
    {
        let mail=document.getElementById("mail").value;
        mails.push(mail);
        console.log(mail.toLowerCase());
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