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
new Marcard("Blade", "Cool vampire hunter", 1973,2,3,38,2,4,0,0,1),
new Marcard("Bullseye", "cool assasin", 1976, 0, 1, 30, 1, 2, 0,0,2),
new Marcard("Captain America", "Good old Cap", 1941, 8, 0, 45, 7, 4 , 0,0,3),
new Marcard("Carnage", "red Vemon" , 1991, 2, 0, 43, 2, 1, 0,0,4),
new Marcard("Cyclops", "laser eyes", 1963, 5, 3, 43, 5, 4, 0,0,5),
new Marcard("Daredevil", "Blind lawyer vigilante", 1964, 1, 1, 36, 3, 4, 0,0,6),
new Marcard("Deadpool", "You know deadpool", 1991, 0, 0, 45, 1, 1, 0,0,7),
new Marcard("Doctor Doom", "science and magic bad guy", 1962, 8, 2, 74, 4, 4, 0,0,8),
new Marcard("Electra", "femme-fatal/ ninja", 1980, 0, 2, 41, 1, 3, 0,0,9),
new Marcard("Galactus", "eats planets nuff said",1966,3,1,86,5, 3, 0,0,10),
new Marcard("Ghost Rider","flaming skull head on a bike..ring any bells?",1972,1,1,48,1,3,0,0,11),
new Marcard("Green Goblin", "nutcase who hates spierman",1964,3,2,45,1,4,0,0,12),
new Marcard("Human Torch","Flame On!!",1961,4,2,45,6,4,0,0,13),
new Marcard("invisible woman","she can go invisible", 1961,5,2,50,6,4,0,0,14),
new Marcard("Iron Man","rich guy with too much time on his hands",1963,7,0,76,7,3,0,0,15),
new Marcard("Kingpin","big guy",1967,5,1,36,2,3,0,0,16),
new Marcard("Magneto","controls metal", 1963,5,3,62,5,4,0,0,17),
new Marcard("mister fantastic","stretchy guy",1978,3,3,38,2,2,0,0,18),
new Marcard("Mystique","Blue lady, can change look like anyone",1978,3,3,38,2,2,0,0,19),
new Marcard("Namor","no idea",1963,4,3,80,4,4,0,0,20),
new Marcard("Phoenix","well its Phoenix",1963,4,3,80,4,4,0,0,21),
new Marcard("Professor X","wheelechair + baldguy",1963,4,3,40,4,4,0,0,22),
new Marcard("Sandman","made of sand",1966,3,1,76,1,5,0,0,23),
new Marcard("Silver Surfer","silver guy fly on a surf board",1966,3,1,76,1,5,0,0,24),
new Marcard("Storm","controls weather",1975,4,3,41,4,4,0,0,25),
new Marcard("Spiderman","its spiderman!!",1962,9,3,45,10,5,0,0,26),
new Marcard("Hulk","Big Green and angry",1962,5,67,4,5,0,0,27),
new Marcard("The Thing","It's clobberin' time!",1961,6,2,52,6,4,0,0,28),
new Marcard("Venom","makes tobey maguire dance like a tool",1988,2,1,36,1,3,0,0,29),
new Marcard("Wolverin","Metal Claws!!!",1974,3,3,48,4,5,0,0,30),
]
let playingdeck = [];
let deck1 = [];
let deck2 = [];
let deck;
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
        {alert("You win the other player has no more cards")};
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "/toptrumps/mainimg/marvelmaxback.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
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
    document.getElementById("draw").style.display = "block"
})
tvbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.tv_series
    action2 = carddrawn2.tv_series
    compare()
    document.getElementById("draw").style.display = "block"
})
moviesbutton.addEventListener("click",()=>{
    action1 = carddrawn1.movies
    action2 = carddrawn2.movies
    compare()
    document.getElementById("draw").style.display = "block"
})
superbutton.addEventListener("click",()=>{
    action1 = carddrawn1.superhuman_powers
    action2 = carddrawn2.superhuman_powers
    compare()
    document.getElementById("draw").style.display = "block"
})
archbutton.addEventListener("click",()=>{
    action1 = carddrawn1.arch_enemies
    action2 = carddrawn2.arch_enemies
    compare()
    document.getElementById("draw").style.display = "block"
})
Marvelbutton.addEventListener("click",()=>{
    action1 = carddrawn1.marvelmax
    action2 = carddrawn2.marvelmax
    compare()
    document.getElementById("draw").style.display = "block"
})
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/blade.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/bulls.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/cap.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/car.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/cyc.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/dar.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/dea.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/doc.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/ele.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/gal.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/gho.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/gre.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/hum.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/inv.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/iro.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/kin.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/mag.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/mis.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/mys.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/nam.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/pho.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/pro.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/san.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/sil.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/sto.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/the.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/theh.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/thi.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/ven.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "/toptrumps/decks/marvel/wol.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/blade.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/bulls.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/cap.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/car.jpg"
    }
    if (carddrawn2.pic == 5){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/cyc.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/dar.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/dea.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/doc.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/ele.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/gal.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/gho.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/gre.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/hum.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/inv.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/iro.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/kin.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/mag.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/mis.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/mys.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/nam.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/pho.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/pro.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/san.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/sil.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/sto.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/the.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/theh.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/thi.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/ven.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "/toptrumps/decks/marvel/wol.jpg"
    }
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
    }
    else if (action1 == action2){
        drawpile.push(carddrawn1)
        drawpile.push(carddrawn2)
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
        deck.push(i)
    }
}
home.addEventListener("click", ()=>{
    window.location.replace("/toptrumps/htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    mardraw()
    document.getElementById("draw").style.display = "none"
})