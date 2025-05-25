import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { readDir, readTextFile } from "@tauri-apps/plugin-fs";
import { stripMinecraftFormatting } from "@/utils/stripMinecraftFormatting";
import { parseSNBT } from "@/utils/parseSNBT";

// Reads the data.snbt file and retrieves the title of the quests
const retrieveTitle = (data: string) => {};

export const useDirectorySelector = () => {
  const [directoryString, setDirectoryString] = useState("");

  const searchDirectory = async () => {
    const file: any = await open({
      multiple: false,
      directory: true,
    });
    setDirectoryString(file);
    console.log(file);
    const entries = await readDir(file);
    console.log(entries);

    const datasnbt = await readTextFile(`${file}\\data.snbt`);
    console.log(datasnbt);
    const nbt: any = parseSNBT(datasnbt);
    console.log(nbt);
    // const parsedNbt: any = NBT.parseSNBT(nbt);
    // console.log(parsedNbt);

    const cleanTitle = stripMinecraftFormatting(nbt.title);
    console.log(cleanTitle);

    // const title = retrieveTitle(datasnbt);
  };

  return { directoryString, searchDirectory };
};
