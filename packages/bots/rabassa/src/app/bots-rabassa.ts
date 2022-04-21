import { App } from '@slack/bolt';
import { register } from './listeners';

async function bootstrap() {
  const appOptions = {
    token: process.env['SLACK_BOT_TOKEN'],
    signingSecret: process.env['SLACK_SIGNING_SECRET'],
    socketMode: true,
    appToken: process.env['SLACK_APP_TOKEN'],
    port: +process.env['PORT']! || 3000,
  };

  const app = new App(appOptions);

  register(app);

  // Start your app
  await app.start();

  console.log('⚡️ Rebassa is running!');
}

bootstrap();
