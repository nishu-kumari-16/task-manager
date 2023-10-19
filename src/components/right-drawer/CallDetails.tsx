import { Box, Typography, useTheme } from "@mui/material";
import { rightDrawerData } from "./meta";
import { ReactComponent as CallIcon } from "../../assets/icons/call.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/vertical-ellipsis.svg";
import StackedImages from "../stacked-images";

const CallDetails = () => {
  const theme = useTheme();
  return (
    <Box
      className="shadow-call w-full p-5 flex justify-between items-center rounded-xl"
      bgcolor={theme.palette.royalBlue}
    >
      <StackedImages images={rightDrawerData.callDetails.members} />
      <Typography color="#ffffff" className="!text-sm !font-medium">
        {rightDrawerData.callDetails.duration}
      </Typography>

      <Box className="flex gap-4">
        <CallIcon />
        <EllipsisIcon />
      </Box>
    </Box>
  );
};
export default CallDetails;
