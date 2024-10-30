// Activity constructor function
function Activity(amount) {
  this.amount = amount
}

Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false
  }
  this.amount = value
  return true
}

Activity.prototype.getAmount = function () {
  return this.amount
}

// Payment constructor function inheriting from Activity
function Payment(amount, receiver) {
  Activity.call(this, amount) // Call parent constructor
  this.receiver = receiver
}

// Set up inheritance from Activity
Payment.prototype = Object.create(Activity.prototype)
Payment.prototype.constructor = Payment

Payment.prototype.setReceiver = function (receiver) {
  this.receiver = receiver
}

Payment.prototype.getReceiver = function () {
  return this.receiver
}

// Refund constructor function inheriting from Activity
function Refund(amount, sender) {
  Activity.call(this, amount) // Call parent constructor
  this.sender = sender
}

// Set up inheritance from Activity
Refund.prototype = Object.create(Activity.prototype)
Refund.prototype.constructor = Refund

Refund.prototype.setSender = function (sender) {
  this.sender = sender
}

Refund.prototype.getSender = function () {
  return this.sender
}
