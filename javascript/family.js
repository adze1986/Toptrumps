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
new Familycard("Bertram","",15,4,7,29,18,0,0,"ber"),
new Familycard("Bonnie Swanson","",41,12,16,8,66,0,0,"bon"),
new Familycard("Brian Griffin","",31,13,20,18,67,0,0,"bri"),
new Familycard("Bruce","",19,13,14,25,43,0,0,"bru"),
new Familycard("Carter pewterschmidt","",43,8,6,19,54,0,0,"car"),
new Familycard("Chris Griffin","",17,10,9,27,63,0,0,"chr"),
new Familycard("Cleveland Brown","",25,12,11,19,64,0,0,"cle"),
new Familycard("Death","",16,6,10,21,45,0,0,"dea"),
new Familycard("Diane Simmons","",42,15,9,24,58,0,0,"dia"),
new Familycard("Dr Hartman","",20,15,6,7,61,0,0,"dr"),
new Familycard("Evil Monkey","",14,1,7,30,18,0,0,"evil"),
new Familycard("Glenn Quagmire","",45,14,9,28,36,0,0,"gle"),
new Familycard("Greased up deaf guy","",1,13,0,26,2,0,0,"gre"),
new Familycard("Herbert","",18,11,13,29,14,0,0,"her"),
new Familycard("Jake Tucker","",16,10,6,25,43,0,0,"jak"),
new Familycard("Jasper","",39,8,8,18,59,0,0,"jas"),
new Familycard("Jillian Russell","",41,9,11,27,35,0,0,"jil"),
new Familycard("Joe Swanson","",31,15,14,14,66,0,0,"joe"),
new Familycard("Lois Griffin","",37,12,17,16,70,0,0,"loi"),
new Familycard("Meg griffin","",21,4,12,21,61,0,0,"meg"),
new Familycard("Mickey McFinnegan","",24,4,3,27,25,0,0,"mic"),
new Familycard("Mort Goldman","",13,14,6,30,58,0,0,"mor"),
new Familycard("Neil Goldman","",8,6,4,21,53,0,0,"nei"),
new Familycard("Peter Griffin","",26,14,5,29,63,0,0,"pet"),
new Familycard("Rupert","",9,2,4,21,70,0,0,"rup"),
new Familycard("Seamus","",34,11,8,28,22,0,0,"sea"),
new Familycard("Stewie Griffin","",23,9,18,30,20,0,0,"ste"),
new Familycard("The Giant Chicken","",10,6,5,30,11,0,0,"the"),
new Familycard("Tom Tucker","",39,15,10,23,49,0,0,"tom"),
new Familycard("Tricia Takanawa","",33,14,10,12,55,0,0,"tri"),
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
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/family.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    display2()
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
    display()
})
Quahogbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.quahog_fame;
    action2 = carddrawn2.quahog_fame;
    compare();
    display();
})
tactbutton.addEventListener("click",()=>{
    action1 = carddrawn1.tact
    action2 = carddrawn2.tact
    compare()
    display()
})
delusionsbutton.addEventListener("click",()=>{
    action1 = carddrawn1.delusions
    action2 = carddrawn2.delusions
    compare()
    display()
})
familybutton.addEventListener("click",()=>{
    action1 = carddrawn1.family_values
    action2 = carddrawn2.family_values
    compare()
    display()
})
const display2 = ()=>{
    document.getElementById("style").style.display = "block"
    document.getElementById("Quahog").style.display = "block"
    document.getElementById("tact").style.display = "block"
    document.getElementById("delusions").style.display = "block"
    document.getElementById("family").style.display = "block"
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("style").style.display = "none"
    document.getElementById("Quahog").style.display = "none"
    document.getElementById("tact").style.display = "none"
    document.getElementById("delusions").style.display = "none"
    document.getElementById("family").style.display = "none"
}
const coverpic = () => {
        document.getElementById("showncard1").src = `../decks/family/${carddrawn1.pic}.jpg`
}

const secondcoverpic = () => {
        document.getElementById("showncard2").src = `../decks/family/${carddrawn2.pic}.jpg`
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
    familydraw()
    document.getElementById("draw").style.display = "none"
})