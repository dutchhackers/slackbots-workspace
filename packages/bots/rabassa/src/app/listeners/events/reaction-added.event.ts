import { WebClient } from '@slack/web-api';
import { emoji, getMessageByTimestamp, translate, getLangFromReaction } from '../../utils';

const SUPPORTED_LANG_CODES = ['nl', 'be', 'fr', 'de', 'en', 'it', 'es', 'ru', 'cn'];

export const onReactionAdded = async ({ event, client, logger }) => {
  try {
    const message = (await getMessageByTimestamp(client, event)).text;
    const reaction = event.reaction;
    const lang = getLangFromReaction(reaction);

    if (!(message && isSupportedLang(lang))) {
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

function isSupportedLang(langCode: string) {
  if (!langCode) {
    return false;
  }

  return SUPPORTED_LANG_CODES.includes(langCode);
}
