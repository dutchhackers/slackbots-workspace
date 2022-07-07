const LANGUAGE_CODES = [
  { code: 'nl', name: 'Dutch', reactions: ['nl', 'be'] },
  { code: 'fr', name: 'French', reactions: ['fr'] },
  { code: 'de', name: 'German', reactions: ['de'] },
  { code: 'en', name: 'English', reactions: ['us', 'gb', 'uk', 'england'] },
  { code: 'it', name: 'Italian', reactions: ['it'] },
  { code: 'es', name: 'Spanish', reactions: ['es'] },
  { code: 'ru', name: 'Russian', reactions: ['ru'] },
  { code: 'cn', name: 'Chinese', reactions: ['zh-cn'] },
  { code: 'pt', name: 'Portuguese', reactions: ['pt'] },
  { code: 'pl', name: 'Polish', reactions: ['pl'] },
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
