import { App } from '@slack/bolt';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { controllers } from './controllers';

function initializeApp() {
  const appOptions = {
    token: process.env['SLACK_BOT_TOKEN'],
    signingSecret: process.env['SLACK_SIGNING_SECRET'],
    socketMode: true,
    appToken: process.env['SLACK_APP_TOKEN'],
    port: +process.env['PORT']! || 3000,
  };

  const app = new App(appOptions);

  container.register<App>('app', {
    useValue: app,
  });

  registerControllers();

  // Start your app
  app.start();

  console.log('⚡️ Codeheroes is running!');
}

function registerControllers() {
  controllers.forEach(controllerClass => {
    const controllerInstance = new controllerClass();
  });
}

initializeApp();
