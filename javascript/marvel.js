class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Marcard extends Card { //marvel
    constructor(name, description, comic_debut, tv_series, movies, superhuman_powers, arch_enemies, marvelmax,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
    this.comic_debut = comic_debut;
    this.tv_series = tv_series;
    this.movies = movies;
    this.superhuman_powers = superhuman_powers;
    this.arch_enemies = arch_enemies;
    this.marvelmax = marvelmax;
    this.pic = pic;
    }
}
let mardeck = [
new Marcard("Blade", "Cool vampire hunter", 1973,2,3,38,2,4,0,0,"blade"),
new Marcard("Bullseye", "cool assasin", 1976, 0, 1, 30, 1, 2, 0,0,"bulls"),
new Marcard("Captain America", "Good old Cap", 1941, 8, 0, 45, 7, 4 , 0,0,"cap"),
new Marcard("Carnage", "red Vemon" , 1991, 2, 0, 43, 2, 1, 0,0,"car"),
new Marcard("Cyclops", "laser eyes", 1963, 5, 3, 43, 5, 4, 0,0,"cyc"),
new Marcard("Daredevil", "Blind lawyer vigilante", 1964, 1, 1, 36, 3, 4, 0,0,"dar"),
new Marcard("Deadpool", "You know deadpool", 1991, 0, 0, 45, 1, 1, 0,0,"dea"),
new Marcard("Doctor Doom", "science and magic bad guy", 1962, 8, 2, 74, 4, 4, 0,0,"doc"),
new Marcard("Electra", "femme-fatal/ ninja", 1980, 0, 2, 41, 1, 3, 0,0,"ele"),
new Marcard("Galactus", "eats planets nuff said",1966,3,1,86,5, 3, 0,0,"gal"),
new Marcard("Ghost Rider","flaming skull head on a bike..ring any bells?",1972,1,1,48,1,3,0,0,"gho"),
new Marcard("Green Goblin", "nutcase who hates spierman",1964,3,2,45,1,4,0,0,"gre"),
new Marcard("Human Torch","Flame On!!",1961,4,2,45,6,4,0,0,"hum"),
new Marcard("invisible woman","she can go invisible", 1961,5,2,50,6,4,0,0,"inv"),
new Marcard("Iron Man","rich guy with too much time on his hands",1963,7,0,76,7,3,0,0,"iro"),
new Marcard("Kingpin","big guy",1967,5,1,36,2,3,0,0,"kin"),
new Marcard("Magneto","controls metal", 1963,5,3,62,5,4,0,0,"mag"),
new Marcard("mister fantastic","stretchy guy",1978,3,3,38,2,2,0,0,"mis"),
new Marcard("Mystique","Blue lady, can change look like anyone",1978,3,3,38,2,2,0,0,"mys"),
new Marcard("Namor","no idea",1963,4,3,80,4,4,0,0,"nam"),
new Marcard("Phoenix","well its Phoenix",1963,4,3,80,4,4,0,0,"pho"),
new Marcard("Professor X","wheelechair + baldguy",1963,4,3,40,4,4,0,0,"pro"),
new Marcard("Sandman","made of sand",1966,3,1,76,1,5,0,0,"san"),
new Marcard("Silver Surfer","silver guy fly on a surf board",1966,3,1,76,1,5,0,0,"sil"),
new Marcard("Storm","controls weather",1975,4,3,41,4,4,0,0,"sto"),
new Marcard("Spiderman","its spiderman!!",1962,9,3,45,10,5,0,0,"the"),
new Marcard("Hulk","Big Green and angry",1962,5,1,67,4,5,0,0,"theh"),
new Marcard("The Thing","It's clobberin' time!",1961,6,2,52,6,4,0,0,"thi"),
new Marcard("Venom","makes tobey maguire dance like a tool",1988,2,1,36,1,3,0,0,"ven"),
new Marcard("Wolverin","Metal Claws!!!",1974,3,3,48,4,5,0,0,"wol"),
]
let playingdeck = [];
let deck1 = [];
let deck2 = [];
let action1;
let action2;
let carddrawn1;
let carddrawn2;
let drawpile = [];
const home = document.getElementById("home");
const drawbutton = document.getElementById("draw");
const comicbutton = document.getElementById("comic")
const tvbutton = document.getElementById("tv")
const moviesbutton = document.getElementById("movies")
const superbutton = document.getElementById("super")
const archbutton = document.getElementById("arch")
const Marvelbutton = document.getElementById("Marvel")
playingdeck = mardeck;
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
deck1 = playingdeck.splice(0,15)
deck2 = playingdeck.splice(0,15)
let mardraw = function(){
    if(deck2.length == 0 ){
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/marvelmaxback.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    display2()
    document.getElementById("comic").style.opacity = 1
    document.getElementById("tv").style.opacity = 1
    document.getElementById("movies").style.opacity = 1
    document.getElementById("super").style.opacity = 1
    document.getElementById("arch").style.opacity = 1
    document.getElementById("Marvel").style.opacity = 1
    document.getElementById("description").innerHTML = `${carddrawn1.name}`
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`
}
comicbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.comic_debut
    action2 = carddrawn2.comic_debut
    compare()
    display()
})
tvbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.tv_series
    action2 = carddrawn2.tv_series
    compare()
    display()
})
moviesbutton.addEventListener("click",()=>{
    action1 = carddrawn1.movies
    action2 = carddrawn2.movies
    compare()
    display()
})
superbutton.addEventListener("click",()=>{
    action1 = carddrawn1.superhuman_powers
    action2 = carddrawn2.superhuman_powers
    compare()
    display()
})
archbutton.addEventListener("click",()=>{
    action1 = carddrawn1.arch_enemies
    action2 = carddrawn2.arch_enemies
    compare()
    display()
})
Marvelbutton.addEventListener("click",()=>{
    action1 = carddrawn1.marvelmax
    action2 = carddrawn2.marvelmax
    compare()
    display()
})
const display2 = ()=>{
    document.getElementById("comic").style.display = "block"
    document.getElementById("tv").style.display = "block"
    document.getElementById("movies").style.display = "block"
    document.getElementById("super").style.display = "block"
    document.getElementById("arch").style.display = "block"
    document.getElementById("Marvel").style.display = "block"
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("comic").style.display = "none"
    document.getElementById("tv").style.display = "none"
    document.getElementById("movies").style.display = "none"
    document.getElementById("super").style.display = "none"
    document.getElementById("arch").style.display = "none"
    document.getElementById("Marvel").style.display = "none"
}
const coverpic = () => {
        document.getElementById("showncard1").src = `../decks/marvel/${carddrawn1.pic}.jpg`
}

const secondcoverpic = () => {
        document.getElementById("showncard2").src = `../decks/marvel/${carddrawn2.pic}.jpg`
    }
let compare = function(){
    secondcoverpic()
    document.getElementById("description").innerHTML = `${carddrawn1.name} VS ${carddrawn2.name}`
    if(action1 == carddrawn1.comic_debut && action1 < action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU WIN !!!`
        deck1.push(carddrawn2)
        deck1.push(carddrawn1)
    }
    else if (action1 == carddrawn1.comic_debut && action1 > action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU LOSE !!!`
        deck2.push(carddrawn1)
        deck2.push(carddrawn2)
    }
    else if (action1 > action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU WIN !!!`
        deck1.push(carddrawn2)
        deck1.push(carddrawn1)
        draw(deck1)
        console.log('win',drawpile)

    }
    else if (action1 == action2){
        drawpile.push(carddrawn1)
        drawpile.push(carddrawn2)
        console.log('draw',drawpile)
        document.getElementById("carddescription").innerHTML = "its a draw the cards go in the middle - new cards for everyone!!"
    }
    else {
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU LOSE !!!`
        deck2.push(carddrawn1)
        deck2.push(carddrawn2)
        draw(deck2)
    }
}
let draw = function(deck){
    for(let i = 0; i <drawpile.length;i++){
        deck.splice(i)
        // console.log(drawpile)
    }
}
home.addEventListener("click", ()=>{
    window.location.replace("../htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    mardraw()
    document.getElementById("draw").style.display = "none"
})