class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}

class Marcard extends Card {
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

class Simcard extends Card {
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


// const Card1 =function(name, description, comic_debut, tv_series, movies, superhuman_powers, arch_enemies, marvelmax,wincounter,losscounter) {
//     this.name = name
//     this.description = description
//     this.comic_debut = comic_debut
//     this.tv_series = tv_series
//     this.movies = movies
//     this.superhuman_powers = superhuman_powers
//     this.arch_enemies = arch_enemies
//     this.marvelmax = marvelmax
//     this.wincounter = wincounter
//     this.losscounter = losscounter
// }
// const Cards2 = function(name,description,most_loveable,smartest,fattest,biggest_nerd,greatest_anarchist,walk_of_fame,wincounter,losscounter){
//     this.name = name
//     this.description = description
//     this.most_loveable = most_loveable
//     this.smartest = smartest
//     this.fattest = fattest
//     this.biggest_nerd = biggest_nerd
//     this.greatest_anarchist = greatest_anarchist
//     this.walk_of_fame = walk_of_fame
//     this.wincounter = wincounter
//     this.losscounter = losscounter
// }
let playingdeck = [];
let shuffledeck = [];
let simpsons = [];
let marvelmax = [];
let deck1 = [];
let deck2 = [];
let choice;
let deck;
let action1;
let action2;
let drawtype;
let cutcard;
let sortcard;
let item1;
let simdraw1;
let mardraw1;
let carddrawn1;
let carddrawn2;
let drawpile = [];

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
marvelmax = [
    blade,
    bullseye,
    captainamerica,
    carnage,
    cyclops,
    daredevil,
    deadpool,
    doctordoom,
    electra,
    galactus,
    ghostrider,
    greengobil,
    humantorch,
    invisiblewoman,
    ironman,
    kingpin,
    magneto,
    misterfantastic,
    mystique,
    namor,
    phoenix,
    professorx,
    sandman,
    silversurfer,
    storm,
    spiderman,
    hulk,
    thething,
    venom,
    wolverine,
]
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
simpsons = [
    grandpa,
    apu,
    barny,
    bart,
    burns,
    wigum,
    hibbert,
    edna,
    willie,
    homer,
    itch,
    krusty,
    lenny,
    lisa,
    maggie,
    marge,
    martin,
    millhouse,
    moe,
    ned,
    nelson,
    otto,
    patty,
    skinner,
    dog,
    twins,
    bob,
    cat,
    boys,
    smithers,
]

let game = function(){
    alert("How about a game of top trumps?")
    deck = prompt(`Would you like to use (1) simpsons  or (2) marvel    1 or 2 `)
    if (deck == "1"){
        playingdeck = simpsons;
        drawtype = "simdraw1";
        alert("ok lets use the simpsons deck")
    }
    else if (deck == "2"){
        playingdeck = marvelmax;
        drawtype = "mardraw1";
        alert("ok lets use the marvel deck")
    }
    else {
        alert("please choose 1 or 2 ")
        deck = prompt(`Would you like to use (1) simpsons  or (2) marvel    1 or 2 `)

        
    }
    let deckshuffle = function(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
          
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
    }
    
    playingdeck = deckshuffle(playingdeck)

    deck1 = playingdeck.splice(0,14)
    deck2 = playingdeck.splice(0,14)


    let mardraw = function(){
        if(deck1.length == 0 ){
            {alert("You have no more cards Game over you lose")};
        }
        carddrawn1 = deck1.shift()
        carddrawn2 = deck2.shift()
    alert(`Your card is ${carddrawn1.name}     --:((${carddrawn1.description})):--       wins- ${carddrawn1.wincounter} / loses- ${carddrawn1.losscounter} `)
        alert("Lets take a look at your hero")
        alert(`${carddrawn1.name} Comic book debut - ${carddrawn1.comic_debut}, TV series - ${carddrawn1.tv_series}, Movies - ${carddrawn1.movies}, Superhuman power ${carddrawn1.superhuman_powers}, Arch enemies - ${carddrawn1.arch_enemies}, Marvel max ${carddrawn1.marvelmax}`)
     choice = prompt(`${carddrawn1.name}               would you like to use (1)comic debut -  ${carddrawn1.comic_debut}, (2)tv series - ${carddrawn1.tv_series}, (3) movies - ${carddrawn1.movies}, (4) superhuman powers - ${carddrawn1.superhuman_powers}, (5) arch enemies - ${carddrawn1.arch_enemies}, (6)marvelmax - ${carddrawn1.marvelmax}`)
        if (choice == 1){
            action1 = carddrawn1.comic_debut
            action2 = carddrawn2.comic_debut
            alert(`you choose comic debut ${carddrawn1.comic_debut}`)
            }
        else if (choice == 2){
            action1 = carddrawn1.tv_series
            action2 = carddrawn2.tv_series
            alert(`you choose tv series ${carddrawn1.tv_series}`)
        }
        else if (choice == 3){
            action1 = carddrawn1.movies
            action2 = carddrawn2.movies
            alert(`you choose movies ${carddrawn1.movies}`)
        }
        else if (choice == 4){
            action1 = carddrawn1.superhuman_powers
            action2 = carddrawn2.superhuman_powers
            alert(`you choose superhuman powers ${carddrawn1.superhuman_powers}`)
        }
        else if (choice == 5){
            action1 = carddrawn1.arch_enemies
            action2 = carddrawn2.arch_enemies
            alert(`you choose arch enemies ${carddrawn1.arch_enemies}`)
        }
        else if (choice == 6){
            action1 = carddrawn1.marvelmax
            action2 = carddrawn2.marvelmax
            alert(`you choose marvelmax ${carddrawn1.marvelmax}`)
        }
        else{
            alert("please try again") 
            choice = prompt(`${carddrawn1}               would you like to use (1)comic debut, (2)tv series, (3) movies, (4) superhuman powers, (5) arch enemies, (6)marvelmax??`)

        }
        compare()
    }
    let simdraw = function(){
        if(deck1.length == 0 ){
            {alert("You have no more cards Game over you lose")};
        }
        carddrawn1 = deck1.shift();
        carddrawn2 = deck2.shift();
        alert(`Your card is ${carddrawn1.name}  Wins - ${carddrawn1.wincounter} / Loses - ${carddrawn1.losscounter}`)
        alert("Lets take a look at your Simpson character")
        alert(`${carddrawn1.name}, most loveable - ${carddrawn1.most_loveable}, smartest - ${carddrawn1.smartest}, fattest - ${carddrawn1.fattest}, biggest nerd - ${carddrawn1.biggest_nerd}, greatest anarchist - ${carddrawn1.greatest_anarchist}, walk of fame - ${carddrawn1.walk_of_fame} `)
        choice = prompt(`(${carddrawn1.name})      would you like to use   (1)most loveable ${carddrawn1.most_loveable}, (2) smartest ${carddrawn1.smartest} , (3) fattest ${carddrawn1.fattest}, (4) biggest nerd ${carddrawn1.biggest_nerd}, (5) greatest anarchist ${carddrawn1.greatest_anarchist}, (6) walk of fame ${carddrawn1.walk_of_fame} `)
        if (choice == 1){
            action1 = carddrawn1.most_loveable
            action2 = carddrawn2.most_loveable
            alert(`you choose most loveable ${carddrawn1.most_loveable}`)
        }
        else if (choice == 2){
            action1 = carddrawn1.smartest
            action2 = carddrawn2.smartest
            alert(`you choose smartest ${carddrawn1.smartest}`)
        }
        else if (choice == 3){
            action1 = carddrawn1.fattest
            action2 = carddrawn2.fattest
            alert(`you choose fattest ${carddrawn1.fattest} `)
        }
        else if (choice == 4){
            action1 = carddrawn1.biggest_nerd
            action2 = carddrawn2.biggest_nerd
            alert(`you choose biggest nerd ${carddrawn1.biggest_nerd}`)
        }
        else if (choice == 5){
            action1 = carddrawn1.greatest_anarchist
            action2 = carddrawn2.greatest_anarchist
            alert(`you choose greatest anarchist ${carddrawn1.greatest_anarchist}`)
        }
        else if (choice == 6){
            action1 = carddrawn1.walk_of_fame
            action2 = carddrawn2.walk_of_fame
            alert(`you choose walk of fame ${carddrawn1.walk_of_fame}`)
        }
        else{
            alert("please try again") 
            choice = prompt(`(${carddrawn1.name})      would you like to use   (1)most loveable ${carddrawn1.most_loveable}, (2) smartest ${carddrawn1.smartest} , (3) fattest ${carddrawn1.fattest}, (4) biggest nerd ${carddrawn1.biggest_nerd}, (5) greatest anarchist ${carddrawn1.greatest_anarchist}, (6) walk of fame ${carddrawn1.walk_of_fame} `)

        }
        compare()
        
    }
    let compare = function(){
        alert(` the other player has ${carddrawn2.name}`)
        alert(` ${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}`)
        if(drawtype == "mardraw1" && choice == "1" && action1 < action2){
            alert(`your debut year is lower you win !!`)
            carddrawn1.wincounter++
            carddrawn2.losscounter++
            deck1.push(carddrawn2)
    
        }
        else if (drawtype == "mardraw1" && choice == "1" && action1 > action2){
            alert(`your debut year is higher you lose !!`)
            carddrawn2.wincounter++
            carddrawn1.losscounter++
            deck2.push(carddrawn1)
    
        }
        else if (action1 > action2){
            alert(`YOU WIN !!${carddrawn1.name} winner`)
            carddrawn1.wincounter++
            carddrawn2.losscounter++
            deck1.push(carddrawn2)
            draw(deck1)
        }
        else if (action1 == action2){
            drawpile.push(carddrawn1)
            drawpile.push(carddrawn2)
            alert("its a draw the cards go in the middle")
            alert("new cards for everyone!!")
        }
        else {
            alert(`YOU LOSE !!${carddrawn2.name} winner!!`)
            carddrawn2.wincounter++
            carddrawn1.losscounter++
            deck2.push(carddrawn1)
            draw(deck2)
        }
        and()
        
    
    }


    let draw = function(deck){
        for(let i = 0; i <drawpile.length;i++){
            deck.push(i)
        }
    }
    // let drawwin = function(){
    //     for(let i = 0; i <drawpile.length;i++){
    //         deck1.push(i)
    //     }
    // }
    // let drawlose = function(){
    //     for(let i = 0;i <drawpile.length;i++){
    //         deck2.push(i)
    //     }
    // }
    let and = function(){
        if(deck1.length > 0 && drawtype == "mardraw1"){
            mardraw()
        }
        else if (deck1.length > 0 && drawtype == "simdraw1"){
            simdraw()
        }
        else {
            alert("all your cards are gone")
            alert("you lose")
        }
        console.log(deck1.length)
    }
    if (drawtype == "mardraw1"){
        mardraw()
    }
    else if (drawtype == "simdraw1"){
        simdraw()
    }

}


game()