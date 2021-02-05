var makeChar = document.querySelector("#genBtn")
var first = document.querySelector("#name1")
var second = document.querySelector("#name2")

var part1 = ["Marvelous", "Rock", "Fire", "Water", "Wind", "Earth", "Blood", "Rocket", "Infinite", "Divine", "Nitro", "Crimson", "Laughing", "Micro", "Fury", "Fantastic", "Black", "White", "Dark", "Light", "Envious", "Juniper", "The Magnificient", "Putrid", "Dirty", "Autumnal", "The Perfect", "Action", "Tattoo", "Void", "Action", "Harvest", "Legitimate", "Fool's", "Fallen"]
var part2 = ["Fist", "Artist", "Blob", "Jester", "Christ", "Wizard", "Lancer", "Knight", "Puppet Master", "Executioner", "Titan", "Dragon", "Gunner", "Peacemaker", "Druid", "Cleric", "Bard", "Spy", "Colossus", "Rogue", "Magician", "Drifter", "Dog", "Miser", "Operator", "Key", "Icicle", "Keeper", "Actor", "Captain", "Luminary", "Vengeance"]

var makeName = function () {
    first.textContent = part1[Math.floor(Math.random()*part1.length)];
    second.textContent = part2[Math.floor(Math.random()*part2.length)];
}

makeChar.addEventListener("click", makeName)