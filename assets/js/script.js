var makeChar = document.querySelector("#genBtn")
var first = document.querySelector("#name1")
var second = document.querySelector("#name2")

var part1 = ["Marvelous", "Rock", "Psychic", "The", "Gracious", "Gargantuan", "Leon The", "Paranoid", "Vicious", "Viscous", "Goth", "Symbiotic", "Cosmic", "Drunken", "Penetrating", "Elemental", "Mind", "Über", "Angelic", "Combustion", "Magnetic", "Unholy", "Deviant", "Innocent", "Defiled", "Fire", "Water", "Wind", "Criminal", "Earth", "Insect", "Crab", "Bear", "Mountain", "Vampiric", "Blood", "Rocket", "Dreaming", "Infinite", "Divine", "Nitro", "Crimson", "Laughing", "Micro", "Bird", "Tiger", "Fury", "Fantastic", "Black", "White", "Dark", "Light", "Envious", "Juniper", "The Magnificient", "Putrid", "Dirty", "Icicle", "Autumnal", "Private", "The Perfect", "Vapor", "Action", "American", "Tattoo", "Void", "Flawless", "Afro", "Criminal", "Aphrodite's", "Lonely", "Fun", "Respectful", "Action", "Taurus", "Moon", "Sun", "Winged", "Harvest", "Decoy", "Chaos", "Vulcan", "Iron", "Gaping", "Star", "The Great", "Heavenly", "Abyss", "Gluttonous", "Legitimate", "False", "Fool's", "Fallen"]
var part2 = ["Fist", "Artist", "Hacker", "Blob", "Failure", "Sponge", "Wrestler", "Kid", "Parasite", "Crab", "Priest", "Adjudicator", "Judge", "Bastard", "Professional", "Engineer", "Samurai", "Fairy", "Ninja", "Jester", "Hunter", "Christ", "Wizard", "Beauty", "Fox", "Merchant", "Lancer", "Knight", "Puppet Master", "Executioner", "Titan", "Dragon", "Bear", "Gunner", "Peacemaker", "Druid", "Cleric", "Bard", "Spy", "Bearer", "Colossus", "Dreamer", "Psychologist", "Rogue", "Magician", "Drifter", "Dog", "Miser", "Operator", "Key", "Keeper", "Actor", "Captain", "Luminary", "Vengeance", "Witch", "Brawler", "Traveler", "Kaiju", "Ape-Man", "Lizard", "Hands", "Treasure", "Stranger", "Blacksmith", "Executive", "Traitor", "Necromancer", "Jack-Of-All-Trades", "Trapper", "Gargoyle", "Sniper", "Golem", "Dancer", "Mathematician", "Slayer", "Savage", "Orphan", "Friar", "Child", "Scorn", "Pygmy", "Explorer", "Monger"]

var makeName = function () {
    first.textContent = part1[Math.floor(Math.random()*part1.length)];
    second.textContent = part2[Math.floor(Math.random()*part2.length)];
}

makeChar.addEventListener("click", makeName)