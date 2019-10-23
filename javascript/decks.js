class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}

class Marcard extends Card { //marvel
    constructor(name, description, comic_debut, tv_series, movies, superhuman_powers, arch_enemies, marvelmax,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
    this.comic_debut = comic_debut;
    this.tv_series = tv_series;
    this.movies = movies;
    this.superhuman_powers = superhuman_powers;
    this.arch_enemies = arch_enemies;
    this.marvelmax = marvelmax;
    }
}

class Simcard extends Card { //simpsons
    constructor(name,description,most_loveable,smartest,fattest,biggest_nerd,greatest_anarchist,walk_of_fame,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
    this.most_loveable = most_loveable;
    this.smartest = smartest;
    this.fattest = fattest;
    this.biggest_nerd = biggest_nerd;
    this.greatest_anarchist = greatest_anarchist;
    this.walk_of_fame = walk_of_fame;
    }
}

class Pottercard extends Card { //harry potter
    constructor(name,description,magic,cunning,courage,wisdom,temper,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
        this.magic = magic;
        this.cunning = cunning;
        this.courage = courage;
        this.wisdom = wisdom;
        this.temper = temper;
    }
}

class Familycard extends Card { //family guy
    constructor(name,description,style,quahog_fame,tact,delusions,family_values,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
        this.style = style;
        this.quahog_fame = quahog_fame;
        this.tact = tact;
        this.delusions = delusions;
        this.family_values = family_values;
    }
}

class Dccard extends Card { //dc comics
    constructor(name,description,height,intelligence,strength,speed,fighting_skills,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
        this.height = height;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.fighting_skills = fighting_skills;
    }
}

class Mincard extends Card { //minions
    constructor(name,description,cleverness,bravery,leadership,mischievous,top_trumps_rating,wincounter,losscounter){
    super(name,description,wincounter,losscounter);
        this.cleverness = cleverness;
        this.bravery = bravery;
        this.leadership = leadership;
        this.mischievous = mischievous;
        this.top_trumps_rating = top_trumps_rating;
    }
}



//MARVEL

let blade = new Marcard("Blade", "Cool vampire hunter", 1973, 2, 3, 38, 2, 4, 0, 0);
let bullseye = new Marcard("Bullseye", "cool assasin", 1976, 0, 1, 30, 1, 2, 0,0);
let captainamerica = new Marcard("Captain America", "Good old Cap", 1941, 8, 0, 45, 7, 4 , 0,0);
let carnage = new Marcard("Carnage", "red Vemon" , 1991, 2, 0, 43, 2, 1, 0,0);
let cyclops = new Marcard("Cyclops", "laser eyes", 1963, 5, 3, 43, 5, 4, 0,0);
let daredevil = new Marcard("Daredevil", "Blind lawyer vigilante", 1964, 1, 1, 36, 3, 4, 0,0);
let deadpool = new Marcard("Deadpool", "You know deadpool", 1991, 0, 0, 45, 1, 1, 0,0);
let doctordoom = new Marcard("Doctor Doom", "science and magic bad guy", 1962, 8, 2, 74, 4, 4, 0,0);
let electra = new Marcard("Electra", "femme-fatal/ ninja", 1980, 0, 2, 41, 1, 3, 0,0);
let galactus = new Marcard("Galactus", "eats planets nuff said",1966,3,1,86,5, 3, 0,0);
let ghostrider = new Marcard("Ghost Rider","flaming skull head on a bike..ring any bells?",1972,1,1,48,1,3,0,0);
let greengobil = new Marcard("Green Goblin", "nutcase who hates spierman",1964,3,2,45,1,4,0,0);
let humantorch = new Marcard("Human Torch","Flame On!!",1961,4,2,45,6,4,0,0);
let invisiblewoman = new Marcard("invisible woman","she can go invisible", 1961,5,2,50,6,4,0,0);
let ironman = new Marcard("Iron Man","rich guy with too much time on his hands",1963,7,0,76,7,3,0,0);
let kingpin = new Marcard("Kingpin","big guy",1967,5,1,36,2,3,0,0);
let magneto = new Marcard("Magneto","controls metal", 1963,5,3,62,5,4,0,0);
let misterfantastic = new Marcard("mister fantastic","stretchy guy",1978,3,3,38,2,2,0,0);
let mystique = new Marcard("Mystique","Blue lady, can change look like anyone",1978,3,3,38,2,2,0,0);
let namor = new Marcard("Namor","no idea",1963,4,3,80,4,4,0,0);
let phoenix = new Marcard("Phoenix","well its Phoenix",1963,4,3,80,4,4,0,0);
let professorx = new Marcard("Professor X","wheelechair + baldguy",1963,4,3,40,4,4,0,0);
let sandman = new Marcard("Sandman","made of sand",1966,3,1,76,1,5,0,0);
let silversurfer = new Marcard("Silver Surfer","silver guy fly on a surf board",1966,3,1,76,1,5,0,0);
let storm = new Marcard("Storm","controls weather",1975,4,3,41,4,4,0,0);
let spiderman = new Marcard("Spiderman","its spiderman!!",1962,9,3,45,10,5,0,0);
let hulk = new Marcard("Hulk","Big Green and angry",1962,5,67,4,5,0,0);
let thething = new Marcard("The Thing","It's clobberin' time!",1961,6,2,52,6,4,0,0);
let venom = new Marcard("Venom","makes tobey maguire dance like a tool",1988,2,1,36,1,3,0,0);
let wolverine = new Marcard("Wolverin","Metal Claws!!!",1974,3,3,48,4,5,0,0);


