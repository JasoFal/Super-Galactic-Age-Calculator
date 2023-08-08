import GalacticAgeCalc from "../src/js/galactic-age-calc"

describe('GalacticAgeCalc', () => {
  let galacticAgeCalc;
  beforeEach(() => {
    galacticAgeCalc = new GalacticAgeCalc(10, 50, 60);
  });

  test('correctly create object with key-item pairs for past, present, and future ages', () => {
    expect(galacticAgeCalc.past).toEqual(10);
    expect(galacticAgeCalc.present).toEqual(50);
    expect(galacticAgeCalc.future).toEqual(60);
  });
});