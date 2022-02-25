import { WebClient } from '@slack/web-api';
import { emoji, getMessageByTimestamp, parseLang, translate } from '../../utils';

export const onReactionAdded = async ({ event, client, logger }) => {
  try {
    const message = (await getMessageByTimestamp(client, event)).text;
    const reaction = event.reaction;
    const lang = parseLang(reaction);

    if (!(message && lang)) {
      await client.reactions.add({
        name: 'shrug',
        channel: event.item.channel,
        timestamp: event.item.ts,
      });
      return;
    }

    const translated = await translate(message, lang);

    await (client as WebClient).chat.postEphemeral({
      channel: event.item.channel,
      text: `${translated} ${emoji(event.reaction)}`,
      // thread_ts: event.item.ts,

      // Send message to user only (hidden)
      user: event.user,
    });
  } catch (error) {
    logger.error(error);
  }
};
