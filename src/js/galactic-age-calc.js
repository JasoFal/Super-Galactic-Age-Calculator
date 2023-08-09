export default class GalacticAgeCalc {
  constructor(past, present, future) {
    this.pastAge = past;
    this.presentAge = present;
    this.futureAge = future;
    this.mercuryTime = this.presentAge/.241;
    this.venusTime = this.presentAge/.615;
  }
}