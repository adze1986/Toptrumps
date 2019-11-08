class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Dccard extends Card { //dc comics
    constructor(name,description,height,intelligence,strength,speed,agility,fighting_skills,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
        this.height = height;
        this.intelligence = intelligence;
        this.strength = strength;
        this.speed = speed;
        this.agility = agility;
        this.fighting_skills = fighting_skills;
        this.pic = pic;
    }
} 
let dcdeck = [
    new Dccard("Ares","generic ares description",208,7,42,9,19,83,0,0,1),
    new Dccard("Artemis","generic Artemis descriptionn",183,5,27,5,15,75,0,0,2),
    new Dccard("Bane","generic Bane description",203,6,38,6,14,85,0,0,3),
    new Dccard("Beastboy","generic Beastboy description",172,3,27,4,23,66,0,0,4),
    new Dccard("Black Adam","generic Black Adam description",183,7,48,17,18,80,0,0,5),
    new Dccard("Catwoman","generic Catwoman description",170,4,17,6,17,72,0,0,6),
    new Dccard("Cheetah","generic Cheetah description",175,4,22,17,17,85,0,0,7),
    new Dccard("Cyborg","generic Cyborg description",196,6,36,4,13,65,0,0,8),
    new Dccard("Donna Troy","generic Donna Troy description",175,5,35,9,16,74,0,0,9),
    new Dccard("Doomsday","generic Doomsday description",213,2,50,14,10,85,0,0,10),
    new Dccard("General Zod","generic General Zod description",191,5,38,4,13,71,0,0,11),
    new Dccard("Gog","generic Gog description",191,5,36,10,16,84,0,0,12),
    new Dccard("Hawkgirl","generic Hakgirl description",167,3,27,7,17,71,0,0,13),
    new Dccard("Hawkman","generic Hawkman description",186,4,30,8,17,77,0,0,14),
    new Dccard("Hippolyta","generic Hippolyta description",175,6,24,6,14,70,0,0,15),
    new Dccard("Lex Luthor","generic Lex Luthor description",188,10,20,4,12,63,0,0,16),
    new Dccard("Martian Manhunter","generic Martian Manhunter description",201,6,46,18,21,85,0,0,17),
    new Dccard("Mr Freeze","generic Mr Freeze description",183,6,26,5,10,70,0,0,18),
    new Dccard("Nightwing","generic Nightwing description",177,7,26,6,17,80,0,0,19),
    new Dccard("Plasticman","generic Plasticman description",186,4,21,4,22,65,0,0,20),
    new Dccard("Poison Ivy","generic Poison Ivy description",167,5,13,4,12,65,0,0,21),
    new Dccard("Powergirl","generic Powergirl description",170,3,41,10,15,80,0,0,22),
    new Dccard("Red Tornado","generic Red Tornado description",186,5,35,12,22,66,0,0,23),
    new Dccard("Steel","generic Steel description",201,6,38,7,12,80,0,0,24),
    new Dccard("Superboy","generic Superboy description",170,3,40,9,14,78,0,0,25),
    new Dccard("Superman","generic Superman description",191,7,50,19,21,87,0,0,26),
    new Dccard("The Riddler","generic The Riddler description",186,5,18,4,13,64,0,0,27),
    new Dccard("Two Face","generic Two Face description",183,4,20,4,12,61,0,0,28),
    new Dccard("Wondergirl","generic Wondergirl description",166,3,32,12,19,73,0,0,29),
    new Dccard("Wonderwoman","generic Wonderwoman description",183,7,41,18,19,78,0,0,30),
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
const heightbutton = document.getElementById("height")
const intelbutton = document.getElementById("inteli")
const strengthbutton = document.getElementById("strength")
const speedbutton = document.getElementById("speed")
const agilitybutton = document.getElementById("agility")
const fightbutton = document.getElementById("fight")
playingdeck = dcdeck;
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
let dcdraw = function(){
    if(deck2.length == 0 ){
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = [];
    carddrawn2 = [];
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/dc.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic();
    display2()
    document.getElementById("height").style.opacity = 1;
    document.getElementById("inteli").style.opacity = 1;
    document.getElementById("strength").style.opacity = 1;
    document.getElementById("speed").style.opacity = 1;
    document.getElementById("agility").style.opacity = 1;
    document.getElementById("fight").style.opacity = 1;
    document.getElementById("description").innerHTML = `${carddrawn1.name}`;
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`;
}
heightbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.height,
    action2 = carddrawn2.height
    compare()
    display()
})
intelbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.intelligence
    action2 = carddrawn2.intelligence
    compare()
    display()
})
strengthbutton.addEventListener("click",()=>{
    action1 = carddrawn1.strength
    action2 = carddrawn2.strength
    compare()
    display()
})
speedbutton.addEventListener("click",()=>{
    action1 = carddrawn1.speed
    action2 = carddrawn2.speed
    compare()
    display()
})
agilitybutton.addEventListener("click",()=>{
    action1 = carddrawn1.agility
    action2 = carddrawn2.agility
    compare()
    display()
})
fightbutton.addEventListener("click",()=>{
    action1 = carddrawn1.fighting_skills
    action2 = carddrawn2.fighting_skills
    compare()
    display()
})
const display2 = ()=>{
    document.getElementById("height").style.display = "block";
    document.getElementById("inteli").style.display = "block";
    document.getElementById("strength").style.display = "block";
    document.getElementById("speed").style.display = "block";
    document.getElementById("agility").style.display = "block";
    document.getElementById("fight").style.display = "block";
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("height").style.display = "none";
    document.getElementById("inteli").style.display = "none";
    document.getElementById("strength").style.display = "none";
    document.getElementById("speed").style.display = "none";
    document.getElementById("agility").style.display = "none";
    document.getElementById("fight").style.display = "none";
}
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "../decks/dc/ares.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "../decks/dc/artemis.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "../decks/dc/bane.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "../decks/dc/beastboy.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "../decks/dc/blackadams.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "../decks/dc/catwoman.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "../decks/dc/cheetah.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "../decks/dc/cyborg.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "../decks/dc/donnatroy.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "../decks/dc/doomsday.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "../decks/dc/generalzod.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "../decks/dc/gog.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "../decks/dc/hawkgirl.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "../decks/dc/hawkman.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "../decks/dc/hippolyta.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "../decks/dc/lexluthor.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "../decks/dc/martian.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "../decks/dc/mrfreeze.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "../decks/dc/nightwing.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "../decks/dc/plasticman.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "../decks/dc/poisonivy.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "../decks/dc/powergirl.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "../decks/dc/redtornado.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "../decks/dc/steel.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "../decks/dc/superboy.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "../decks/dc/superman.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "../decks/dc/theriddler.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "../decks/dc/twoface.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "../decks/dc/wondergirl.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "../decks/dc/wonderwoman.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "../decks/dc/ares.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "../decks/dc/artemis.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "../decks/dc/bane.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "../decks/dc/beastboy.jpg"
    }
    if (carddrawn2.pic == 5){
        document.getElementById("showncard2").src = "../decks/dc/blackadams.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "../decks/dc/catwoman.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "../decks/dc/cheetah.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "../decks/dc/cyborg.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "../decks/dc/donnatroy.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "../decks/dc/doomsday.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "../decks/dc/generalzod.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "../decks/dc/gog.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "../decks/dc/hawkgirl.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "../decks/dc/hawkman.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "../decks/dc/hippolyta.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "../decks/dc/lexluthor.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "../decks/dc/martian.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "../decks/dc/mrfreeze.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "../decks/dc/nightwing.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "../decks/dc/plasticman.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "../decks/dc/poisonivy.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "../decks/dc/powergirl.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "../decks/dc/redtornado.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "../decks/dc/steel.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "../decks/dc/superboy.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "../decks/dc/superman.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "../decks/dc/theriddler.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "../decks/dc/twoface.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "../decks/dc/wondergirl.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "../decks/dc/wonderwoman.jpg"
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
    dcdraw()
    document.getElementById("draw").style.display = "none"
})