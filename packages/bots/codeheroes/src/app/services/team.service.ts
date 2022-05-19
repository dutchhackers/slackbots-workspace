import { autoInjectable } from 'tsyringe';
import Db from '../db';
import { sleep } from '../utils';

@autoInjectable()
export class TeamService {
  db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async getAll() {
    console.log('beforeSleep');
    await sleep(2000);
    console.log('afterSleep');
    return this.db.teams;
  }
}
