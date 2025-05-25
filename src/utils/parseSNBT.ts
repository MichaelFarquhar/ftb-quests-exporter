import { parse } from "ftbq-nbt";

// Parses FTBQ SNBT, removing list type postfixes for compatibility
export const parseSNBT = (sNbt: string) => {
  const parserOptions = { useBoolean: true, skipComma: true };

  const replaced = sNbt.replace(
    /(\[[BILbil];([\s\n]*-?\d+(\.\d+)?[BILbil]\b,?)+[\s\n]*\])/gm,
    (_, r) => r.replace(/(\d+)[BILbil]\b/gm, "$1")
  );
  try {
    return parse(replaced, parserOptions);
  } catch (error) {
    console.log("error parsing this :>>", replaced, error);
    return undefined;
  }
};
