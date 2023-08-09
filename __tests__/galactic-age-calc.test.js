import GalacticAgeCalc from "../src/js/galactic-age-calc"

describe('GalacticAgeCalc', () => {
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
    console.table(galacticAgeCalc);
    expect(galacticAgeCalc.mercuryTime).toBeGreaterThanOrEqual(207);
  });

  test('correctly create key-item pair for calculating venusTime', () => {
    expect(galacticAgeCalc.venusTime).toBeGreaterThanOrEqual(81);
  }); 

  test('correctly create key-item pair for calculating marsTime', () => {
    expect(galacticAgeCalc.marsTime).toBeGreaterThanOrEqual(26);
  });

  test('correctly create key-item pair for calculating jupiterTime', () => {
    expect(galacticAgeCalc.jupiterTime).toBeGreaterThanOrEqual(4);
  });

  test('correctly create key-item pair for elapsedEarthTime, MercuryTime, VenusTime, MarsTime, and JupiterTime', () => {
    expect(galacticAgeCalc.elapsedEarthTime).toEqual(null);
    expect(galacticAgeCalc.elapsedMercuryTime).toEqual(null);
    expect(galacticAgeCalc.elapsedVenusTime).toEqual(null);
    expect(galacticAgeCalc.elapsedMarsTime).toEqual(null);
    expect(galacticAgeCalc.elapsedJupiterTime).toEqual(null);
  });
});

