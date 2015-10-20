const creditCardValidator = require('../build/index.js');

const valid = {
  americanExpress: [
    '378282246310005',
    '371449635398431',
    '37',
    '34',
  ],
  visa: [
    '4242424242424242',
    '4012888888881881',
    '4000056655665556',
    '40',
    '42',
  ],
  masterCard: [
    '5555555555554444',
    '5200828282828210',
    '5105105105105100',
    '51',
    '52',
    '53',
    '54',
    '55',
  ],
  discover: [
    '6011111111111117',
    '6011000990139424',
    '60119502',
    '65986999',
    '62213600',
  ],
  dinersClub: [
    '30569309025904',
    '38520000023237',
    '30',
    '36',
    '38',
  ],
  jcb: [
    '3530111333300000',
    '3566002020360505',
    '3088',
    '3096',
    '3112',
    '3158',
    '3337',
  ],
};

describe('Credit card validation', () => {
  it('should be a valid American Express', () => {
    // direct validation
    expect(
      creditCardValidator.isAmericanExpress(valid.americanExpress[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isAmericanExpress(valid.americanExpress[2])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.americanExpress[1])
    ).to.be.equal('american express');

    expect(
      creditCardValidator(valid.americanExpress[3])
    ).to.be.equal('american express');
  });

  it('should be a valid VISA', () => {
    // direct validation
    expect(
      creditCardValidator.isVisa(valid.visa[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isVisa(valid.visa[3])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.visa[1])
    ).to.be.equal('visa');

    expect(
      creditCardValidator(valid.visa[2])
    ).to.be.equal('visa');

    expect(
      creditCardValidator(valid.visa[4])
    ).to.be.equal('visa');
  });

  it('should be a valid MasterCard', () => {
    // direct validation
    expect(
      creditCardValidator.isMasterCard(valid.masterCard[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isMasterCard(valid.masterCard[3])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isMasterCard(valid.masterCard[4])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.masterCard[1])
    ).to.be.equal('master card');

    expect(
      creditCardValidator(valid.masterCard[2])
    ).to.be.equal('master card');

    expect(
      creditCardValidator(valid.masterCard[5])
    ).to.be.equal('master card');

    expect(
      creditCardValidator(valid.masterCard[6])
    ).to.be.equal('master card');

    expect(
      creditCardValidator(valid.masterCard[7])
    ).to.be.equal('master card');
  });

  it('should be a valid Discover', () => {
    // direct validation
    expect(
      creditCardValidator.isDiscover(valid.discover[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isDiscover(valid.discover[2])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.discover[1])
    ).to.be.equal('discover');

    expect(
      creditCardValidator(valid.discover[3])
    ).to.be.equal('discover');

    expect(
      creditCardValidator(valid.discover[4])
    ).to.be.equal('discover');
  });

  it('should be a valid Diners Club or Carte Blanche', () => {
    // direct validation
    expect(
      creditCardValidator.isDinersClub(valid.dinersClub[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isDinersClub(valid.dinersClub[2])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isDinersClub(valid.dinersClub[3])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.dinersClub[1])
    ).to.be.equal('diners club');

    expect(
      creditCardValidator(valid.dinersClub[4])
    ).to.be.equal('diners club');
  });

  it('should be a valid JCB', () => {
    // direct validation
    expect(
      creditCardValidator.isJCB(valid.jcb[0])
    ).to.be.equal(true);

    expect(
      creditCardValidator.isJCB(valid.jcb[2])
    ).to.be.equal(true);

    // unknown validation
    expect(
      creditCardValidator(valid.jcb[1])
    ).to.be.equal('jcb');

    expect(
      creditCardValidator(valid.jcb[3])
    ).to.be.equal('jcb');

    expect(
      creditCardValidator(valid.jcb[4])
    ).to.be.equal('jcb');
  });
});
