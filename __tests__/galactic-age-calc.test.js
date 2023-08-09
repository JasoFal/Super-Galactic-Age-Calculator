import { template } from "@babel/core";
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

  test('calculate difference between pastAge and presentAge in Earth years', () => {
    expect(galacticAgeCalc.elapsedPastEarthTime).toBeGreaterThanOrEqual(40);
    console.table(galacticAgeCalc);
  });

  test('calculate difference between pastAge and presentAge in Mercury years', () => {
    expect(galacticAgeCalc.elapsedPastMercuryTime).toBeGreaterThanOrEqual(165);
  });

  test('calculate difference between pastAge and presentAge in Venus years', () => {
    expect(galacticAgeCalc.elapsedPastVenusTime).toBeGreaterThanOrEqual(64);
  });

  test('calculate difference between pastAge and presentAge in Mars years', () => {
    expect(galacticAgeCalc.elapsedPastMarsTime).toBeGreaterThanOrEqual(20);
  });

  test('calculate difference between pastAge and presentAge in Jupiter years', () => {
    expect(galacticAgeCalc.elapsedPastJupiterTime).toBeGreaterThanOrEqual(3);
  });
});

describe('elapsedFutureCalc', () => {
  let galacticAgeCalc;
  beforeEach(() => {
    galacticAgeCalc = new GalacticAgeCalc(10, 50, 60);
    galacticAgeCalc.elapsedFutureCalc();
  });

  test('calculate difference between futureAge and presentAge in Earth years', () => {
    expect(galacticAgeCalc.futureEarthTime).toBeGreaterThanOrEqual(10);
    console.table(galacticAgeCalc);
  });

  test('calculating difference between futureAge and presentAge in Mercury years', () => {
    expect(galacticAgeCalc.futureMercuryTime).toBeGreaterThanOrEqual(41);
  });

  test('calculating difference between futureAge and presentAge in Venus years', () => {
    expect(galacticAgeCalc.futureVenusTime).toBeGreaterThanOrEqual(16);
  });

  test('calculating difference between futureAge and presentAge in Mars years', () => {
    expect(galacticAgeCalc.futureMarsTime).toBeGreaterThanOrEqual(5);
  });
  
  test('calculating difference between futureAge and presentAge in Jupiter years', () => {
    expect(galacticAgeCalc.futureJupiterTime).toBeGreaterThanOrEqual(2);
  });
});

