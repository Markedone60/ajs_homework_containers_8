import Team from '../app';
import Character from '../character';

test('Testing functionality of adding 1 character', () => {
  const team = new Team();
  const hero = new Character('Hero');
  team.add(hero);

  expect(team.toArray()).toEqual([{
    name: 'Hero',
  }]);
});

test('Adding similar character repeatedly', () => {
  const team = new Team();
  const hero = new Character('Hero');
  team.add(hero);
  const addHero = () => {
    team.add(hero);
    team.add(hero);
  };

  expect(addHero).toThrow('Charachter was already added');
});

test('Adding several characters', () => {
  const team = new Team();
  const hero1 = new Character('Hero');
  const hero2 = new Character('Heeero');
  team.addAll(hero1, hero2);

  expect(team.toArray()).toEqual(
    [{
      name: 'Hero',
    }, {
      name: 'Heeero',
    }],
  );
});
