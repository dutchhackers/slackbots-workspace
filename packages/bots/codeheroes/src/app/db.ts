export default class Db {
  get players() {
    return players;
  }

  get teams() {
    return teams;
  }
}

const players = [
  { id: 1, name: 'Michael' },
  { id: 2, name: 'Bas' },
  { id: 3, name: 'Cas' },
];

const teams = [
  { id: 1, name: 'The Avengers' },
  { id: 2, name: 'Suicide Squad' },
  { id: 3, name: 'X-Men' },
  { id: 4, name: 'Justice League' },
];
