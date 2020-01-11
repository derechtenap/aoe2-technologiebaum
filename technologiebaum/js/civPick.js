var azt = {
    "id": 1,
    "name": "Azteken",
    "typ": "Volk von Mönchen",
    "bonus": "...",
    "uu": "...",
    "team_bonus": "..."
}

var ber = {
    "id": 2,
    "name": "Berber",
}

function changeCiv() {
    var civ;
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    switch(selectedValue) {
        case "azt":
            civ = azt.name;
            break;
        case "ber":
            civ = ber.name;
            break;
        case "bir":
            civ = bir.name;
            break;
        // Weitere Civs fehlen noch
    }
    
    document.getElementById("civ-name").innerHTML = civ;

}