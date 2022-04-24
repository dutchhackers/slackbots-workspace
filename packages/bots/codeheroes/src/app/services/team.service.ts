import { autoInjectable } from 'tsyringe';
import Db from '../db';

@autoInjectable()
export class TeamService {
  db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  getAll() {
    return this.db.teams;
  }
}
