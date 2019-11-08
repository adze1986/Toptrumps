class Card  {
    constructor(name, description,wincounter,losscounter){
    this.name = name;
    this.description = description;
    this.wincounter = wincounter;
    this.losscounter = losscounter;
    }
}
class Simcard extends Card { //simpsons
    constructor(name,description,most_loveable,smartest,fattest,biggest_nerd,greatest_anarchist,walk_of_fame,wincounter,losscounter,pic){
    super(name,description,wincounter,losscounter);
    this.most_loveable = most_loveable;
    this.smartest = smartest;
    this.fattest = fattest;
    this.biggest_nerd = biggest_nerd;
    this.greatest_anarchist = greatest_anarchist;
    this.walk_of_fame = walk_of_fame;
    this.pic = pic;
    }
}
let simdeck = [
new Simcard("Abraham 'grandpa' Simpson","",68,56,66,76,78,86,0,0,1),
new Simcard("Apu Nahasapeemapetilon","",78,96,78,52,88,68,0,0,2),
new Simcard("Barney Gumble","",86,50,96,86,74,80,0,0,3),
new Simcard("Bart Simpson","",90,78,50,44,98,96,0,0,4),
new Simcard("C. Montgomery Burns","",48,92,40,78,90,84,0,0,5),
new Simcard("Chief Wigum","",76,40,98,82,46,72,0,0,6),
new Simcard("Dr Julius Hibbert","",58,66,88,64,64,46,0,0,7),
new Simcard("Edna Krabappel","",48,64,56,62,60,44,0,0,8),
new Simcard("Groundskeeper Willie","",62,48,70,66,80,64,0,0,9),
new Simcard("Homer Simpson","",92,76,94,48,94,98,0,0,10),
new Simcard("Itchy & Scratchy","",72,52,60,56,84,76,0,0,11),
new Simcard("Krusty the clown","",70,86,92,54,86,78,0,0,12),
new Simcard("Lenny & Karl","",82,60,54,94,56,54,0,0,13),
new Simcard("Lisa Simpson","",98,98,48,42,96,94,0,0,14),
new Simcard("Maggie Simpson","",100,54,46,74,60,92,0,0,15),
new Simcard("Marge Simpson","",94,94,68,46,62,90,0,0,16),
new Simcard("Martin","",80,80,90,70,72,52,0,0,17),
new Simcard("Milhouse Van Houten","",78,84,74,88,68,62,0,0,18),
new Simcard("Moe Szyslak","",76,72,44,72,82,82,0,0,19),
new Simcard("Ned Flanders","",52,88,84,98,42,74,0,0,20),
new Simcard("Nelson Muntz","",32,20,67,89,56,39,0,0,21),
new Simcard("Otto","",66,58,62,84,76,60,0,0,22),
new Simcard("Patty & Selma Bouvier","",50,90,86,50,92,88,0,0,23),
new Simcard("Principal Skinner","",74,74,64,80,48,70,0,0,24),
new Simcard("Santas little helper","",96,44,42,60,50,66,0,0,25),
new Simcard("Sherri & Terri","",54,82,58,76,66,58,0,0,26),
new Simcard("Sideshow bob","",82,62,76,90,54,40,0,0,27),
new Simcard("Snowball II","",88,42,52,58,52,56,0,0,28),
new Simcard("Todd & Rod Flanders","",60,68,80,96,44,48,0,0,29),
new Simcard("Waylon Smithers","",56,40,82,92,58,42,0,0,30),
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
const mostlovebutton = document.getElementById("mostlove")
const smartestbutton = document.getElementById("smartest")
const fattestbutton = document.getElementById("fattest")
const biggestbutton = document.getElementById("biggest")
const greatestbutton = document.getElementById("Greatest")
const walkbutton = document.getElementById("walk")

//////


playingdeck = simdeck;
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


let simdraw = function(){
    if(deck2.length == 0 ){
        document.getElementById("win").style.display = "block";
    }
    carddrawn1 = []
    carddrawn2 = []
    document.getElementById("deckcount1").innerHTML = deck1.length
    document.getElementById("deckcount2").innerHTML = deck2.length
    document.getElementById("showncard2").src = "../mainimg/simpsonsback.jpg"
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()
    display2()
    document.getElementById("mostlove").style.opacity = 1
    document.getElementById("smartest").style.opacity = 1
    document.getElementById("fattest").style.opacity = 1
    document.getElementById("biggest").style.opacity = 1
    document.getElementById("Greatest").style.opacity = 1
    document.getElementById("walk").style.opacity = 1
    document.getElementById("description").innerHTML = `${carddrawn1.name}`
    document.getElementById("carddescription").innerHTML = `${carddrawn1.description}`
}
mostlovebutton.addEventListener("click", ()=>{
    action1 = carddrawn1.most_loveable,
    action2 = carddrawn2.most_loveable
    compare()
    display()
})
smartestbutton.addEventListener("click", ()=>{
    action1 = carddrawn1.smartest
    action2 = carddrawn2.smartest
    compare()
    display()
})
fattestbutton.addEventListener("click",()=>{
    action1 = carddrawn1.fattest
    action2 = carddrawn2.fattest
    compare()
    display()
})
biggestbutton.addEventListener("click",()=>{
    action1 = carddrawn1.biggest_nerd
    action2 = carddrawn2.biggest_nerd
    compare() 
    display()
})
greatestbutton.addEventListener("click",()=>{
    action1 = carddrawn1.greatest_anarchist
    action2 = carddrawn2.greatest_anarchist
    compare()
    display()
})
walkbutton.addEventListener("click",()=>{
    action1 = carddrawn1.walk_of_fame;
    action2 = carddrawn2.walk_of_fame;
    compare();
    display()
})
const display2 = ()=>{
    document.getElementById("mostlove").style.display = "block"
    document.getElementById("smartest").style.display = "block"
    document.getElementById("fattest").style.display = "block"
    document.getElementById("biggest").style.display = "block"
    document.getElementById("Greatest").style.display = "block"
    document.getElementById("walk").style.display = "block"
}
const display = ()=>{
    document.getElementById("draw").style.display = "block"
    document.getElementById("mostlove").style.display = "none"
    document.getElementById("smartest").style.display = "none"
    document.getElementById("fattest").style.display = "none"
    document.getElementById("biggest").style.display = "none"
    document.getElementById("Greatest").style.display = "none"
    document.getElementById("walk").style.display = "none"
}
const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "../decks/simpsons/abraham.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "../decks/simpsons/apu.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "../decks/simpsons/barney.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "../decks/simpsons/bart.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "../decks/simpsons/burns.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "../decks/simpsons/chief.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "../decks/simpsons/dr.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "../decks/simpsons/edna.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "../decks/simpsons/willie.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "../decks/simpsons/homer.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "../decks/simpsons/itchy.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "../decks/simpsons/clown.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "../decks/simpsons/lenny.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "../decks/simpsons/lisa.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "../decks/simpsons/maggie.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "../decks/simpsons/marge.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "../decks/simpsons/martin.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "../decks/simpsons/van.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "../decks/simpsons/moe.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "../decks/simpsons/ned.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "../decks/simpsons/nelson.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "../decks/simpsons/otto.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "../decks/simpsons/patty.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "../decks/simpsons/skinner.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "../decks/simpsons/little.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "../decks/simpsons/terri.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "../decks/simpsons/bob.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "../decks/simpsons/cat.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "../decks/simpsons/todd.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "../decks/simpsons/smithers.jpg"
    }
}
const secondcoverpic = () => {
    if (carddrawn2.pic == 1){
        document.getElementById("showncard2").src = "../decks/simpsons/abraham.jpg"
    }
    if (carddrawn2.pic == 2){
        document.getElementById("showncard2").src = "../decks/simpsons/apu.jpg"
    }
    if (carddrawn2.pic == 3){
        document.getElementById("showncard2").src = "../decks/simpsons/barney.jpg"
    }
    if (carddrawn2.pic == 4){
        document.getElementById("showncard2").src = "../decks/simpsons/bart.jpg"
    }
    if (carddrawn2.pic == 5){
        document.getElementById("showncard2").src = "../decks/simpsons/burns.jpg"
    }
    if (carddrawn2.pic == 6){
        document.getElementById("showncard2").src = "../decks/simpsons/chief.jpg"
    }
    if (carddrawn2.pic == 7){
        document.getElementById("showncard2").src = "../decks/simpsons/dr.jpg"
    }
    if (carddrawn2.pic == 8){
        document.getElementById("showncard2").src = "../decks/simpsons/edna.jpg"
    }
    if (carddrawn2.pic == 9){
        document.getElementById("showncard2").src = "../decks/simpsons/willie.jpg"
    }
    if (carddrawn2.pic == 10){
        document.getElementById("showncard2").src = "../decks/simpsons/homer.jpg"
    }
    if (carddrawn2.pic == 11){
        document.getElementById("showncard2").src = "../decks/simpsons/itchy.jpg"
    }
    if (carddrawn2.pic == 12){
        document.getElementById("showncard2").src = "../decks/simpsons/clown.jpg"
    }
    if (carddrawn2.pic == 13){
        document.getElementById("showncard2").src = "../decks/simpsons/lenny.jpg"
    }
    if (carddrawn2.pic == 14){
        document.getElementById("showncard2").src = "../decks/simpsons/lisa.jpg"
    }
    if (carddrawn2.pic == 15){
        document.getElementById("showncard2").src = "../decks/simpsons/maggie.jpg"
    }
    if (carddrawn2.pic == 16){
        document.getElementById("showncard2").src = "../decks/simpsons/marge.jpg"
    }
    if (carddrawn2.pic == 17){
        document.getElementById("showncard2").src = "../decks/simpsons/martin.jpg"
    }
    if (carddrawn2.pic == 18){
        document.getElementById("showncard2").src = "../decks/simpsons/van.jpg"
    }
    if (carddrawn2.pic == 19){
        document.getElementById("showncard2").src = "../decks/simpsons/moe.jpg"
    }
    if (carddrawn2.pic == 20){
        document.getElementById("showncard2").src = "../decks/simpsons/ned.jpg"
    }
    if (carddrawn2.pic == 21){
        document.getElementById("showncard2").src = "../decks/simpsons/nelson.jpg"
    }
    if (carddrawn2.pic == 22){
        document.getElementById("showncard2").src = "../decks/simpsons/otto.jpg"
    }
    if (carddrawn2.pic == 23){
        document.getElementById("showncard2").src = "../decks/simpsons/patty.jpg"
    }
    if (carddrawn2.pic == 24){
        document.getElementById("showncard2").src = "../decks/simpsons/skinner.jpg"
    }
    if (carddrawn2.pic == 25){
        document.getElementById("showncard2").src = "../decks/simpsons/little.jpg"
    }
    if (carddrawn2.pic == 26){
        document.getElementById("showncard2").src = "../decks/simpsons/terri.jpg"
    }
    if (carddrawn2.pic == 27){
        document.getElementById("showncard2").src = "../decks/simpsons/bob.jpg"
    }
    if (carddrawn2.pic == 28){
        document.getElementById("showncard2").src = "../decks/simpsons/cat.jpg"
    }
    if (carddrawn2.pic == 29){
        document.getElementById("showncard2").src = "../decks/simpsons/todd.jpg"
    }
    if (carddrawn2.pic == 30){
        document.getElementById("showncard2").src = "../decks/simpsons/smithers.jpg"
    }
}
let compare = function(){
    secondcoverpic()
    document.getElementById("description").innerHTML = `${carddrawn1.name} VS ${carddrawn2.name}`
    
    if (action1 > action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU WIN !!!`
        deck1.push(carddrawn2)
        deck1.push(carddrawn1)
        draw(deck1)
        console.log(drawpile)
    }
    else if (action1 < action2){
        document.getElementById("carddescription").innerHTML = `${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}     YOU LOSE !!!`
        deck2.push(carddrawn1)
        deck2.push(carddrawn2)
        draw(deck2)
        console.log(drawpile)


    }
    else if (action1 == action2){
        drawpile.push(carddrawn1)
        drawpile.push(carddrawn2)
        document.getElementById("carddescription").innerHTML = "its a draw the cards go in the middle - new cards for everyone!!"
        console.log(drawpile)
    }
}
let draw = function(deck){
    for(let i = 0; i <drawpile.length;i++){
        deck.splice(drawpile)
    }
}
home.addEventListener("click", ()=>{
    window.location.replace("../htmls/index.html");
})
drawbutton.addEventListener("click", ()=>{
    simdraw()
    document.getElementById("draw").style.display = "none"
})