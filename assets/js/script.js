var makeChar = document.querySelector("#genBtn")
var first = document.querySelector("#name1")
var second = document.querySelector("#name2")

var part1 = ["Spineless", "Thirsty", "Typical", "Spinning", "Toy", "Alpha", "Beta", "Omega", "Dino", "Maximum", "Merciful", "Scrambled", "Fist", "Adamant", "Mistaken", "Bloated", "Gun", "Endless", "Xenophobic", "The Ultimate", "Northern", "Southern", "Eastern", "Atomic", "Western", "Polka", "Lunatic", "Demonic", "Lukewarm", "Ardent", "Shaggy", "Buttery", "Pig", "Gelatinous", "Waltzing", "Repulsive", "Ruinous", "Shambling", "Seething", "Bright", "Shark", "Cthonic", "Aegis", "Pagan", "Jovial", "Satanic", "Sandwich", "Salvation", "Shadow", "Vacant", "Spider", "Praying", "Mystery", "Wizened", "Incessant", "Loquacious", "Axe", "Belligerent", "Marvelous", "Haute", "Gloomy", "Collapsed", "Vegan", "Swift", "Doomed", "Dim", "Hopeless", "Elaborate", "Misanthropic", "Vermillion", "Cerulean", "Emerald", "Sapphire", "Ruby", "Topaz", "Diamond", "Onyx", "Obsidian", "Ash", "Opal", "Celestial", "Infernal", "Prismatic", "Rainbow", "Tech", "Flower", "Syzygy", "Influential", "Chimerical", "Church", "Carnival", "Faceless", "Grim", "My Dear", "Cantankerous", "Withered", "Honest", "Blissful", "Homicidal", "Torn", "Lost", "Bound", "Angry", "Horse", "The Great", "Dire", "Suave", "Rotten", "Sinister", "Reborn", "Cave", "Crusty", "Lucky", "Unlucky", "The 13th", "Seafaring", "Aquatic", "Sky", "Under", "Vigilant", "Sadistic", "Glittering", "Synthwave", "Needle", "Martial", "Ravenous", "Wracked", "Cracked", "Cartesian", "Fireworks", "Cold", "Clever", "Panoptic", "Superior", "Emo", "Inferior", "Wronged", "Bearded", "Former", "Retired", "Puny", "Slipshod", "Slapdash", "Clean", "Slick", "Cleansing", "Mud", "Deep", "The First", "Honorary", "Invisible", "Hot", "Puffy", "Eye-Covered", "Adept", "Forceful", "Messy", "Archaic", "Spongy", "Spoiled", "Nuclear", "Man-Eating", "Bursting", "Double", "Reptillian", "Master", "Triple", "Three-Headed", "Four-Armed", "Chimera", "Forlorn", "Reflecting", "Puzzling", "The Best", "Perplexing", "Dreamy", "Puss-Spewing", "Whirling", "Ethos", "Pathos", "Antagonistic", "The Forgotten", "The Mighty", "Morose", "Obsessive", "Smarmy", "The Final", "Chummy", "Rock", "Knife", "Sword", "Psychic", "Pantomime", "The", "Drug-Addled", "Lego", "Gracious", "Genetic", "Masked", "Young", "Ancient", "Tuxedo", "Jingling", "Smooth", "Caustic", "Origami", "Crystal", "Gargantuan", "Leon The", "Paranoid", "Vicious", "Viscous", "Goth", "Symbiotic", "Cosmic", "Noisy", "Melancholy", "Nosy", "Nostalgic", "Drunken", "Penetrating", "Creepy", "Derby", "Child-Eating", "Critical", "Larval", "Melting", "Echo", "Cathedral", "Slate", "Fungal", "Jelly", "Tiny", "Havoc", "Worm", "Belfry", "Opulent", "Toxic", "Poisonous", "Suited", "Magma", "Elemental", "Ruined", "Mindful", "Über", "Gin-Soaked", "Angelic", "Hilarious", "Sweet", "Wanted", "Desirable", "Combustion", "Robot", "Tortured", "Magnetic", "Curious", "Holy", "Unholy", "Sqaumous", "Eldritch", "Hibachi", "Cyclopean", "Treasured", "Amnesiac", "Indescribable", "Short-Sighted", "Decadent", "Dauntless", "Lackluster", "Broken", "Obscure", "Loathsome", "Excited", "Edible", "Simple", "Oedipal", "Epileptic", "Gallant", "Glowing", "Shining", "Progressive", "Blasphemous", "Expedient", "Patchwork", "Embraced", "Defeated", "Fated", "Apocalyptic", "Distrustful", "Chrome", "Golden", "Silver", "Anti-", "The Mad", "Filthy", "Abnormal", "Accursed", "Devious", "Hexed", "Hideous", "Faithful", "Nameless", "Antiquarian", "Deviant", "Gifted", "Innocent", "Crafty", "Defiled", "Fire", "Water", "Wind", "Criminal", "Earth", "Insect", "Crab", "Bear", "Mountain", "Plump", "Vampiric", "An Undeniable", "Blood", "Bloody", "Unremarkable", "Rocket", "Bone", "Skeletal", "Dreaming", "Infinite", "Divine", "Desert", "Nitro", "Cannibal", "Crimson", "Whispering", "Pleasant", "Laughing", "Amorphous", "Freudian", "Boorish", "Hurricane", "Spiritual", "Tribal", "Chittering", "Micro", "Bird", "Tiger", "Scarred", "Scared", "Immortal", "Delirious", "Fury", "Furious", "Petty", "False", "Ersatz", "Gilded", "Cursed", "Feeble", "Near-Sighted", "Downloadable", "Porous", "Scintillating", "Preternatural", "Vulpine", "Azure", "Fantastic", "Twilight", "Contagious", "Oceanic", "Jumbled", "Coddled", "Dark", "Light", "Envious", "Juniper", "Nightmare", "The Magnificient", "Putrid", "Dirty", "Icy", "Autumnal", "Private", "The Perfect", "Vapor", "Action", "American", "Tattoo", "Void", "Vast", "Neglectful", "Majestic", "Forest", "Polluted", "Silent", "Were-", "Flawless", "Madcap", "Afro", "Sublime", "Spiraling", "Criminal", "Aphrodite's", "Apollo's", "Bleak", "Lonely", "Fun", "Respectful", "Action", "Taurus", "Moon", "Sun", "Elder", "Winged", "Bat", "Decoy", "Molten", "Famous", "Chaos", "Vulcan", "Iron", "Pious", "Cyber", "Bothered", "Gaping", "Star", "Heavenly", "Cyborg", "Neon", "Voracious", "Kamikaze", "Artillery", "Zany", "Duplicitous", "Vague", "Abyss", "Gluttonous", "Entertaining", "Legitimate", "Informal", "Jaded", "Fool's", "Fallen"]
var part2 = ["Centaur", "Fist", "Artist", "Pursuer", "Director", "Thief", "Designer", "Choreographer", "Sentinel", "Warrior", "Bartender", "Soprano", "Alto", "Tenor", "Baritone", "Butler", "Novelist", "Queen", "King", "Guard", "Maid", "Sommelier", "Acrobat", "Diver", "Illustrator", "Statistician", "Magpie", "Construct", "Champion", "Scrivener", "Fisherman", "Heron", "Husk", "Sheriff", "Haunt", "Aunt", "Virus", "Uncle", "Luchador", "Gambler", "Clown", "Lunatic", "Centurion", "Dervish", "Hacker", "Doctor", "Savior", "Saint", "Ant", "Shade", "Chocolatier", "Cryptid", "Escape Artist", "Chiropractor", "Choirmaster", "Prey", "Target", "Bishop", "Beast", "Nurse", "Officer", "Wet Nurse", "Mage", "Believer", "Seafarer", "Breaker", "Fashionista", "Igopogo", "Devil", "Imp", "Egomaniac", "Statue", "Megalomaniac", "Presence", "Jackal", "Bullfighter", "Butcher", "Mother", "Father", "Detective", "Juggernaut", "Carpenter", "Researcher", "Heretic", "Philosopher", "Therapist", "Paradox", "Moth", "Regret", "Man-Eater", "Grocer", "Fiend", "Detritus", "Cad", "Gremlin", "Duke", "Duchess", "Chef", "Homebody", "Acolyte", "Cartoonist", "Farmer", "Cartographer", "Fortune Teller", "King of Games", "Heart", "Sacrifice", "Crusader", "Paladin", "Oracle", "Vigilante", "Friend", "Scientist", "Eater", "Blob", "Failure", "Mortal", "Wrestler", "Kid", "Prophet", "Liar", "Parasite", "Crab", "Priest", "Gravedigger", "Son", "Daughter", "Adjudicator", "Professor", "Lurker", "Watcher", "Assistant", "Politician", "Candyman", "Grifter", "Slave", "Recluse", "Justice", "Judge", "Juggler", "Bastard", "Zookeeper", "Professional", "Engineer", "Samurai", "Rocker", "Punk", "Debutante", "Cadaver", "Breakdancer", "Ghost", "Spokesman", "Fairy", "Ninja", "Jester", "Hunter", "Christ", "Wizard", "Beauty", "Secretary", "Fox", "Merchant", "Lancer", "Knight", "Puppet Master", "Adonis", "Mastermind", "Soldier", "Ringleader", "Chess Master", "Executioner", "Titan", "Dragon", "Bandit", "Critic", "Baker", "Half-Breed", "Pontiff", "Nihilist", "Singer", "Gunslinger", "Peacemaker", "Terror", "Druid", "Cleric", "Gymnast", "Bard", "Spy", "Berserker", "Stalker", "Genius", "Bearer", "Enthusiast", "Torturer", "Colossus", "Dreamer", "Moron", "Psychologist", "Rogue", "Cosmonaut", "Magician", "Amalgam", "Talent", "Drifter", "Dog", "Miser", "Romantic", "Operator", "Keymaster", "Gatekeeper", "Pharaoh", "Sphinx", "Pyromancer", "Shapeshifter", "Fletcher", "Lumberjack", "Dentist", "Drummer", "Bassist", "Storyteller", "Lepur", "Escort", "Conductor", "Wordsmith", "Mayor", "Viper", "Victim", "Cripple", "Henchman", "Trickster", "Worshiper", "Midshipman", "Architect", "Keeper", "Actor", "Captain", "Luminary", "Echo", "Vengeance", "Witch", "Brawler", "Traveler", "Kaiju", "Ape-Man", "Lizard", "Surgeon", "Janitor", "Fixer", "Postman", "Manticore", "Assailant", "Cultist", "Conspiracy Theorist", "Tinkerer", "Hands", "Conqueror", "Homunculus", "Prisoner", "Assassin", "Dawnbringer", "Barista", "Sous Chef", "Promoter", "Librarian", "Monk", "Musketeer", "Warlock", "Stranger", "Cannibal", "Blacksmith", "Executive", "Traitor", "Programmer", "Necromancer", "Nomad", "Witchdoctor", "Alchemist", "Whisperer", "Jack-Of-All-Trades", "Trapper", "Gargoyle", "Sniper", "Golem", "Dancer", "Spirit", "Mathematician", "Slayer", "Savage", "Orphan", "Friar", "Child", "Scorn", "Historian", "Nightmare", "Lion Tamer", "Killer", "Poacher", "Resurrectionist", "Grunt", "Thespian", "Sailor", "Pygmy", "Dabbler", "Box", "Avenger", "Explorer", "Monger", "God", "Hallucination", "Pilot", "Boxer", "Prostitute", "Angel", "Visage", "Cat", "Pedant", "Harvester", "Author", "Skeleton", "Poet", "Rookie", "Attendent", "Recruit", "Fry Cook", "Musician", "Con Artist", "Athlete", "Gator", "Prince", "Princess", "Rascal", "Inventor", "Veteran", "Everyman", "Brewmaster", "Stuntman", "Private Investigator", "Android", "Fool", "Chimney Sweep", "Mimic", "Crier", "Horseman", "Student", "Hero", "Barber", "Devourer", "Mountaineer", "Client", "Nerd", "Blowhard", "Gumshoe", "Mistake", "Accident", "Fury", "Otaku", "Theorist", "Abomination", "Roaster", "Rat", "Unit", "Sinner", "Ranger", "Vagabond", "Seer", "Coder", "Arborist"]

var makeName = function () {
    first.textContent = part1[Math.floor(Math.random()*part1.length)];
    second.textContent = part2[Math.floor(Math.random()*part2.length)];
}
console.log(part1.length)
console.log(part2.length)
makeChar.addEventListener("click", makeName)