import GalacticAgeCalc from "../src/js/galactic-age-calc"

describe('GalacticAgeCalc', () => {
  // Later tests but didn't want beforeEach to affect them
  test('round pastAge down', () => {
    let galacticAgeCalc = new GalacticAgeCalc(10.4512, 50.5123, 60.421);
    expect(galacticAgeCalc.pastAge).toEqual(10);
  });

  test('round presentAge down', () => {
    let galacticAgeCalc = new GalacticAgeCalc(10.4512, 50.5123, 60.421);
    expect(galacticAgeCalc.presentAge).toEqual(50);
  });

  test('round futureAge down', () => {
    let galacticAgeCalc = new GalacticAgeCalc(10.4512, 50.5123, 60.421);
    expect(galacticAgeCalc.futureAge).toEqual(60);
  });

  let galacticAgeCalc;
  beforeEach(() => {
    galacticAgeCalc = new GalacticAgeCalc(10, 50, 60);
  });

  test('correctly create object with key-item pairs for past, present, and future ages', () => {
    expect(galacticAgeCalc.pastAge).toEqual(10);
    expect(galacticAgeCalc.presentAge).toEqual(50);
    expect(galacticAgeCalc.futureAge).toEqual(60);
  });

  test('correctly create key-item pair for calculating mercuryTime', () => {
    expect(galacticAgeCalc.mercuryTime).toEqual(207);
  });

  test('correctly create key-item pair for calculating venusTime', () => {
    expect(galacticAgeCalc.venusTime).toEqual(81);
  }); 

  test('correctly create key-item pair for calculating marsTime', () => {
    expect(galacticAgeCalc.marsTime).toEqual(26);
  });

  test('correctly create key-item pair for calculating jupiterTime', () => {
    expect(galacticAgeCalc.jupiterTime).toEqual(4);
  });

  test('correctly create key-item pairs for elapsedPastEarthTime, PastMercuryTime, PastVenusTime, PastMarsTime, and PastJupiterTime', () => {
    expect(galacticAgeCalc.elapsedPastEarthTime).toEqual(null);
    expect(galacticAgeCalc.elapsedPastMercuryTime).toEqual(null);
    expect(galacticAgeCalc.elapsedPastVenusTime).toEqual(null);
    expect(galacticAgeCalc.elapsedPastMarsTime).toEqual(null);
    expect(galacticAgeCalc.elapsedPastJupiterTime).toEqual(null);
  });

  test('correctly create key-item pairs for elapsedFutureEarthTime, FutureMercuryTime, FutureVenusTime, FutureMarsTime, and FutureJupiterTime', () => {
    expect(galacticAgeCalc.futureEarthTime).toEqual(null);
    expect(galacticAgeCalc.futureMercuryTime).toEqual(null);
    expect(galacticAgeCalc.futureVenusTime).toEqual(null);
    expect(galacticAgeCalc.futureMarsTime).toEqual(null);
    expect(galacticAgeCalc.futureJupiterTime).toEqual(null);
  });
});

describe('ghostOfAgesPast', () => {
  let galacticAgeCalc;
  beforeEach(() => {
    galacticAgeCalc = new GalacticAgeCalc(10, 50, 60);
    galacticAgeCalc.ghostOfAgesPast();
  });

  test('calculate difference between pastAge and presentAge in different planet years', () => {
    expect(galacticAgeCalc.elapsedPastEarthTime).toBeGreaterThanOrEqual(40);
    expect(galacticAgeCalc.elapsedPastMercuryTime).toEqual(165);
    expect(galacticAgeCalc.elapsedPastJupiterTime).toEqual(3);
    expect(galacticAgeCalc.elapsedPastVenusTime).toEqual(64);
    expect(galacticAgeCalc.elapsedPastMarsTime).toEqual(20);
  });
});

describe('elapsedFutureCalc', () => {
  let galacticAgeCalc;
  beforeEach(() => {
    galacticAgeCalc = new GalacticAgeCalc(10, 50, 60);
    galacticAgeCalc.elapsedFutureCalc();
  });

  test('calculate difference between futureAge and presentAge in planet years', () => {
    expect(galacticAgeCalc.futureEarthTime).toEqual(10);
    expect(galacticAgeCalc.futureMercuryTime).toEqual(41);
    expect(galacticAgeCalc.futureJupiterTime).toEqual(1);
    expect(galacticAgeCalc.futureMarsTime).toEqual(5);
    expect(galacticAgeCalc.futureVenusTime).toEqual(16);
  });
});