//SIMPSONS

let grandpa = new Simcard("Abraham 'grandpa' Simpson","",68,56,66,76,78,86,0,0);
let apu = new Simcard("Apu Nahasapeemapetilon","",78,96,78,52,88,68,0,0);
let barny = new Simcard("Barney Gumble","",86,50,96,86,74,80,0,0);
let bart = new Simcard("Bart Simpson","",90,78,50,44,98,96,0,0);
let burns = new Simcard("C. Montgomery Burns","",48,92,40,78,90,84,0,0);
let wigum = new Simcard("Chief Wigum","",76,40,98,82,46,72,0,0);
let hibbert = new Simcard("Dr Julius Hibbert","",58,66,88,64,64,46,0,0);
let edna = new Simcard("Edna Krabappel","",48,64,56,62,60,44,0,0);
let willie = new Simcard("Groundskeeper Willie","",62,48,70,66,80,64,0,0);
let homer = new Simcard("Homer Simpson","",92,76,94,48,94,98,0,0);
let itch = new Simcard("Itchy & Scratchy","",72,52,60,56,84,76,0,0);
let krusty = new Simcard("Krusty the clown","",70,86,92,54,86,78,0,0);
let lenny = new Simcard("Lenny & Karl","",82,60,54,94,56,54,0,0);
let lisa = new Simcard("Lisa Simpson","",98,98,48,42,96,94,0,0);
let maggie = new Simcard("Maggie Simpson","",100,54,46,74,60,92,0,0);
let marge = new Simcard("Marge Simpson","",94,94,68,46,62,90,0,0);
let martin = new Simcard("Martin","",80,80,90,70,72,52,0,0);
let millhouse = new Simcard("Milhouse Van Houten","",78,84,74,88,68,62,0,0);
let moe = new Simcard("Moe Szyslak","",76,72,44,72,82,82,0,0);
let ned = new Simcard("Ned Flanders","",52,88,84,98,42,74,0,0);
let nelson = new Simcard("Nelson Muntz","",32,20,67,89,56,39,0,0);
let otto = new Simcard("Otto","",66,58,62,84,76,60,0,0);
let patty = new Simcard("Patty & Selma Bouvier","",50,90,86,50,92,88,0,0);
let skinner = new Simcard("Principal Skinner","",74,64,80,48,70,75,0,0);
let dog = new Simcard("Santas little helper","",96,44,42,60,50,66,0,0);
let twins = new Simcard("Sherri & Terri","",54,82,58,76,66,58,0,0);
let bob = new Simcard("Sideshow bob","",82,62,76,90,54,40,0,0);
let cat = new Simcard("Snowball II","",88,42,52,58,52,56,0,0);
let boys = new Simcard("Todd & Rod Flanders","",60,68,80,96,44,48,0,0);
let smithers = new Simcard("Waylon Smithers","",56,40,82,92,58,42,0,0);

