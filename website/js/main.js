function fact(){
    let facts = [];
    facts.push("There are no fun facts about Lubbock ):");
    facts.push("Luca is a die-hard Roger Federer fan. If you do not like Federer, he will cry ):");
    facts.push("Luca is scared of fruit. The random fruit generator he's about to make is scary.");
    facts.push("Luca sucks at coming up with fun facts.");

    let random_fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("fact").innerHTML = random_fact;
}

function number(){
    let random_number = Math.floor(Math.random()*1000);
    document.getElementById("number").innerHTML = random_number;
}

function fruit(){
    let fruits = ["apple", "banana", "kiwi", "orange", "lemon", "watermelon"];

    let random_fruit = fruits[Math.floor(Math.random()*fruits.length)];
    document.getElementById("fruit").innerHTML = random_fruit;
}

function color(){
    let hex = "#"
    for (let i = 0; i < 3; i++){
        let c = Math.floor(Math.random()*256);
        hex += c.toString(16);
    }
    document.getElementById("color").style.backgroundColor = hex;
}