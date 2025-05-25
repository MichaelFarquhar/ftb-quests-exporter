import { useDirectorySelector } from "@/hooks/useDirectorySelector";

interface Props {}

export const DirectorySelector = ({}: Props) => {
  const { searchDirectory } = useDirectorySelector();

  return <button onClick={() => searchDirectory()}>Select Directory</button>;
};
