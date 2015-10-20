# stripe-card-validator
Library to validate Stripe's supported credit cards.

## Installation
```bash
npm i -S stripe-card-validator
```

## Usage
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '4242424242424242'; // Visa

const isValid = stripeCardValidator(creditCard);

if (isValid === 'visa') {
  console.log('Is a valid Visa card.');
} else {
  console.log(isValid.message);
}
```

## Examples
### Visa
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '4000056655665556';

const cardType = stripeCardValidator(creditCard); // 'visa'
const isValid = stripeCardValidator.isVisa(creditCard);

if (isValid) {
  console.log('Is a valid Visa card.');
} else {
  console.log(isValid.message);
}


```

### Master Card
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '5200828282828210';

const cardType = stripeCardValidator(creditCard); // 'master card'
const isValid = stripeCardValidator.isMasterCard(creditCard);

if (isValid) {
  console.log('Is a valid Master Card card.');
} else {
  console.log(isValid.message);
}
```

### American Express
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '378282246310005';

const cardType = stripeCardValidator(creditCard); // 'american express'
const isValid = stripeCardValidator.isAmericanExpress(creditCard);

if (isValid) {
  console.log('Is a valid American Express card.');
} else {
  console.log(isValid.message);
}
```

### Discover
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '6011000990139424';

const cardType = stripeCardValidator(creditCard); // 'discover'
const isValid = stripeCardValidator.isDiscover(creditCard);

if (isValid) {
  console.log('Is a valid Discover card.');
} else {
  console.log(isValid.message);
}
```

### Diners Club
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '30569309025904';

const cardType = stripeCardValidator(creditCard); // 'diners club'
const isValid = stripeCardValidator.isDinersClub(creditCard);

if (isValid) {
  console.log('Is a valid Diners Club card.');
} else {
  console.log(isValid.message);
}
```

### JCB
```javascript
import stripeCardValidator from 'stripe-card-validator';

const creditCard = '3566002020360505';

const cardType = stripeCardValidator(creditCard); // 'jcb'
const isValid = stripeCardValidator.isJCB(creditCard);

if (isValid) {
  console.log('Is a valid JCB card.');
} else {
  console.log(isValid.message);
}
```

## Test
```bash
npm test
```

## License
The MIT License (MIT)

Copyright (c) 2015 Platzi.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
