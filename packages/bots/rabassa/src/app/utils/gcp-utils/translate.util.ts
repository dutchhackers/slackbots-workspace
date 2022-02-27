import lib from '@google-cloud/translate';

const projectId = process.env['PROJECT_ID'];

// Instantiates a client
const translateClient = new lib.v2.Translate({ projectId });

export const translate = async (text, target) => {
  console.log('translate', text, target);
  if (!(text && target)) {
    return null;
  }

  const [translation] = await translateClient.translate(text, target);
  return translation;
};
