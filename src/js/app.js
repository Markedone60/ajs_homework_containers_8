export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Charachter was already added');
    } else {
      this.members.add(character);
      return this.members;
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
      return this.members;
    });
  }

  toArray() {
    const newArr = [];
    this.members.forEach((member) => newArr.push(member));
    return newArr;
  }
}
