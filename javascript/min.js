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
new Mincard("Aye, Matie","",16,7,42,60,31,0,0,"aye"),
new Mincard("Banan Banana","",10,5,31,75,88,0,0,"ban"),
new Mincard("Battty over Dracula","",15,6,45,70,48,0,0,"bat"),
new Mincard("Bob","",27,8,48,50,97,0,0,"bob"),
new Mincard("Bored Silly","",10,3,8,25,27,0,0,"bor"),
new Mincard("Denim Dungarees","",30,2,33,64,21,0,0,"den"),
new Mincard("Feeling Blue","",5,6,10,20,32,0,0,"fee"),
new Mincard("Getting Closer","",22,6,40,51,72,0,0,"get"),
new Mincard("In the big city","",26,4,46,80,39,0,0,"int"),
new Mincard("Kevin","",28,10,50,42,99,0,0,"kev"),
new Mincard("Long journey ahead","",18,8,47,28,68,0,0,"lon"),
new Mincard("Looking for Scarlet","",13,6,25,74,63,0,0,"loo"),
new Mincard("Meet scarlet Overkill","",27,6,25,30,90,0,0,"mee"),
new Mincard("Meeting Professor Flux","",20,4,27,42,38,0,0,"meet"),
new Mincard("Peace, brother minion","",17,5,47,69,34,0,0,"pea"),
new Mincard("Rule of tghe T-Rex","",10,10,60,72,62,0,0,"rul"),
new Mincard("Scarlet's castle","",30,7,29,28,87,0,0,"sca"),
new Mincard("Serving the Pharaoh","",17,8,50,62,55,0,0,"ser"),
new Mincard("Stranded in snow","",11,6,25,31,40,0,0,"str"),
new Mincard("Stuart","",25,9,49,55,98,0,0,"stu"),
new Mincard("Stuart & co","",9,3,30,79,33,0,0,"stua"),
new Mincard("Swimming to the city!","",12,9,49,73,91,0,0,"swi"),
new Mincard("The journey begins","",15,4,40,75,45,0,0,"thej"),
new Mincard("The quest begins","",29,10,50,72,100,0,0,"theq"),
new Mincard("To Orlando","",9,6,45,62,42,0,0,"to"),
new Mincard("To Villian Con!","",11,7,28,53,56,0,0,"tov"),
new Mincard("Uhh caveman?","",12,5,55,56,32,0,0,"uhh"),
new Mincard("Vive le Minion","",19,9,40,63,81,0,0,"viv"),
new Mincard("What will happen next?","",25,8,24,70,96,0,0,"wha"),
new Mincard("With the most evil","",28,5,32,40,47,0,0,"wit"),
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
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/minions.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    display2()
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
    display()
})
braverybutton.addEventListener("click", ()=>{
    action1 = carddrawn1.bravery
    action2 = carddrawn2.bravery
    compare()
    display()
})
leadershipbutton.addEventListener("click",()=>{
    action1 = carddrawn1.leadership
    action2 = carddrawn2.leadership
    compare()
    display()
})
mischievousbutton.addEventListener("click",()=>{
    action1 = carddrawn1.mischievous
    action2 = carddrawn2.mischievous
    compare()
    display()
})
toptrumpsratingbutton.addEventListener("click",()=>{
    action1 = carddrawn1.top_trumps_rating
    action2 = carddrawn2.top_trumps_rating
    compare()
    display()
})
const display2 = ()=>{
    document.getElementById("cleverness").style.display = "block"
    document.getElementById("bravery").style.display = "block"
    document.getElementById("leadership").style.display = "block"
    document.getElementById("mischievous").style.display = "block"
    document.getElementById("toptrumps").style.display = "block"
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("cleverness").style.display = "none"
    document.getElementById("bravery").style.display = "none"
    document.getElementById("leadership").style.display = "none"
    document.getElementById("mischievous").style.display = "none"
    document.getElementById("toptrumps").style.display = "none"
}
const coverpic = () => {
        document.getElementById("showncard1").src = `../decks/min/${carddrawn1.pic}.jpg`
}
const secondcoverpic = () => {
        document.getElementById("showncard2").src = `../decks/min/${carddrawn2.pic}.jpg`
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
    mindraw()
    document.getElementById("draw").style.display = "none"
})