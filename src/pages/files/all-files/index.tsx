import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import Card from "../../../components/card";
import { filesPageData } from "../meta";
import { ReactComponent as FileIcon } from "../../../assets/icons/file.svg";
import Select from "../../../components/select";

const AllFiles = () => {
  const theme = useTheme();
  return (
    <Card className="flex flex-col gap-4 flex-[2]">
      <Box className="flex justify-between">
        <Typography color={theme.palette.portGore}>All Files</Typography>
        <Select
          value="show all"
          className="flex items-center"
          options={[
            { value: "show all", label: "Show All" },
            { value: "music", label: "Music" },
            { value: "documents", label: "Documents" },
          ]}
        />
      </Box>
      <Box className="flex gap-5 flex-wrap">
        {filesPageData.allFilesData.map((data, index) => {
          return (
            <Box
              className="border rounded-[0.75rem] p-6 flex flex-col flex-1 min-w-[271px]"
              borderColor={theme.palette.mystic}
              bgcolor={theme.palette.charade}
              key={index}
            >
              <Box className="flex justify-between">
                <FileIcon fill={data.type} className="inherit-path" />
                <Box className="flex">
                  {data.sharedData &&
                    data.sharedData.map((value, i) => (
                      <Box
                        className="px-2 py-1 rounded-[9px] !text-sm !uppercase !font-bold border-2 border-white"
                        style={{ marginLeft: `-${i * 6}px` }}
                        bgcolor={theme.palette.royalBlue}
                        color="#ffffff"
                      >
                        {value.name.charAt(0)}
                      </Box>
                    ))}
                </Box>
              </Box>
              <Typography
                color={theme.palette.portGore}
                className="!text-sm !font-bold !mt-6"
              >
                {data.name}
              </Typography>
              <Typography color={theme.palette.slateGray} className="!text-xs ">
                {data.count} files
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
};
export default AllFiles;
