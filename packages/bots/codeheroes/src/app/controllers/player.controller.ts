import { autoInjectable } from 'tsyringe';
import { LoggerService, PlayerService } from '../services';
import { BaseController } from './base.controller';

@autoInjectable()
export class PlayerController extends BaseController {
  constructor(private playerService?: PlayerService, private logger?: LoggerService) {
    super();

    this.onInit();
  }
  async test() {
    const playersData = this.playerService.getAll();
    console.log(`Number of players: ${playersData.length}`);
    console.log(`Players: ${playersData.map(player => player.name).join(', ')}`);
  }

  async onAppMentionEvent({ event, client, say, logger }) {
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

  private onInit() {
    this.logger.debug('onInit');

    this.registerEvent('app_mention', this.onAppMentionEvent);
  }
}
