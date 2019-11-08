class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Pottercard extends Card { //harry potter
    constructor(name,description,magic,cunning,courage,wisdom,temper,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
        this.magic = magic;
        this.cunning = cunning;
        this.courage = courage;
        this.wisdom = wisdom;
        this.temper = temper;
        this.pic = pic
    }
}
let harrydeck = [
new Pottercard("Albus Dumbledore","",120,42,49,90,2,0,0,1),
new Pottercard("Bellatrix Lestrange","",95,31,10,62,15,0,0,2),
new Pottercard("Blaise Zabini","",40,11,18,25,10,0,0,3),
new Pottercard("Cormac McLaggen","",50,18,20,22,5,0,0,4),
new Pottercard("Dean Thomas","",40,10,35,22,4,0,0,5),
new Pottercard("Draco Malfoy","",49,28,7,20,11,0,0,6),
new Pottercard("Fenrir Greyback","",75,30,10,43,13,0,0,7),
new Pottercard("Ginny Weasley","",38,19,45,30,7,0,0,8),
new Pottercard("Gregory Goyle","",14,18,6,3,10,0,0,9),
new Pottercard("Harry Potter","",82,27,50,55,10,0,0,10),
new Pottercard("Hermione Granger","",75,26,48,80,6,0,0,11),
new Pottercard("Horace Slughorn","",75,26,15,82,8,0,0,12),
new Pottercard("Katie Bell","",60,12,20,30,5,0,0,13),
new Pottercard("Lavender Brown","",45,19,22,19,5,0,0,14),
new Pottercard("Luna Lovegood","",38,15,45,40,2,0,0,15),
new Pottercard("Minerva McGonagall","",105,34,36,84,8,0,0,16),
new Pottercard("Molly Weasley","",75,27,40,65,8,0,0,17),
new Pottercard("Mrs Cole","",0,10,20,35,3,0,0,18),
new Pottercard("Narcissa Malfoy","",65,25,10,30,6,0,0,19),
new Pottercard("Neville Longbottom","",50,15,48,30,6,0,0,20),
new Pottercard("Nymphadora Tonks","",65,28,43,50,8,0,0,21),
new Pottercard("Pansy Parkinson","",42,21,18,19,9,0,0,22),
new Pottercard("Remus Lupin","",82,19,42,68,4,0,0,23),
new Pottercard("Romilda Vane","",45,19,21,23,6,0,0,24),
new Pottercard("Ron Weasley","",61,17,47,40,7,0,0,25),
new Pottercard("Rubeus Hagrid","",12,12,35,11,8,0,0,26),
new Pottercard("Seamus Finnigan","",40,9,25,18,7,0,0,27),
new Pottercard("Severus Snape","",95,30,35,72,10,0,0,28),
new Pottercard("Tom Riddle","",65,30,20,40,9,0,0,29),
new Pottercard("Vincent Crabbe","",14,18,5,4,9,0,0,30),
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
const magicbutton = document.getElementById("magic")
const cunningbutton = document.getElementById("cunning")
const couragebutton = document.getElementById("courage")
const wisdombutton = document.getElementById("wisdom")
const temperbutton = document.getElementById("temper")
playingdeck = harrydeck;
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
let harrydraw = function(){
    if(deck2.length == 0 ){
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/harry.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    display2()
    document.getElementById("magic").style.opacity = 1
    document.getElementById("cunning").style.opacity = 1
    document.getElementById("courage").style.opacity = 1
    document.getElementById("wisdom").style.opacity = 1
    document.getElementById("temper").style.opacity = 1
    document.getElementById("description").innerHTML = `${carddrawn1.name}`
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`    
}
magicbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.magic
    action2 = carddrawn2.magic
    compare()
    display()
})
cunningbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.cunning
    action2 = carddrawn2.cunning
    compare()
    display()
})
couragebutton.addEventListener("click",()=>{
    action1 = carddrawn1.courage
    action2 = carddrawn2.courage
    compare()
    display()
})
wisdombutton.addEventListener("click",()=>{
    action1 = carddrawn1.wisdom
    action2 = carddrawn2.wisdom
    compare()
    display()
})
temperbutton.addEventListener("click",()=>{
    action1 = carddrawn1.temper
    action2 = carddrawn2.temper
    compare()
    display()
})
const display2 = ()=>{
    document.getElementById("magic").style.display = "block"
    document.getElementById("cunning").style.display = "block"
    document.getElementById("courage").style.display = "block"
    document.getElementById("wisdom").style.display = "block"
    document.getElementById("temper").style.display = "block"
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("magic").style.display = "none"
    document.getElementById("cunning").style.display = "none"
    document.getElementById("courage").style.display = "none"
    document.getElementById("wisdom").style.display = "none"
    document.getElementById("temper").style.display = "none"
}
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "../decks/harry/alb.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "../decks/harry/bell.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "../decks/harry/bla.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "../decks/harry/cor.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "../decks/harry/dea.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "../decks/harry/dra.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "../decks/harry/fen.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "../decks/harry/gin.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "../decks/harry/gre.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "../decks/harry/har.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "../decks/harry/her.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "../decks/harry/hor.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "../decks/harry/kat.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "../decks/harry/lav.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "../decks/harry/lun.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "../decks/harry/min.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "../decks/harry/mol.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "../decks/harry/mrs.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "../decks/harry/nar.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "../decks/harry/nev.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "../decks/harry/nym.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "../decks/harry/pan.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "../decks/harry/rem.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "../decks/harry/rom.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "../decks/harry/ron.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "../decks/harry/rub.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "../decks/harry/sea.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "../decks/harry/sev.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "../decks/harry/tom.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "../decks/harry/vin.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "../decks/harry/alb.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "../decks/harry/bell.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "../decks/harry/bla.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "../decks/harry/cor.jpg"
    }
    if (carddrawn2.pic == 5){
        document.getElementById("showncard2").src = "../decks/harry/dea.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "../decks/harry/dra.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "../decks/harry/fen.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "../decks/harry/gin.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "../decks/harry/gre.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "../decks/harry/har.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "../decks/harry/her.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "../decks/harry/hor.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "../decks/harry/kat.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "../decks/harry/lav.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "../decks/harry/lun.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "../decks/harry/min.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "../decks/harry/mol.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "../decks/harry/mrs.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "../decks/harry/nar.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "../decks/harry/nev.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "../decks/harry/nym.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "../decks/harry/pan.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "../decks/harry/rem.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "../decks/harry/rom.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "../decks/harry/ron.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "../decks/harry/rub.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "../decks/harry/sea.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "../decks/harry/sev.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "../decks/harry/tom.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "../decks/harry/vin.jpg"
    }
}
let compare = function(){
    secondcoverpic()
    document.getElementById("description").innerHTML = `${carddrawn1.name} VS ${carddrawn2.name}`
    if (action1 > action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU WIN !!!`
        deck1.push(carddrawn1)
        deck1.push(carddrawn2)
        draw(deck1)
    }
    else if (action1 < action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU LOSE !!!`
        deck2.push(carddrawn1)
        deck2.push(carddrawn2)
        draw(deck2)
    }
    else if (action1 == action2){
        drawpile.push(carddrawn1)
        drawpile.push(carddrawn2)
        document.getElementById("carddescription").innerHTML = "its a draw the cards go in the middle - new cards for everyone!!"
    }
}
let draw = function(deck){
    for(let i = 0; i <drawpile.length;i++){
        deck.push(i)
    }
}
home.addEventListener("click", ()=>{
    window.location.replace("../htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    harrydraw()
    document.getElementById("draw").style.display = "none"
})