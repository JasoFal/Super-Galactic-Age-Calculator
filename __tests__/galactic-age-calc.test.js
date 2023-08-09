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
});

// CK3 Total War Mod