//DC COMICS

let ares = new Dccard("Ares","",108,7,42,9,19,83,0,0);
let artemis = new Dccard("Artemis","",183,5,27,5,15,75,0,0);
let bane = new Dccard("Bane","",203,6,38,6,14,85,0,0);
let beastboy = new Dccard("Beastboy","",172,3,27,4,23,66,0,0);
let blackadams = new Dccard("Black Adam","",183,7,48,17,18,80,0,0);
let catwoman = new Dccard("Catwoman","",170,4,17,6,17,72,0,0);
let cheetah = new Dccard("Cheetah","",175,4,22,17,17,85,0,0);
let cyborg = new Dccard("Cyborg","",196,6,36,4,13,65,0,0);
let donnatroy = new Dccard("Donna Troy","",175,5,35,9,16,74,0,0);
let doomsday = new Dccard("Doomsday","",213,2,50,14,10,85,0,0);
let generalzod = new Dccard("General Zod","",191,5,38,4,13,71,0,0);
let gog = new Dccard("Gog","",191,5,36,10,16,84,0,0);
let hawkgirl = new Dccard("Hakgirl","",167,3,27,7,17,71,0,0);
let hawkman = new Dccard("Hawkman","",186,4,30,8,17,77,0,0);
let hippolyta = new Dccard("Hippolyta","",175,6,24,6,14,70,0,0);
let lexluthor = new Dccard("Lex Luthor","",188,10,20,4,12,63,0,0);
let martianmanhunter = new Dccard("Martian Manhunter","",201,6,46,18,21,85,0,0);
let mrfreeze = new Dccard("Mr Freeze","",183,6,26,5,10,70,0,0);
let nightwing = new Dccard("Nightwing","",177,7,26,6,17,80,0,0);
let plasticman = new Dccard("Plasticman","",186,4,21,4,22,65,0,0);
let poisonivy = new Dccard("Poison Ivy","",167,5,13,4,12,65,0,0);
let powergirl = new Dccard("Powergirl","",170,3,41,10,15,80,0,0);
let redtornado = new Dccard("Red Tornado","",186,5,35,12,22,66,0,0);
let steel = new Dccard("Steel","",201,6,38,7,12,80,0,0);
let superboy = new Dccard("Superboy","",170,3,40,9,14,78,0,0);
let superman = new Dccard("Superman","",191,7,50,19,21,87,0,0);
let theriddler = new Dccard("The Riddler","",186,5,18,4,13,64,0,0);
let twoface = new Dccard("Two Face","",183,4,20,4,12,61,0,0);
let wondergirl = new Dccard("Wondergirl","",166,3,32,12,19,73,0,0);
let wonderwoman = new Dccard("Wonderwoman","",183,7,41,18,19,78,0,0);

//FAMILY GUY

