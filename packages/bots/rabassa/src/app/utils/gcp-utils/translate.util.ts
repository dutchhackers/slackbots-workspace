import lib from '@google-cloud/translate';

const projectId = process.env['PROJECT_ID'];

// Instantiates a client
const translateClient = new lib.v2.Translate({ projectId });

export const translate = async (text: string, target: string) => {
  if (!(text && target)) {
    return null;
  }

  const [translation] = await translateClient.translate(text, target);
  return translation;
};
