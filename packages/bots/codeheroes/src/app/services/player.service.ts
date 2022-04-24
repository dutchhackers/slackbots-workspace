import Db from '../db';

const db = new Db();

export class PlayerService {
  getAll() {
    return db.players;
  }
}
