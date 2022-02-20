import { App } from '@slack/bolt';
import { onAppMentionEvent } from './app-mention.event';
import { onReactionAdded } from './reaction-added.event';

export const register = (app: App) => {
  app.event('reaction_added', onReactionAdded);
  app.event('app_mention', onAppMentionEvent);
};
