var makeChar = document.querySelector("#genBtn")
var first = document.querySelector("#name1")
var second = document.querySelector("#name2")

var part1 = ["Marvelous", "Rock", "Psychic", "Paranoid", "Symbiotic", "Drunken", "Penatrating", "Elemental", "Mind", "Über", "Angelic", "Combustion", "Magnetic", "Unholy", "Deviant", "Innocent", "Defiled", "Fire", "Water", "Wind", "Criminal", "Earth", "Insect", "Crab", "Vampiric", "Blood", "Rocket", "Infinite", "Divine", "Nitro", "Crimson", "Laughing", "Micro", "Fury", "Fantastic", "Black", "White", "Dark", "Light", "Envious", "Juniper", "The Magnificient", "Putrid", "Dirty", "Icicle", "Autumnal", "The Perfect", "Action", "American", "Tattoo", "Void", "Aphrodite's", "Lonely", "Action", "Harvest", "Legitimate", "Fool's", "Fallen"]
var part2 = ["Fist", "Artist", "Hacker", "Blob", "Failure", "Sponge", "Kid", "Parasite", "Crab", "Adjudicator", "Judge", "Bastard", "Engineer", "Samurai", "Fairy", "Ninja", "Jester", "Hunter", "Christ", "Wizard", "Beauty", "Fox", "Merchant", "Lancer", "Knight", "Puppet Master", "Executioner", "Titan", "Dragon", "Gunner", "Peacemaker", "Druid", "Cleric", "Bard", "Spy", "Bearer", "Colossus", "Rogue", "Magician", "Drifter", "Dog", "Miser", "Operator", "Key", "Keeper", "Actor", "Captain", "Luminary", "Vengeance", "Witch", "Brawler", "Traveler", "Kaiju", "Ape-Man", "Stranger"]

var makeName = function () {
    first.textContent = part1[Math.floor(Math.random()*part1.length)];
    second.textContent = part2[Math.floor(Math.random()*part2.length)];
}

makeChar.addEventListener("click", makeName)