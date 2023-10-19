import { Box, Chip, Typography, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import Input from "../input";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";

const FileUploader = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileClick = () => {
    inputFileRef.current!.click();
  };

  return (
    <Box
      className="w-full rounded-lg border border-[#E5E5ED] relative flex flex-col gap-5 py-4 items-center justify-center max-w-[32rem] hover:cursor-pointer"
      onClick={handleFileClick}
    >
      <UploadIcon />
      <Typography
        color={theme.palette.brightGray}
        className="max-w-[15rem] text-center !text-xs"
      >
        Click to upload or drag and drop SVG, PNG, JPG or GIF (max, 800x400px)
      </Typography>
      <Input
        type="file"
        className="!hidden"
        inputRef={inputFileRef}
        onClick={(event) => ((event.target as HTMLInputElement).value = "")}
        onChange={(event) =>
          setSelectedFile((event.target as HTMLInputElement).files?.[0])
        }
      />
      {selectedFile && (
        <Chip
          label={selectedFile?.name}
          onDelete={() => setSelectedFile(null)}
        />
      )}
    </Box>
  );
};
export default FileUploader;
