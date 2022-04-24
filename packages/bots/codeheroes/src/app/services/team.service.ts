import Db from '../db';

const db = new Db();

export class TeamService {
  getAll() {
    return db.teams;
  }
}
