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

function checkPosition(character, position) {
  return this.indexOf(character) === position;
}

// American Express
function checkIfAmericanExpress(number) {
  const first = number::checkPosition('3', 0);
  const second = (
    number::checkPosition('4', 1) ||
    number::checkPosition('7', 1)
  );

  if (first && second) {
    return true;
  }

  return false;
}

// Visa
function checkIfVisa(number) {
  if (number::checkPosition('4', 0)) {
    return true;
  }

  return false;
}

// Master Card
function checkIfMasterCard(number) {
  const first = number::checkPosition('5', 0);

  const second = number[1] >= 1 && number[1] <= 5;

  if (first && second) {
    return true;
  }

  return false;
}

// Discover
function checkIfDiscover(number) {
  const firstEight = number.substring(0, 8);

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
  const first = number::checkPosition('3', 0);
  const second = (
    number::checkPosition('0', 1) ||
    number::checkPosition('6', 1) ||
    number::checkPosition('8', 1)
  );

  if (first && second) {
    return true;
  }

  return false;
}

// JCB
function checkIfJcb(number) {
  const firstFour = (
    number::checkPosition('3088', 0) ||
    number::checkPosition('3096', 0) ||
    number::checkPosition('3112', 0) ||
    number::checkPosition('3158', 0) ||
    number::checkPosition('3337', 0)
  );

  if (firstFour) {
    return true;
  }

  const firstEight = number.substring(0, 8);

  if (firstEight >= 35280000 && firstEight <= 35899999) {
    return true;
  }

  return false;
}

function validate(creditCardNumber) {
  const number = creditCardNumber.toString();

  // American Express
  const isAmericanExpress = checkIfAmericanExpress(number);
  if (isAmericanExpress) return 'american express';
  // VISA
  const isVisa = checkIfVisa(number);
  if (isVisa) return 'visa';
  // MasterCard
  const isMasterCard = checkIfMasterCard(number);
  if (isMasterCard) return 'master card';
  //  Discover
  const isDiscover = checkIfDiscover(number);
  if (isDiscover) return 'discover';
  // JCB
  const isJcb = checkIfJcb(number);
  if (isJcb) return 'jcb';
  // Diners Club or Carte Blanche
  const isDinersClub = checkIfDinersClub(number);
  if (isDinersClub) return 'diners club';

  throw new Error('Invalid credit card number');
}

validate.isAmericanExpress = function(creditCardNumber) {
  return checkIfAmericanExpress(creditCardNumber);
}

validate.isVisa = function(creditCardNumber) {
  return checkIfVisa(creditCardNumber);
}

validate.isMasterCard = function(creditCardNumber) {
  return checkIfMasterCard(creditCardNumber);
}

validate.isDiscover = function(creditCardNumber) {
  return checkIfDiscover(creditCardNumber);
}

validate.isDinersClub = function(creditCardNumber) {
  return checkIfDinersClub(creditCardNumber);
}

validate.isJCB = function(creditCardNumber) {
  return checkIfJcb(creditCardNumber);
}

export default validate;
