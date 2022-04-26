import 'reflect-metadata';
import { container } from 'tsyringe';

import { App } from '@slack/bolt';
import { EventController } from './controllers/app-mention.controller';
import { LoggerService } from './services/logger.service';

// container.register<LoggerService>(LoggerService, { useValue: new LoggerService() });

// container.registerSingleton<LoggerService>('LoggerService', LoggerService);

const eventController = container.resolve(EventController);

/*


async function bootstrap() {
  const appOptions = {
    token: process.env['SLACK_BOT_TOKEN'],
    signingSecret: process.env['SLACK_SIGNING_SECRET'],
    socketMode: true,
    appToken: process.env['SLACK_APP_TOKEN'],
    port: +process.env['PORT']! || 3000,
  };

  // const loggerService = container.resolve(LoggerService);

  const app = new App(appOptions);

  // register(app);
  app.event('app_mention', eventController.onAppMentionEvent);
  // app.event('reaction_added', onReactionAdded);

  // Start your app
  await app.start();

  console.log('⚡️ Codeheroes is running!');
}

bootstrap().catch(console.error);
*/

import { PlayerService, TeamService } from './services';

const playerService = container.resolve(PlayerService);
const teamService = container.resolve(TeamService);

function main() {
  console.log(`Running Bot`);

  // const playersData = playerService.getAll();
  // console.log(`Number of players: ${playersData.length}`);
  // console.log(`Players: ${playersData.map(player => player.name).join(', ')}`);

  // const teamsData = teamService.getAll();
  // console.log(`Number of teams: ${teamsData.length}`);
  // console.log(`Teams: ${teamsData.map(team => team.name).join(', ')}`);

  eventController.test().then(() => {
    console.log('ready');
  });
}

main();
