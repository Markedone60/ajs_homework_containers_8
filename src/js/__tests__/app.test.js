import Team from '../app';
import Character from '../character';

test('testing add method functionality', () => {
  const team = new Team();
  const char = new Character('King');

  team.members.add(char);
  expect(team.toArray()).toEqual([char]);
});

test('testing addition of several characters', () => {
  const team = new Team();
  const char1 = new Character('Tank');
  const char2 = new Character('Cleric');

  team.addAll([char1, char2]);

  expect(team.members.size).toBe(2);
});

test('checking toArray', () => {
  const team = new Team();
  const char1 = new Character('Tank');
  const char2 = new Character('Cleric');

  team.addAll([char1, char2]);

  expect(team.toArray()).toEqual([char1, char2]);
});
