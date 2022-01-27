alert('Upozorenje! Ovo nije mjerodavan test, svakako je preporuka da se javite svom ljekaru ⚠️');
let s=0;
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
Boolean(a);
Boolean(b);
Boolean(c);
Boolean(d);
Boolean(e);
Boolean(f);
Boolean(g);
Boolean(h);

function prvi()
{
    if(a)
    {
        a=false;
    }
    else
    {
        a=true;
    }
}

function drugi()
{
    if(b)
    {
        b=false;
    }
    else
    {
        b=true;
    }
}
function treci()
{
    if(c)
    {
        c=false;
    }
    else
    {
        c=true;
    }
}
function cetvrti()
{
    if(d)
    {
        d=false;
    }
    else
    {
        d=true;
    }
}
function peti()
{
    if(e)
    {
        e=false;
    }
    else
    {
        e=true;
    }
}

function sesti()
{
    if(f)
    {
        f=false;
    }
    else
    {
        f=true;
    }
}
function sedmi()
{
    if(g)
    {
        g=false;
    }
    else
    {
        g=true;
    }
}
function osmi()
{
    if(h)
    {
        h=false;
    }
    else
    {
        h=true;
    }
}

function rezultat()
{
    s+=17*a + 11*b + 14*c + 17*d + 16*e + 10*f + 7*h+7*h;
    if(s<45)
    {
        document.getElementById("r").innerHTML=s + "% da ste zarazeni virusnom infekcijom korone (nema potrebe za uzbunu)!";
    }
    if(s>=45 && s<=80)
    {
        document.getElementById("r").innerHTML=s + "% da ste zarazeni virusnom infekcijom korone (nema potrebe za uzbunu, ali je bolje posjetiti ljekara)!";
    }
    if(s>80 && s<100)
   {
    document.getElementById("r").innerHTML=s + "% da ste zarazeni virusnom infekcijom korone(PREPORUČEN JE HITAN ODLAZAK LJEKARU!!)";
   }
    s=0;
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
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