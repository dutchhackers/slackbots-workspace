import { WebClient } from '@slack/web-api';
import { emoji, reverseText } from '../../utils';

export const onReactionAdded = async ({ event, client, logger }) => {
  try {
    const data = await (client as WebClient).conversations.history({
      channel: event.item.channel,
      latest: event.item.ts,
      inclusive: true,
      limit: 1,
    });

    const inputText = data.messages[0].text;
    console.log('data', inputText);

    const result = await client.chat.postMessage({
      channel: event.item.channel,
      // text: `That's right, <@${event.user}>! ${emoji(event.reaction)}`,
      text: `${reverseText(inputText)} ${emoji(event.reaction)}`,
      thread_ts: event.item.ts,
    });
    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
