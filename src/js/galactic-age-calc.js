export default class GalacticAgeCalc {
  constructor(past, present, future) {
    this.pastAge = past;
    this.presentAge = present;
    this.futureAge = future;
    this.mercuryTime = Math.floor(this.presentAge/.241);
    this.venusTime = Math.floor(this.presentAge/.615);
    this.marsTime = Math.floor(this.presentAge/1.88);
    this.jupiterTime = Math.floor(this.presentAge/11.86);
    this.elapsedPastEarthTime = null;
    this.elapsedPastMercuryTime = null;
    this.elapsedPastVenusTime = null;
    this.elapsedPastMarsTime = null;
    this.elapsedPastJupiterTime = null;
    this.futureEarthTime = null;
    this.futureMercuryTime = null;
    this.futureVenusTime = null;
    this.futureMarsTime = null;
    this.futureJupiterTime = null;
  }

  ghostOfAgesPast() {
    this.elapsedPastEarthTime = this.presentAge - this.pastAge;
    this.elapsedPastMercuryTime = Math.floor(this.mercuryTime - (this.pastAge/.241));
    this.elapsedPastVenusTime = this.venusTime - (this.pastAge/.615);
    this.elapsedPastMarsTime = this.marsTime - (this.pastAge/1.88);
    this.elapsedPastJupiterTime = this.jupiterTime - (this.pastAge/11.86);
  }

  elapsedFutureCalc() {
    this.futureEarthTime = this.futureAge - this.presentAge;
    this.futureMercuryTime = (this.futureAge/.241) - this.mercuryTime;
    this.futureVenusTime = (this.futureAge/.615) - this.venusTime;
    this.futureMarsTime = (this.futureAge/1.88) - this.marsTime;
    this.futureJupiterTime = (this.futureAge/11.86) - this.jupiterTime;
  }
}