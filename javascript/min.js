class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Mincard extends Card { //minions
    constructor(name,description,cleverness,bravery,leadership,mischievous,top_trumps_rating,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
        this.cleverness = cleverness;
        this.bravery = bravery;
        this.leadership = leadership;
        this.mischievous = mischievous;
        this.top_trumps_rating = top_trumps_rating;
        this.pic = pic;
    }
}
let mindeck = [
new Mincard("Aye, Matie","",16,7,42,60,31,0,0,1),
new Mincard("Banan Banana","",10,5,31,75,88,0,0,2),
new Mincard("Battty over Dracula","",15,6,45,70,48,0,0,3),
new Mincard("Bob","",27,8,48,50,97,0,0,4),
new Mincard("Bored Silly","",10,3,8,25,27,0,0,5),
new Mincard("Denim Dungarees","",30,2,33,64,21,0,0,6),
new Mincard("Feeling Blue","",5,6,10,20,32,0,0,7),
new Mincard("Getting Closer","",22,6,40,51,72,0,0,8),
new Mincard("In the big city","",26,4,46,80,39,0,0,9),
new Mincard("Kevin","",28,10,50,42,99,0,0,10),
new Mincard("Long journey ahead","",18,8,47,28,68,0,0,11),
new Mincard("Looking for Scarlet","",13,6,25,74,63,0,0,12),
new Mincard("Meet scarlet Overkill","",27,6,25,30,90,0,0,13),
new Mincard("Meeting Professor Flux","",20,4,27,42,38,0,0,14),
new Mincard("Peace, brother minion","",17,5,47,69,34,0,0,15),
new Mincard("Rule of tghe T-Rex","",10,10,60,72,62,0,0,16),
new Mincard("Scarlet's castle","",30,7,29,28,87,0,0,17),
new Mincard("Serving the Pharaoh","",17,8,50,62,55,0,0,18),
new Mincard("Stranded in snow","",11,6,25,31,40,0,0,19),
new Mincard("Stuart","",25,9,49,55,98,0,0,20),
new Mincard("Stuart & co","",9,3,30,79,33,0,0,21),
new Mincard("Swimming to the city!","",12,9,49,73,91,0,0,22),
new Mincard("The journey begins","",15,4,40,75,45,0,0,23),
new Mincard("The quest begins","",29,10,50,72,100,0,0,24),
new Mincard("To Orlando","",9,6,45,62,42,0,0,25),
new Mincard("To Villian Con!","",11,7,28,53,56,0,0,26),
new Mincard("Uhh caveman?","",12,5,55,56,32,0,0,27),
new Mincard("Vive le Minion","",19,9,40,63,81,0,0,28),
new Mincard("What will happen next?","",25,8,24,70,96,0,0,29),
new Mincard("With the most evil","",28,5,32,40,47,0,0,30),
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
const clevernessbutton = document.getElementById("cleverness")
const braverybutton = document.getElementById("bravery")
const leadershipbutton = document.getElementById("leadership")
const mischievousbutton = document.getElementById("mischievous")
const toptrumpsratingbutton = document.getElementById("toptrumps")
playingdeck = mindeck;
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
let mindraw = function(){
    if(deck2.length == 0 ){
        {alert("You win the other player has no more cards")};
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "/toptrumps/mainimg/minions.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    document.getElementById("cleverness").style.opacity = 1
    document.getElementById("bravery").style.opacity = 1
    document.getElementById("leadership").style.opacity = 1
    document.getElementById("mischievous").style.opacity = 1
    document.getElementById("toptrumps").style.opacity = 1
    document.getElementById("description").innerHTML = `${carddrawn1.name}`
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`
}
clevernessbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.cleverness,
    action2 = carddrawn2.cleverness
    compare()
    document.getElementById("draw").style.display = "block"
})
braverybutton.addEventListener("click", ()=>{
    action1 = carddrawn1.bravery
    action2 = carddrawn2.bravery
    compare()
    document.getElementById("draw").style.display = "block"
})
leadershipbutton.addEventListener("click",()=>{
    action1 = carddrawn1.leadership
    action2 = carddrawn2.leadership
    compare()
    document.getElementById("draw").style.display = "block"
})
mischievousbutton.addEventListener("click",()=>{
    action1 = carddrawn1.mischievous
    action2 = carddrawn2.mischievous
    compare()
    document.getElementById("draw").style.display = "block"
})
toptrumpsratingbutton.addEventListener("click",()=>{
    action1 = carddrawn1.top_trumps_rating
    action2 = carddrawn2.top_trumps_rating
    compare()
    document.getElementById("draw").style.display = "block"
})
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/aye.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/ban.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/bat.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/bob.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/bor.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/den.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/fee.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/get.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/int.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/kev.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/lon.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/loo.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/mee.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/meet.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/pea.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/rul.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/sca.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/ser.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/str.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/stu.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/stua.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/swi.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/thej.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/theq.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/to.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/tov.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/uhh.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/viv.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/wha.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "/toptrumps/decks/min/wit.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/aye.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/ban.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/bat.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/bob.jpg"
    }
    if (carddrawn2.pic == 5){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/bor.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/den.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/fee.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/get.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/int.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/kev.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/lon.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/loo.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/mee.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/meet.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/pea.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/rul.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/sca.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/ser.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/str.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/stu.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/stua.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/swi.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/thej.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/theq.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/to.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/tov.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/uhh.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/viv.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/wha.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "/toptrumps/decks/min/wit.jpg"
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
    mindraw()
    document.getElementById("draw").style.display = "none"
})