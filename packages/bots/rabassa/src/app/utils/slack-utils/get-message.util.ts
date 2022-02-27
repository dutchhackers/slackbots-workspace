import { WebClient } from "@slack/web-api";

export const getMessage = async (client: WebClient, channel: string, itemTs: string) => {

  const response = await (client as WebClient).conversations.history({
    channel: channel,
    latest: itemTs,
    inclusive: true,
    limit: 1,
  });

  if(response.messages.length === 0) {
    return "";
  }

  return response.messages[0].text;

};
