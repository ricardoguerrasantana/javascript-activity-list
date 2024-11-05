class Activity {
  constructor(amount) {
    this.amount = amount
  }

  setAmount(amount) {
    if (amount <= 0) return false
    this.amount = amount
    return true
  }
  
  getAmount() {
    return this.amount
  }
}

class Payment extends Activity {
  constructor(amount, receiver) {
    super(amount)
    this.receiver = receiver
  }

  setReceiver(receiver) {
    this.receiver = receiver
  }
  getReceiver() {
    return this.receiver
  }
}

class Refund extends Activity {
  constructor(amount, sender) {
    super(amount)
    this.sender = sender
  }

  setSender(sender) {
    this.sender = sender
  }
  getSender() {
    return this.sender
  }
} 