let bertram = new Familycard("Bertram","",15,4,7,29,18,0,0)
let bonnie = new Familycard("Bonnie Swanson","",41,12,16,8,66,0,0)
let brian = new Familycard("Brian Griffin","",31,13,20,18,67,0,0)
let bruce = new Familycard("Bruce","",19,13,14,25,43,0,0)
let carter = new Familycard("Carter pewterschmidt","",43,8,6,19,54,0,0)
let chris = new Familycard("Chris Griffin","",17,10,9,27,63,0,0)
let cleveland = new Familycard("Cleveland Brown","",25,12,11,19,64,0,0)
let death = new Familycard("Death","",16,6,10,21,45,0,0)
let diane = new Familycard("Diane Simmons","",42,15,9,24,58,0,0)
let dr = new Familycard("Dr Hartman","",20,15,6,7,61,0,0)
let evil = new Familycard("Evil Monkey","",14,1,7,30,18,0,0)
let glenn = new Familycard("Glenn Quagmire","",45,14,9,28,36,0,0)
let deaf = new Familycard("Greased up deaf guy","",1,13,0,26,2,0,0)
let herbert = new Familycard("Herbert","",18,11,13,29,14,0,0)
let jake = new Familycard("Jake Tucker","",16,10,6,25,43,0,0)
let jasper = new Familycard("Jasper","",39,8,8,18,59,0,0)
let jillian = new Familycard("Jillian Russell","",41,9,11,27,35,0,0)
let joe = new Familycard("Joe Swanson","",31,15,14,14,66,0,0)
let lois = new Familycard("Lois Griffin","",37,12,17,16,70,0,0)
let meg = new Familycard("Meg griffin","",21,4,12,21,61,0,0)
let mickey = new Familycard("Mickey McFinnegan","",24,4,3,27,25,0,0)
let mort = new Familycard("Mort Goldman","",13,14,6,30,58,0,0)
let neil = new Familycard("Neil Goldman","",8,6,4,21,53,0,0)
let peter = new Familycard("Peter Griffin","",26,14,5,29,63,0,0)
let rupert = new Familycard("Rupert","",9,2,4,21,70,0,0)
let seamus = new Familycard("Seamus","",34,11,8,28,22,0,0)
let stewie = new Familycard("Stewie Griffin","",23,9,18,30,20,0,0)
let giant = new Familycard("The Giant Chicken","",10,6,5,30,11,0,0)
let tom = new Familycard("Tom Tucker","",39,15,10,23,49,0,0)
let tricia = new Familycard("Tricia Takanawa","",33,14,10,12,55,0,0)


//HARRY POTTER

let albus = new Pottercard("Albus Dumbledore","",120,42,49,90,2,0,0)
let bella = new Pottercard("Bellatrix Lestrange","",95,31,10,62,15,0,0)
let blaise = new Pottercard("Blaise Zabini","",40,11,18,25,10,0,0)
let cormac = new Pottercard("Cormac McLaggen","",50,18,20,22,5,0,0)
let dean = new Pottercard("Dean Thomas","",40,10,35,22,4,0,0)
let draco = new Pottercard("Draco Malfoy","",49,28,7,20,11,0,0)
let fenrir = new Pottercard("Fenrir Greyback","",75,30,10,43,13,0,0)
let ginny = new Pottercard("Ginny Weasley","",38,19,45,30,7,0,0)
let greg = new Pottercard("Gregory Goyle","",14,18,6,3,10,0,0)
let harry = new Pottercard("Harry Potter","",82,27,50,55,10,0,0)
let hermoi = new Pottercard("Hermione Granger","",75,26,48,80,6,0,0)
let horace = new Pottercard("Horace Slughorn","",75,26,15,82,8,0,0)
let katie = new Pottercard("Katie Bell","",60,12,20,30,5,0,0)
let lavender = new Pottercard("Lavender Brown","",45,19,22,19,5,0,0)
let luna = new Pottercard("Luna Lovegood","",38,15,45,40,2,0,0)
let minerva = new Pottercard("Minerva McGonagall","",105,34,36,84,8,0,0)
let molly = new Pottercard("Molly Weasley","",75,27,40,65,8,0,0)
let cole = new Pottercard("Mrs Cole","",0,10,20,35,3,0,0)
let narcissa = new Pottercard("Narcissa Malfoy","",65,25,10,30,6,0,0)
let neville = new Pottercard("Neville Longbottom","",50,15,48,30,6,0,0)
let nymph = new Pottercard("Nymphadora Tonks","",65,28,43,50,8,0,0)
let pansy = new Pottercard("Pansy Parkinson","",42,21,18,19,9,0,0)
let remus = new Pottercard("Remus Lupin","",82,19,42,68,4,0,0)
let rom = new Pottercard("Romilda Vane","",45,19,21,23,6,0,0)
let ron = new Pottercard("Ron Weasley","",61,17,47,40,7,0,0)
let rubeus = new Pottercard("Rubeus Hagrid","",12,12,35,11,8,0,0)
let seamus = new Pottercard("Seamus Finnigan","",40,9,25,18,7,0,0)
let severus = new Pottercard("Severus Snape","",95,30,35,72,10,0,0)
let tom = new Pottercard("Tom Riddle","",65,30,20,40,9,0,0)
let vincent = new Pottercard("Vincent Crabbe","",14,18,5,4,9,0,0)


