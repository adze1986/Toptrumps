class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Familycard extends Card { //family guy
    constructor(name,description,style,quahog_fame,tact,delusions,family_values,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
        this.style = style;
        this.quahog_fame = quahog_fame;
        this.tact = tact;
        this.delusions = delusions;
        this.family_values = family_values;
        this.pic = pic;
    }
}
let familydeck = [
new Familycard("Bertram","",15,4,7,29,18,0,0,1),
new Familycard("Bonnie Swanson","",41,12,16,8,66,0,0,2),
new Familycard("Brian Griffin","",31,13,20,18,67,0,0,3),
new Familycard("Bruce","",19,13,14,25,43,0,0,4),
new Familycard("Carter pewterschmidt","",43,8,6,19,54,0,0,5),
new Familycard("Chris Griffin","",17,10,9,27,63,0,0,6),
new Familycard("Cleveland Brown","",25,12,11,19,64,0,0,7),
new Familycard("Death","",16,6,10,21,45,0,0,8),
new Familycard("Diane Simmons","",42,15,9,24,58,0,0,9),
new Familycard("Dr Hartman","",20,15,6,7,61,0,0,10),
new Familycard("Evil Monkey","",14,1,7,30,18,0,0,11),
new Familycard("Glenn Quagmire","",45,14,9,28,36,0,0,12),
new Familycard("Greased up deaf guy","",1,13,0,26,2,0,0,13),
new Familycard("Herbert","",18,11,13,29,14,0,0,14),
new Familycard("Jake Tucker","",16,10,6,25,43,0,0,15),
new Familycard("Jasper","",39,8,8,18,59,0,0,16),
new Familycard("Jillian Russell","",41,9,11,27,35,0,0,17),
new Familycard("Joe Swanson","",31,15,14,14,66,0,0,18),
new Familycard("Lois Griffin","",37,12,17,16,70,0,0,19),
new Familycard("Meg griffin","",21,4,12,21,61,0,0,20),
new Familycard("Mickey McFinnegan","",24,4,3,27,25,0,0,21),
new Familycard("Mort Goldman","",13,14,6,30,58,0,0,22),
new Familycard("Neil Goldman","",8,6,4,21,53,0,0,23),
new Familycard("Peter Griffin","",26,14,5,29,63,0,0,24),
new Familycard("Rupert","",9,2,4,21,70,0,0,25),
new Familycard("Seamus","",34,11,8,28,22,0,0,26),
new Familycard("Stewie Griffin","",23,9,18,30,20,0,0,27),
new Familycard("The Giant Chicken","",10,6,5,30,11,0,0,28),
new Familycard("Tom Tucker","",39,15,10,23,49,0,0,29),
new Familycard("Tricia Takanawa","",33,14,10,12,55,0,0,30),
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
const stylebutton = document.getElementById("style")
const Quahogbutton = document.getElementById("Quahog")
const tactbutton = document.getElementById("tact")
const delusionsbutton = document.getElementById("delusions")
const familybutton = document.getElementById("family")
playingdeck = familydeck;
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
let familydraw = function(){
    if(deck2.length == 0 ){
        {alert("You win the other player has no more cards")};
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("showncard2").src = "/toptrumps/mainimg/family.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    document.getElementById("style").style.opacity = 1
    document.getElementById("Quahog").style.opacity = 1
    document.getElementById("tact").style.opacity = 1
    document.getElementById("delusions").style.opacity = 1
    document.getElementById("family").style.opacity = 1
    document.getElementById("description").innerHTML = `${carddrawn1.name}`
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`
}
stylebutton.addEventListener("click", ()=>{
    action1 = carddrawn1.style
    action2 = carddrawn2.style
    compare()
    document.getElementById("draw").style.display = "block"
})
Quahogbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.quahog_fame
    action2 = carddrawn2.quahog_fame
    compare()
    document.getElementById("draw").style.display = "block"
})
tactbutton.addEventListener("click",()=>{
    action1 = carddrawn1.tact
    action2 = carddrawn2.tact
    compare()
    document.getElementById("draw").style.display = "block"
})
delusionsbutton.addEventListener("click",()=>{
    action1 = carddrawn1.delusions
    action2 = carddrawn2.delusions
    compare()
    document.getElementById("draw").style.display = "block"
})
familybutton.addEventListener("click",()=>{
    action1 = carddrawn1.family_values
    action2 = carddrawn2.family_values
    compare()
    document.getElementById("draw").style.display = "block"
})
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/ber.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/bon.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/bri.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/bru.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/car.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/chr.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/cle.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/dea.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/dia.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/dr.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/evil.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/gle.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/gre.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/her.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/jak.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/jas.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/jil.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/joe.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/loi.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/meg.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/mic.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/mor.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/neil.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/pet.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/rup.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/sea.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/ste.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/the.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/tom.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "/toptrumps/decks/family/tri.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/ber.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/bon.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/bri.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/bru.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/car.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/chr.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/cle.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/dea.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/dia.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/dr.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/evil.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/gle.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/gre.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/her.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/jak.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/jas.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/jil.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/joe.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/loi.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/meg.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/mic.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/mor.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/neil.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/pet.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/rup.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/sea.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/ste.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/the.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/tom.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "/toptrumps/decks/family/tri.jpg"
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
    window.location.replace("/toptrumps/htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    familydraw()
    document.getElementById("draw").style.display = "none"
})