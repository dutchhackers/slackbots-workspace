const LANGUAGE_CODES = [
  { code: 'nl', name: '', reactions: ['nl'] },
  { code: 'be', name: '', reactions: ['be'] },
  { code: 'fr', name: '', reactions: ['fr'] },
  { code: 'de', name: '', reactions: ['de'] },
  { code: 'en', name: '', reactions: ['us'] },
  { code: 'it', name: '', reactions: ['it'] },
  { code: 'es', name: '', reactions: ['es'] },
  { code: 'ru', name: '', reactions: ['ru'] },
  { code: 'cn', name: '', reactions: ['zh-cn'] },
];

export const getLangFromReaction = (reaction: string, defaultLang: string = null) => {
  const reactionLang = parseReactionLang(reaction);
  if (!reactionLang) {
    return defaultLang;
  }

  const lang = LANGUAGE_CODES.find(({ reactions }) => reactions.includes(reactionLang));
  if (!lang) {
    return defaultLang;
  }

  return lang.code;
};

const parseReactionLang = (reaction: string) => {
  const matches = reaction.match(/flag-(\w{2})/);
  if (matches) {
    return matches[1];
  } else if (reaction.match(/(\w{2})/)) {
    return reaction;
  }
  return null;
};