//MINIONS

let ayematie = new Mincard("Aye, Matie","",16,7,42,60,31,0,0)
let bananabanana = new Mincard("Banan Banana","",10,5,31,75,88,0,0)
let battyoverdracula = new Mincard("Battty over Dracula","",15,6,45,70,48,0,0)
let bob = new Mincard("Bob","",27,8,48,50,97,0,0)
let boredsilly = new Mincard("Bored Silly","",10,3,8,25,27,0,0)
let denimdungarees = new Mincard("Denim Dungarees","",30,2,33,64,21,0,0)
let feelingblue = new Mincard("Feeling Blue","",5,6,10,20,32,0,0)
let gettingcloser = new Mincard("Getting Closer","",22,6,40,51,72,0,0)
let inthebigcity = new Mincard("In the big city","",26,4,46,80,39,0,0)
let kevin = new Mincard("Kevin","",28,10,50,42,99,0,0)
let longjourneyahead = new Mincard("Long journey ahead","",18,8,47,28,68,0,0)
let lookingforscarlet = new Mincard("Looking for Scarlet","",13,6,25,74,63,0,0)
let meetscarletoverkill = new Mincard("Meet scarlet Overkill","",27,6,25,30,90,0,0)
let meetingprofessorflux = new Mincard("Meeting Professor Flux","",20,4,27,42,38,0,0)
let peacebrotherminion = new Mincard("Peace, brother minion","",17,5,47,69,34,0,0)
let ruleofthetrex = new Mincard("Rule of tghe T-Rex","",10,10,60,72,62,0,0)
let scarletscastle = new Mincard("Scarlet's castle","",30,7,29,28,87,0,0)
let servingthepharaoh = new Mincard("Serving the Pharaoh","",17,8,50,62,55,0,0)
let strandedinsnow = new Mincard("Stranded in snow","",11,6,25,31,40,0,0)
let stuart = new Mincard("Stuart","",25,9,49,55,98,0,0)
let stuartandco = new Mincard("Stuart & co","",9,3,30,79,33,0,0)
let swimmingtothecity = new Mincard("Swimming to the city!","",12,9,49,73,91,0,0)
let thejourneybegins = new Mincard("The journey begins","",15,4,40,75,45,0,0)
let thequestbegins = new Mincard("The quest begins","",29,10,50,72,100,0,0)
let toorlando = new Mincard("To Orlando","",9,6,45,62,42,0,0)
let tovillaincon = new Mincard("To Villian Con!","",11,7,28,53,56,0,0)
let uhhcaveman = new Mincard("Uhh caveman?","",12,5,55,56,32,0,0)
let viveleminion = new Mincard("Vive le Minion","",19,9,40,63,81,0,0)
let whatwillhappennext = new Mincard("What will happen next?","",25,8,24,70,96,0,0)
let withthemostevil = new Mincard("With the most evil","",28,5,32,40,47,0,0)


