function getRandomCard(){
    let RandomCard = Math.floor(Math.random()*13)+1
    if(RandomCard===1){
        return 11
    }else if(RandomCard>10){
        return 10
        }
        else{
            return RandomCard
        }
    }
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=''
let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++) {
        cardsEl.textContent+=cards[i]+" "
    }
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
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()

}
