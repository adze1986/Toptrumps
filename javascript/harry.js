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
new Pottercard("Albus Dumbledore","",120,42,49,90,2,0,0,"alb"),
new Pottercard("Bellatrix Lestrange","",95,31,10,62,15,0,0,"bell"),
new Pottercard("Blaise Zabini","",40,11,18,25,10,0,0,"bla"),
new Pottercard("Cormac McLaggen","",50,18,20,22,5,0,0,"cor"),
new Pottercard("Dean Thomas","",40,10,35,22,4,0,0,"dea"),
new Pottercard("Draco Malfoy","",49,28,7,20,11,0,0,"dra"),
new Pottercard("Fenrir Greyback","",75,30,10,43,13,0,0,"fen"),
new Pottercard("Ginny Weasley","",38,19,45,30,7,0,0,"gin"),
new Pottercard("Gregory Goyle","",14,18,6,3,10,0,0,"gre"),
new Pottercard("Harry Potter","",82,27,50,55,10,0,0,"har"),
new Pottercard("Hermione Granger","",75,26,48,80,6,0,0,"her"),
new Pottercard("Horace Slughorn","",75,26,15,82,8,0,0,"hor"),
new Pottercard("Katie Bell","",60,12,20,30,5,0,0,"kat"),
new Pottercard("Lavender Brown","",45,19,22,19,5,0,0,"lav"),
new Pottercard("Luna Lovegood","",38,15,45,40,2,0,0,"lun"),
new Pottercard("Minerva McGonagall","",105,34,36,84,8,0,0,"min"),
new Pottercard("Molly Weasley","",75,27,40,65,8,0,0,"mol"),
new Pottercard("Mrs Cole","",0,10,20,35,3,0,0,"mrs"),
new Pottercard("Narcissa Malfoy","",65,25,10,30,6,0,0,"nar"),
new Pottercard("Neville Longbottom","",50,15,48,30,6,0,0,"nev"),
new Pottercard("Nymphadora Tonks","",65,28,43,50,8,0,0,"nym"),
new Pottercard("Pansy Parkinson","",42,21,18,19,9,0,0,"pan"),
new Pottercard("Remus Lupin","",82,19,42,68,4,0,0,"rem"),
new Pottercard("Romilda Vane","",45,19,21,23,6,0,0,"rom"),
new Pottercard("Ron Weasley","",61,17,47,40,7,0,0,"ron"),
new Pottercard("Rubeus Hagrid","",12,12,35,11,8,0,0,"rub"),
new Pottercard("Seamus Finnigan","",40,9,25,18,7,0,0,"sea"),
new Pottercard("Severus Snape","",95,30,35,72,10,0,0,"sev"),
new Pottercard("Tom Riddle","",65,30,20,40,9,0,0,"tom"),
new Pottercard("Vincent Crabbe","",14,18,5,4,9,0,0,"vin"),
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
        document.getElementById("showncard1").src = `../decks/harry/${carddrawn1.pic}.jpg`
    }
const secondcoverpic = () => {
        document.getElementById("showncard2").src = `../decks/harry/${carddrawn2.pic}.jpg`
    }
let compare = function(){
    secondcoverpic()
    document.getElementById("description").innerHTML = `${carddrawn1.name} VS ${carddrawn2.name}`
    if (action1 > action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU WIN !!!`
        deck1.push(carddrawn1)
        deck1.push(carddrawn2)
        drawFunction(deck1)
    }
    else if (action1 < action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU LOSE !!!`
        deck2.push(carddrawn1)
        deck2.push(carddrawn2)
        drawFunction(deck2)
    }
    else if (action1 == action2){
        drawpile.push(carddrawn1)
        drawpile.push(carddrawn2)
        document.getElementById("carddescription").innerHTML = "its a draw the cards go in the middle - new cards for everyone!!"
    }
}
let drawFunction = function(deck){
    for(let i = 0; i < drawpile.length ; i++){
        deck.push(drawpile[i])
    }
    drawpile = [];
}
home.addEventListener("click", ()=>{
    window.location.replace("../htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    harrydraw()
    document.getElementById("draw").style.display = "none"
})