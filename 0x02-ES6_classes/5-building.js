export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this._checkEvacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  _checkEvacuationWarningMessage() {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable class-methods-use-this */
}
