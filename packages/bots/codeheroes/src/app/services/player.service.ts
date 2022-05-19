import { autoInjectable } from 'tsyringe';
import Db from '../db';

@autoInjectable()
export class PlayerService {
  db: Db;

  constructor(db: Db) {
    this.db = db;
  }
  getAll() {
    return this.db.players;
  }
}
