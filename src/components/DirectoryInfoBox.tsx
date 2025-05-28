import { titleAtom } from "@/atoms/titleAtom";
import { useAtomValue } from "jotai";

export const DirectoryInfoBox = () => {
  const title = useAtomValue(titleAtom);

  return (
    <div className="flex flex-col gap-4">
      <div>{title ?? "No Title"}</div>
    </div>
  );
};
