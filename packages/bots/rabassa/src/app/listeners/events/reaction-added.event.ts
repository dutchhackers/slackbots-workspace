import { WebClient } from '@slack/web-api';
import { emoji, getMessage, reverseText } from '../../utils';

export const onReactionAdded = async ({ event, client, logger }) => {
  try {
    const inputMessage = await getMessage( client, 
      event.item.channel,
      event.item.ts,
    );

    const result = await client.chat.postMessage({
      channel: event.item.channel,
      text: `${reverseText(inputMessage)} ${emoji(event.reaction)}`,
      thread_ts: event.item.ts,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
