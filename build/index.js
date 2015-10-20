/*
 * Credit Card validation
 *
 * Results:
 *  false = invalid card
 *  1 = american express
 *  2 = visa
 *  3 = mastercard
 *  4 = discover
 *  5 = dinerss club or carte blanche
 *  6 = enRoute
 *  7 = JCB
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function checkPosition(character, position) {
  return this.indexOf(character) === position;
}

function checkLength(size) {
  return this.length === size;
}

// American Express
function checkIfAmericanExpress(number) {
  if (!checkLength.call(number, 15)) {
    return false;
  }

  var first = checkPosition.call(number, '3', 0);
  var second = checkPosition.call(number, '4', 1) || checkPosition.call(number, '7', 1);

  if (first && second) {
    return true;
  }

  return false;
}

// Visa
function checkIfVisa(number) {
  if (!checkLength.call(number, 13) && !checkLength.call(number, 16)) {
    return false;
  }

  if (checkPosition.call(number, '4', 0)) {
    return true;
  }

  return false;
}

// Master Card
function checkIfMasterCard(number) {
  if (!checkLength.call(number, 16)) {
    return false;
  }

  var first = checkPosition.call(number, '5', 0);

  var second = number[1] >= 1 && number[1] <= 5;

  if (first && second) {
    return true;
  }

  return false;
}

// Discover
function checkIfDiscover(number) {
  if (!checkLength.call(number, 16)) {
    return false;
  }

  var firstEight = number.substring(0, 8);

  if (firstEight >= 60110000 && firstEight <= 60119999) {
    return true;
  }

  if (firstEight >= 65000000 && firstEight <= 65999999) {
    return true;
  }

  if (firstEight >= 62212600 && firstEight <= 62292599) {
    return true;
  }

  return false;
}

// Diners Club
function checkIfDinersClub(number) {
  if (!checkLength.call(number, 14)) {
    return false;
  }

  var first = checkPosition.call(number, '3', 0);
  var second = checkPosition.call(number, '0', 1) || checkPosition.call(number, '6', 1) || checkPosition.call(number, '8', 1);

  if (first && second) {
    return true;
  }

  return false;
}

// JCB
function checkIfJcb(number) {
  if (!checkLength.call(number, 16)) {
    return false;
  }

  var firstFour = checkPosition.call(number, '3088', 0) || checkPosition.call(number, '3096', 0) || checkPosition.call(number, '3112', 0) || checkPosition.call(number, '3158', 0) || checkPosition.call(number, '3337', 0);

  if (firstFour) {
    return true;
  }

  var firstEight = number.substring(0, 8);

  if (firstEight >= 35280000 && firstEight <= 35899999) {
    return true;
  }

  return false;
}

function validate(creditCardNumber) {
  var number = creditCardNumber.toString();

  // American Express
  var isAmericanExpress = checkIfAmericanExpress(number);
  if (isAmericanExpress) return 'american express';
  // VISA
  var isVisa = checkIfVisa(number);
  if (isVisa) return 'visa';
  // MasterCard
  var isMasterCard = checkIfMasterCard(number);
  if (isMasterCard) return 'master card';
  //  Discover
  var isDiscover = checkIfDiscover(number);
  if (isDiscover) return 'discover';
  // Diners Club or Carte Blanche
  var isDinersClub = checkIfDinersClub(number);
  if (isDinersClub) return 'diners club';
  // JCB
  var isJcb = checkIfJcb(number);
  if (isJcb) return 'jcb';

  throw new Error('Invalid credit card number');
}

validate.isAmericanExpress = function (creditCardNumber) {
  return checkIfAmericanExpress(creditCardNumber);
};

validate.isVisa = function (creditCardNumber) {
  return checkIfVisa(creditCardNumber);
};

validate.isMasterCard = function (creditCardNumber) {
  return checkIfMasterCard(creditCardNumber);
};

validate.isDiscover = function (creditCardNumber) {
  return checkIfDiscover(creditCardNumber);
};

validate.isDinersClub = function (creditCardNumber) {
  return checkIfDinersClub(creditCardNumber);
};

validate.isJCB = function (creditCardNumber) {
  return checkIfJcb(creditCardNumber);
};

exports['default'] = validate;
module.exports = exports['default'];
