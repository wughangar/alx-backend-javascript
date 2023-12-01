export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Data types must be string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `Airport [${this._code}]`;
  }
}
