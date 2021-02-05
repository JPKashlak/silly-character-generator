var makeChar = document.querySelector("#genBtn")
var first = document.querySelector("#name1")
var second = document.querySelector("#name2")

var part1 = ["Spineless", "Fist", "Marvelous", "Gloomy", "Collapsed", "Swift", "Elaborate", "Misanthropic", "Vermillion", "Emerald", "Sapphire", "Ruby", "Diamond", "Onyx", "Obsidian", "Opal", "Church", "Carnival", "Faceless", "My Dear", "Cantankerous", "Withered", "Torn", "Lost", "Bound", "Angry", "Horse", "The Great", "Dire", "Suave", "Rotten", "Sinister", "Reborn", "Cave", "Unlucky", "The 13th", "Seafaring", "Aquatic", "Sky", "Under", "Sadistic", "Glittering", "Synthwave", "Needle", "Fireworks", "Cold", "The First", "Invisible", "Hot", "Puffy", "Eye-Covered", "Archaic", "Spongy", "Spoiled", "Nuclear", "Man-Eating", "Bursting", "Double", "Triple", "Three-Headed", "Four-Armed", "Forlorn", "Puzzling", "The Best", "Perplexing", "Dreamy", "Puss-Spewing", "Whirling", "Antagonistic", "The Forgotten", "The Mighty", "Morose", "Obsessive", "Smarmy", "The Final", "Chummy", "Rock", "Knife", "Sword", "Psychic", "Pantomime", "The", "Drug-Addled", "Gracious", "Gargantuan", "Leon The", "Paranoid", "Vicious", "Viscous", "Goth", "Symbiotic", "Cosmic", "Drunken", "Penetrating", "Creepy", "Child-Eating", "Critical", "Elemental", "Ruined", "Mindful", "Über", "Gin-Soaked", "Angelic", "Hilarious", "Sweet", "Wanted", "Desirable", "Combustion", "Magnetic", "Holy", "Unholy", "Sqaumous", "Eldritch", "Cyclopean", "Indescribable", "Decadent", "Dauntless", "Lackluster", "Obscure", "Loathsome", "Excited", "Epileptic", "Gallant", "Glowing", "Shining", "Blasphemous", "Expedient", "Embraced", "Defeated", "Distrustful", "The Mad", "Abnormal", "Accursed", "Hexed", "Hideous", "Faithful", "Nameless", "Antiquarian", "Deviant", "Innocent", "Defiled", "Fire", "Water", "Wind", "Criminal", "Earth", "Insect", "Crab", "Bear", "Mountain", "Vampiric", "An Undeniable", "Blood", "Bloody", "Rocket", "Dreaming", "Infinite", "Divine", "Desert", "Nitro", "Cannibal", "Crimson", "Whispering", "Pleasant", "Laughing", "Amorphous", "Hurricane", "Spiritual", "Micro", "Bird", "Tiger", "Fury", "Fantastic", "Black", "White", "Dark", "Light", "Envious", "Juniper", "Nightmare", "The Magnificient", "Putrid", "Dirty", "Icicle", "Autumnal", "Private", "The Perfect", "Vapor", "Action", "American", "Tattoo", "Void", "Vast", "Neglectful", "Majestic", "Forest", "Polluted", "Silent", "Were", "Flawless", "Madcap", "Afro", "Criminal", "Aphrodite's", "Apollo's", "Lonely", "Fun", "Respectful", "Action", "Taurus", "Moon", "Sun", "Elder", "Winged", "Harvest", "Bat", "Decoy", "Molten", "Famous", "Chaos", "Vulcan", "Iron", "Pious", "Bothered", "Gaping", "Star", "Heavenly", "Cyborg", "Neon", "Voracious", "Kamikaze", "Artillery", "Zany", "Duplicitous", "Vague", "Abyss", "Gluttonous", "Entertaining", "Legitimate", "Informal", "Jaded", "False", "Fool's", "Fallen"]
var part2 = ["Centaur", "Fist", "Artist", "Pursuer", "Sentinel", "Clown", "Pig", "Dervish", "Hacker", "Doctor", "Savior", "Ant", "Spider", "Cryptid", "Bishop", "Beast", "Salvation", "Nurse", "Wet Nurse", "Mage", "Seafarer", "Breaker", "Igopogo", "Devil", "Imp", "Presence", "Jackal", "Mother", "Father", "Detective", "Juggernaut", "Carpenter", "Researcher", "Philosopher", "Moth", "Regret", "Man-Eater", "Grocer", "Fiend", "Detritus", "Cad", "Chef", "Homebody", "Acolyte", "Farmer", "Cartographer", "Fortune Teller", "King of Games", "Heart", "Sacrifice", "Crusader", "Paladin", "Oracle", "Vigilante", "Friend", "Scientist", "Eater", "Blob", "Failure", "Wrestler", "Kid", "Prophet", "Liar", "Parasite", "Crab", "Priest", "Gravedigger", "Son", "Daughter", "Adjudicator", "Slave", "Recluse", "Justice", "Judge", "Juggler", "Bastard", "Professional", "Engineer", "Samurai", "Ghost", "Fairy", "Ninja", "Jester", "Hunter", "Christ", "Wizard", "Beauty", "Fox", "Merchant", "Lancer", "Knight", "Puppet Master", "Adonis", "Soldier", "Ringleader", "Chess Master", "Executioner", "Titan", "Dragon", "Bear", "Bandit", "Critic", "Baker", "Half-Breed", "Nihilist", "Singer", "Gunner", "Peacemaker", "Druid", "Cleric", "Bard", "Spy", "Berserker", "Genius", "Bearer", "Enthusiast", "Colossus", "Dreamer", "Moron", "Psychologist", "Rogue", "Magician", "Amalgam", "Drifter", "Dog", "Miser", "Operator", "Keymaster", "Gatekeeper", "Fletcher", "Lumberjack", "Dentist", "Drummer", "Bassist", "Storyteller", "Architect", "Keeper", "Actor", "Captain", "Luminary", "Vengeance", "Witch", "Brawler", "Traveler", "Kaiju", "Ape-Man", "Lizard", "Hands", "Assassin", "Treasure", "Stranger", "Cannibal", "Blacksmith", "Executive", "Traitor", "Necromancer", "Nomad", "Whisperer", "Jack-Of-All-Trades", "Trapper", "Gargoyle", "Sniper", "Golem", "Dancer", "Spirit", "Mathematician", "Slayer", "Savage", "Orphan", "Friar", "Child", "Scorn", "Historian", "Nightmare", "Grunt", "Thespian", "Sailor", "Pygmy", "Dabbler", "Avenger", "Explorer", "Monger", "God", "Hallucination", "Pilot", "Boxer", "Visage", "Cat", "Pedant", "Musician", "Con Artist", "Athlete", "Guard", "Rascal", "Fool", "Mimic", "Student", "Hero", "Barber", "Devourer", "Mountaineer", "Nerd", "Fury", "Otaku", "Rat", "Sinner", "Ranger", "Vagabond", "Seer"]

var makeName = function () {
    first.textContent = part1[Math.floor(Math.random()*part1.length)];
    second.textContent = part2[Math.floor(Math.random()*part2.length)];
}
console.log(part1.length)
console.log(part2.length)
makeChar.addEventListener("click", makeName)