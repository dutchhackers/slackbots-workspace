import { App } from '@slack/bolt';
import { register as registerEvents } from './events';

export const register = (app: App) => {
  // register events
  registerEvents(app);
};
