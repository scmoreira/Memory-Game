class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    for(let i = this.cards.length - 1; i > 0; i--){
      const index = Math.floor(Math.random() * i)
      const temp = this.cards[i]
      this.cards[i] = this.cards[index]
      this.cards[index] = temp
    }
    return cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } 
    return false
  }
}
