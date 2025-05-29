// Removes Minecraft-style formatting codes (e.g., &6, &l, &7), but preserves escaped ampersands (\& becomes &)
export const stripMinecraftFormatting = (str: string): string => {
  // Remove formatting codes not preceded by a backslash
  let result = str.replace(/(?<!\\)&[0-9a-fk-or]/gi, "");
  // Replace escaped ampersands (\&) with &
  return result.replace(/\\&/g, "&");
};
