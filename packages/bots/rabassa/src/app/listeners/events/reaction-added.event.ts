import { emoji, reverseText } from '../../utils';

export const onReactionAdded = async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.item.channel,
      text: `That's right, <@${event.user}>! ${emoji(event.reaction)}`,
      thread_ts: event.item.ts,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
