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
/////////////////////////////////
let draw = "dcdraw"

let dcdraw = function(){
    if(deck2.length == 0 ){
        {alert("You win the other player has no more cards")};
    }
    carddrawn1 = deck1.shift();
    carddrawn2 = deck2.shift();
    coverpic()

    const coverpic = () => {
    if (carddrawn1.pic == 1){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/ares.jpg"
    }
    if (carddrawn1.pic == 2){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/artemis.jpg"
    }
    if (carddrawn1.pic == 3){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/bane.jpg"
    }
    if (carddrawn1.pic == 4){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/beastboy.jpg"
    }
    if (carddrawn1.pic == 5){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/blackadams.jpg"
    }
    if (carddrawn1.pic == 6){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/catwoman.jpg"
    }
    if (carddrawn1.pic == 7){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/cheetah.jpg"
    }
    if (carddrawn1.pic == 8){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/cyborg.jpg"
    }
    if (carddrawn1.pic == 9){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/donnatroy.jpg"
    }
    if (carddrawn1.pic == 10){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/doomsday.jpg"
    }
    if (carddrawn1.pic == 11){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/generalzod.jpg"
    }
    if (carddrawn1.pic == 12){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/gog.jpg"
    }
    if (carddrawn1.pic == 13){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/hawkgirl.jpg"
    }
    if (carddrawn1.pic == 14){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/hawkman.jpg"
    }
    if (carddrawn1.pic == 15){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/hippolyta.jpg"
    }
    if (carddrawn1.pic == 16){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/lexluthor.jpg"
    }
    if (carddrawn1.pic == 17){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/martian.jpg"
    }
    if (carddrawn1.pic == 18){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/mrfreeze.jpg"
    }
    if (carddrawn1.pic == 19){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/nightwing.jpg"
    }
    if (carddrawn1.pic == 20){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/plasticman.jpg"
    }
    if (carddrawn1.pic == 21){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/poisonivy.jpg"
    }
    if (carddrawn1.pic == 22){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/powergirl.jpg"
    }
    if (carddrawn1.pic == 23){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/redtornado.jpg"
    }
    if (carddrawn1.pic == 24){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/steel.jpg"
    }
    if (carddrawn1.pic == 25){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/superboy.jpg"
    }
    if (carddrawn1.pic == 26){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/superman.jpg"
    }
    if (carddrawn1.pic == 27){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/theriddler.jpg"
    }
    if (carddrawn1.pic == 28){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/twoface.jpg"
    }
    if (carddrawn1.pic == 29){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/wondergirl.jpg"
    }
    if (carddrawn1.pic == 30){
        document.getElementById("showncard1").src = "/toptrumps/decks/dc/wonderwoman.jpg"
    }
    }


    alert(`Your card is ${carddrawn1.name}  Wins - ${carddrawn1.wincounter} / Loses - ${carddrawn1.losscounter} you have ${deck1.length +1} cards`)
    alert("Lets take a look at your dc character")
    alert(`${carddrawn1.name}, height - ${carddrawn1.height}, intelligence - ${carddrawn1.intelligence}, strength - ${carddrawn1.strength},  speed - ${carddrawn1.speed}, fighting_skills - ${carddrawn1.fighting_skills} `)
    choice = prompt(`(${carddrawn1.name})      would you like to use   (1)height ${carddrawn1.height}, (2) intelligence ${carddrawn1.intelligence} , (3) strength ${carddrawn1.strength}, (4) speed ${carddrawn1.speed}, (5) fighting_skills ${carddrawn1.fighting_skills} `)
    if (choice == 1){
        action1 = carddrawn1.most_loveable
        action2 = carddrawn2.most_loveable
        alert(`you choose most loveable ${carddrawn1.most_loveable}`)
    }
    else if (choice == 2){
        action1 = carddrawn1.height
        action2 = carddrawn2.height
        alert(`you choose height ${carddrawn1.height}`)
    }
    else if (choice == 3){
        action1 = carddrawn1.intelligence
        action2 = carddrawn2.intelligence
        alert(`you choose intelligence ${carddrawn1.intelligence} `)
    }
    else if (choice == 4){
        action1 = carddrawn1.strength
        action2 = carddrawn2.strength
        alert(`you choose strength ${carddrawn1.strength}`)
    }
    else if (choice == 5){
        action1 = carddrawn1.speed
        action2 = carddrawn2.speed
        alert(`you choose greatest speed ${carddrawn1.speed}`)
    }
    else if (choice == 6){
        action1 = carddrawn1.fighting_skills
        action2 = carddrawn2.fighting_skills
        alert(`you choose fighting_skills ${carddrawn1.fighting_skills}`)
    }
    else{
        alert("please try again") 
        choice = prompt(`(${carddrawn1.name})      would you like to use   (1)height ${carddrawn1.height}, (2) intelligence ${carddrawn1.intelligence} , (3) strength ${carddrawn1.strength}, (4) speed ${carddrawn1.speed}, (5) fighting_skills ${carddrawn1.fighting_skills} `)
    }
    compare()
    
}





    let compare = function(){
        alert(` the other player has ${carddrawn2.name}`)
        alert(` ${carddrawn1.name} ${action1} VS   ${carddrawn2.name}  ${action2}`)
        if(drawtype == "mardraw1" && choice == "1" && action1 < action2){
            alert(`your debut year is lower you win !!`)
            carddrawn1.wincounter++
            carddrawn2.losscounter++
            deck1.push(carddrawn2)
            deck1.push(carddrawn1)

    
        }
        else if (drawtype == "mardraw1" && choice == "1" && action1 > action2){
            alert(`your debut year is higher you lose !!`)
            carddrawn2.wincounter++
            carddrawn1.losscounter++
            deck2.push(carddrawn1)
            deck2.push(carddrawn2)

    
        }
        else if (action1 > action2){
            alert(`YOU WIN !!${carddrawn1.name} winner`)
            carddrawn1.wincounter++
            carddrawn2.losscounter++
            deck1.push(carddrawn2)
            deck1.push(carddrawn1)
            draw(deck1)
        }
        else if (action1 == action2){
            drawpile.push(carddrawn1)
            drawpile.push(carddrawn2)
            alert("its a draw the cards go in the middle")
            alert("new cards for everyone!!")
        }
        else {
            alert(`YOU LOSE !!${carddrawn2.name} winner!!`)
            carddrawn2.wincounter++
            carddrawn1.losscounter++
            deck2.push(carddrawn1)
            deck2.push(carddrawn2)
            draw(deck2)
        }
        and()
        
    
    }


    let draw = function(deck){
        for(let i = 0; i <drawpile.length;i++){
            deck.push(i)
        }
    }
    let and = function(){
        if(deck1.length > 0 && drawtype == "dcdraw"){
            dcdraw()
        }
        else {
            alert("all your cards are gone")
            alert("you lose")
        }
    }
    if (drawtype == "dcdraw"){
        dcdraw()
    }
    else if (drawtype == "simdraw1"){
        simdraw()
    }


