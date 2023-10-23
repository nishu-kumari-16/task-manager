import { Box, Typography, useTheme } from "@mui/material";
import Button from "../../components/button";
import { ReactComponent as AttachmentIcon } from "../../assets/icons/attachment.svg";
import AllFiles from "./all-files";
import StorageSummary from "./storage-summary";
import RecentFiles from "./recent-files";
import ActivityChart from "./activity-chart";

const Files = () => {
  const theme = useTheme();
  return (
    <Box className="flex flex-col  overflow-hidden h-full">
      <Box className="flex justify-between items-center gap-6 p-6">
        <Typography
          color={theme.palette.portGore}
          className="!text-3xl !font-bold"
        >
          Files
        </Typography>

        <Box className="flex gap-4">
          <Button variant="contained" className="!capitalize !rounded-[1.5rem]">
            + Create New Folder
          </Button>
          <Button
            variant="outlined"
            className="!capitalize rounded-6 !rounded-[1.5rem] !px-5"
            startIcon={<AttachmentIcon className="w-4 h-4" />}
          >
            Upload
          </Button>
        </Box>
      </Box>
      <Box className="overflow-auto flex flex-col gap-6 p-6">
        <Box className="flex gap-6">
          <AllFiles />
          <Box className="flex-1">
            <StorageSummary />
          </Box>
        </Box>
        <Box className="flex gap-6">
          <RecentFiles />
          <ActivityChart />
        </Box>
      </Box>
    </Box>
  );
};
export default Files;
