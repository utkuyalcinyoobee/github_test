let utku_div = document.getElementById("utku_div");
let utku_hidden = document.getElementById("utku_hidden");

utku_div.onclick = utku_unhide;
function utku_unhide()
{
    utku_hidden.classList.toggle("hidden");
}

utku_div.onclick = utku_hidden.classList.toggle("hidden");

let yvonne_div = document.getElementById("yvonne_div");
let yvonne_hidden = document.getElementById("yvonne_hidden");
yvonne_div.onclick = yvonne_hidden.classList.toggle("hidden");

let isaac_div = document.getElementById("isaac_div");
let isaac_hidden = document.getElementById("isaac_hidden");
isaac_div.onclick = isaac_hidden.classList.toggle("hidden");


let change_col = document.getElementById("change_nats_col");
let nat_div = document.getElementById("nat_div");

change_col.onclick = nat_div.classList.toggle("nat_toggle_div");
