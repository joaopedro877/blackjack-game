let firstCard=11
let secondCard=10
let sum = firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=''
let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards:" +" "+firstCard+" "+secondCard
    if(sum <= 20){
        message="Do you want to draw a new card?"
    }else if (sum===21){
        message="You've got BlackJack!"
        hasBlackJack=true
    } else{
         message="You're out of the game!"
        isAlive=false
    }
    console.log(message)
    messageEl.textContent=message
}

function newCard(){
    let card=4
    sum+=card
    renderGame()
    cardsEl.textContent+=" "+card
}
function startGame(){
    renderGame()
}
//2:30h