import { atom } from "jotai";

interface ChapterGroup {
  id: string;
  title?: string; // Title is optional because it's not used if the modpack supports translations
}

export const chapterGroupsAtom = atom<ChapterGroup[]>([]);
