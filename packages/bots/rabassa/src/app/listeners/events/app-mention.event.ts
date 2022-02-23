export const onAppMentionEvent = async ({
  event,
  body,
  say,
  client,
  logger,
}) => {
  try {
    // console.log(body);

    const result = await client.reactions.add({
      name: '+1',
      channel: event.channel,
      timestamp: event.ts,
    });

    // await say({
    //   // as_user: true,
    //   text: `hi <@${event.user}>`,
    //   thread_ts: event.thread_ts ?? event.ts,
    // });
  } catch (error) {
    logger.error(error);
  }
};
