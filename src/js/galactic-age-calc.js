export default class GalacticAgeCalc {
  constructor(past, present, future) {
    this.pastAge = past;
    this.presentAge = present;
    this.futureAge = future;
    this.mercuryTime = this.presentAge/.241;
    this.venusTime = this.presentAge/.615;
    this.marsTime = this.presentAge/1.88;
    this.jupiterTime = this.presentAge/11.86;
    this.elapsedPastEarthTime = null;
    this.elapsedPastMercuryTime = null;
    this.elapsedPastVenusTime = null;
    this.elapsedPastMarsTime = null;
    this.elapsedPastJupiterTime = null;
  }

  ghostOfAgesPast() {
    this.elapsedPastEarthTime = this.presentAge - this.pastAge;
    this.elapsedPastMercuryTime = this.mercuryTime - (this.pastAge/.241);
  }
}