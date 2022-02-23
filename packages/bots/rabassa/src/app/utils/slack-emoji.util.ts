export const emoji = (emojiName: string) => {
  if (!emojiName) {
    return emojiName;
  }
  return `:${emojiName}:`;
};
