import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";

interface Props {}

export const DirectorySelector = ({}: Props) => {
  const [directory, setDirectory] = useState();

  const selectDirectory = async () => {
    const file: any = await open({
      multiple: false,
      directory: true,
    });
    setDirectory(file);
    console.log(file);
  };

  return <button onClick={() => selectDirectory()}>Select Directory</button>;
};
