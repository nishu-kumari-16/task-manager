import { Box, Typography, useTheme } from "@mui/material";
import Table from "../../../components/table";
import { getRecentFilesData, metaData } from "./meta";
import Card from "../../../components/card";

const RecentFiles = () => {
  const theme = useTheme();

  return (
    <Card className="flex flex-col flex-[2] p-[30px]">
      <Box className="flex justify-between">
        <Typography
          color={theme.palette.portGore}
          className="!text-3xl !font-bold"
        >
          Recent Files
        </Typography>
        <Typography
          color={theme.palette.dodgerBlue}
          className="!text-sm hover:underline"
        >
          View All
        </Typography>
      </Box>
      <Table
        data={metaData || []}
        columns={getRecentFilesData(theme.palette) || []}
        manualPagination
        enableSorting={true}
      />
    </Card>
  );
};
export default RecentFiles;
