export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)){
      throw new Error('This character was already added'); 
    }
    this.members.add(character);
  }

  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  toArray(){
    return [...this.members];
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}