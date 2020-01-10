var azteken = {
    "id": 1,
    "name": "Azteken",
    "toString": function() {
        return this.name;
    }
}

function changeCiv() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    // alert(selectedValue);

    if (selectedValue === "azteken") {
        document.getElementById("civ-name").innerHTML = azteken;
    } else {
        document.getElementById("civ-name").innerHTML = "Kultur";
    }
}