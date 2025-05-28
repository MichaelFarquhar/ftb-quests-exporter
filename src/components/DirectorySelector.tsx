import { useDirectorySelector } from "@/hooks/useDirectorySelector";
import { FolderSearch2 } from "lucide-react";

interface Props {}

export const DirectorySelector = ({}: Props) => {
  const { searchDirectory } = useDirectorySelector();

  return (
    <div
      className="w-12 h-12 p-2.5 rounded-lg border-2 border-yellow-300 transition hover:bg-yellow-400 hover:cursor-pointer text-yellow-300 hover:text-white"
      onClick={() => searchDirectory()}
    >
      <FolderSearch2 className="w-full h-full" />
    </div>
  );
};
