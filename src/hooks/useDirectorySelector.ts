import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { readDir, readTextFile } from "@tauri-apps/plugin-fs";
import { stripMinecraftFormatting } from "@/utils/stripMinecraftFormatting";
import { parseSNBT } from "@/utils/parseSNBT";
import { useSetAtom } from "jotai";
import { titleAtom } from "@/atoms/titleAtom";

const getTitle = async (directoryString: string) => {
  const datasnbt = await readTextFile(`${directoryString}\\data.snbt`);
  const nbt: any = parseSNBT(datasnbt);
  return stripMinecraftFormatting(nbt.title);
};

const getChapterGroups = async (directoryString: string) => {
  const datasnbt = await readTextFile(
    `${directoryString}\\chapter_groups.snbt`
  );
  const nbt: any = parseSNBT(datasnbt);

  const chapterGroups = nbt.chapter_groups.map(
    ({ id, title }: { id: string; title?: string }) =>
      typeof title === "string"
        ? { id, title: stripMinecraftFormatting(title) }
        : { id }
  );
  console.log(chapterGroups);
  // Placeholder for future implementation
};

// Reads the data.snbt file and retrieves the title of the quests

export const useDirectorySelector = () => {
  const [directoryString, setDirectoryString] = useState("");

  const setTitleAtom = useSetAtom(titleAtom);

  const searchDirectory = async () => {
    const file: any = await open({
      multiple: false,
      directory: true,
    });
    setDirectoryString(file);
    console.log(file);
    const entries = await readDir(file);
    console.log(entries);

    // 1. Retrieve title from data.snbt
    const title = await getTitle(file);
    setTitleAtom(title);

    // 2. Retrieve chapter groups
    await getChapterGroups(file);
  };

  return { directoryString, searchDirectory };
};
