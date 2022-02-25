export const parseLang = (reaction: string) => {
  if (!reaction) {
    return '';
  }

  let langCode = reaction;

  /// format ':flag-nl:' or actually 'flag-nl';
  const matches = reaction.match(/flag-(\w{2})/);
  if (matches) {
    langCode = matches[1];
  }

  switch (langCode) {
    case 'nl':
      return 'nl';
    case 'be':
      return 'be';
    case 'fr':
      return 'fr';
    case 'de':
      return 'de';
    case 'it':
      return 'it';
    case 'es':
      return 'es';
    case 'us':
      return 'en';
    case 'ru':
      return 'ru';
    case 'cn':
      return 'zh-cn';
    default:
      console.log('Unknown language code:', langCode);
  }

  return null;
};
