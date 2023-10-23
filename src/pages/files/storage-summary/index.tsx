import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import Card from "../../../components/card";
import DonutChart from "../../../components/pie-chart";
import { filesPageData } from "../meta";

const StorageSummary = () => {
  const theme = useTheme();
  return (
    <Card className="flex flex-col min-h-full gap-6 justify-evenly">
      <Box
        className="w-full py-6 px-6 rounded-lg flex gap-6 items-center"
        bgcolor={theme.palette.athensGray}
      >
        <DonutChart />
        <Box className="flex gap-2 flex-col">
          <Typography
            color={theme.palette.portGore}
            className="!text-sm !font-bold"
          >
            Available Storage
          </Typography>
          <Typography color={theme.palette.slateGray} className="!text-xs">
            {`${filesPageData.storageSummary.availableStorage}GB / ${filesPageData.storageSummary.totalStorage}GB`}
          </Typography>
        </Box>
      </Box>
      {filesPageData.storageSummary.folderData.map((data, index) => (
        <Box className="flex gap-4 items-center">
          <Box
            className="w-[42px] h-[42px] flex items-center justify-center rounded-xl"
            bgcolor={theme.palette.athensGray}
          >
            {data.image}
          </Box>
          <Box className="flex flex-col gap-2 flex-1 py-2" color={data.color}>
            <Box className="flex justify-between">
              <Typography
                color={theme.palette.portGore}
                className="!text-sm !font-bold"
              >
                {data.name}
              </Typography>
              <Typography color={theme.palette.slateGray} className="!text-xs">
                {`${data.size}GB`}
              </Typography>
            </Box>
            <LinearProgress
              value={data.size}
              variant="determinate"
              color="inherit"
              className="!h-1.5 rounded-md w-inherit"
            />
          </Box>
        </Box>
      ))}
    </Card>
  );
};
export default StorageSummary;
