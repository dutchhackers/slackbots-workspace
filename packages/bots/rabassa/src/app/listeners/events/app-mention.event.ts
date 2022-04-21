export const onAppMentionEvent = async ({ event, client, say, logger }) => {
  try {
    await client.reactions.add({
      name: '+1',
      channel: event.channel,
      timestamp: event.ts,
    });

    await say({
      // as_user: true,
      text: `hi <@${event.user}>, what's up?`,
      thread_ts: event.thread_ts ?? event.ts,
    });
  } catch (error) {
    logger.error(error);
  }
};
