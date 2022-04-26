import { autoInjectable } from 'tsyringe';
import Db from '../db';
import { LoggerService, PlayerService, TeamService } from '../services';

@autoInjectable()
export class EventController {
  db: Db;

  constructor(db: Db, private playerService: PlayerService, private teamService: TeamService, private loggerService: LoggerService) {
    this.db = db;
    // this.loggerService = loggerService;
    // console.log('Initialize logger service', loggerService);q
    // console.log(this.db.players);
  }
  async test() {
    const playersData = this.playerService.getAll();
    console.log(`Number of players: ${playersData.length}`);
    console.log(`Players: ${playersData.map(player => player.name).join(', ')}`);

    const teamsData = await this.teamService.getAll();
    console.log(`Number of teams: ${teamsData.length}`);
    console.log(`Teams: ${teamsData.map(team => team.name).join(', ')}`);
  }

  async onAppMentionEvent({ event, client, say, logger }) {
    console.log(this.db.players);

    // this.loggerService.log('onAppMentionEvent');
    try {
      await client.reactions.add({
        name: '+1',
        channel: event.channel,
        timestamp: event.ts,
      });

      console.log('App mention: ' + event.text);

      await say({
        // as_user: true,
        text: `hi <@${event.user}>, what's up?`,
        thread_ts: event.thread_ts ?? event.ts,
      });
    } catch (error) {
      logger.error(error);
    }
  }
}
