import { WebClient } from '@slack/web-api';

export const getMessageByTimestamp = async (client: WebClient, event) => {
  const data = await client.conversations.replies({
    channel: event.item.channel,
    ts: event.item.ts,
  });

  return data.messages[0];
};
