let utku_div = document.getElementById("utku_div");
let utku_hidden = document.getElementById("utku_hidden");
utku_div.onclick = utku_unhide;
function utku_unhide()
{
    utku_hidden.classList.toggle("hidden");
}