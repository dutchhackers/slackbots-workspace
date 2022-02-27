import { WebClient } from '@slack/web-api';

export const getMessageByTimestamp = async (client: WebClient, event) => {
  const data = await client.conversations.history({
    channel: event.item.channel,
    latest: event.item.ts,
    inclusive: true,
    limit: 1,
  });

  return data.messages[0];
};
