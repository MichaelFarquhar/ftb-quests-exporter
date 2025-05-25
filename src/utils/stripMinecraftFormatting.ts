// Removes Minecraft-style formatting codes (e.g., &6, &l, &7) from a string efficiently.
export const stripMinecraftFormatting = (str: string): string => {
  // Regex matches an ampersand (&) followed by a valid formatting code character (0-9, a-f, k-o, r, case-insensitive)
  // Example: &6, &l, &r, etc.
  return str.replace(/&[0-9a-fk-or]/gi, "");
};
