function randomColor() {
    let teaColor = ["Black Tea", "Green Tea", "White Tea", "Yellow Tea", "Red Tea"];
    return teaColor[Math.floor(Math.random() * teaColor.length)];
}

function randomAdditive() {
    let teaAdditives = ["Cinnamon", "Pepper", "Raspberry", "Strawberry", "Ginger", "Apple", "Orange Zest", "Lemon Zest", "Peppermint","Clove", "Cardamom", "Cherry", "Red Currant", "Mango", "Rosehip"];
    return teaAdditives[Math.floor(Math.random() * teaAdditives.length)];
    }
document.getElementById("button").onclick = function() {randomTea()};

function randomTea() {
   document.getElementById("result").innerHTML = randomColor() + ", " + randomAdditive() + ", " + randomAdditive();
}
