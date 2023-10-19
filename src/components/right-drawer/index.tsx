import { Typography, Box, useTheme, Divider } from "@mui/material";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import CallDetails from "./CallDetails";
import Messages from "./Messages";
import NewTask from "./NewTask";

const RightDrawer = () => {
  const theme = useTheme();
  return (
    <Box
      className="px-6 py-8 flex flex-col gap-7 w-[396px] absolute top-0 right-0 rounded-b-lg"
      bgcolor={theme.palette.white}
    >
      <Box className="flex justify-between items-center">
        <Typography
          color={theme.palette.portGore}
          className="!text-xl !font-bold whitespace-nowrap"
        >
          Today's Schedule
        </Typography>
        <Box className="rounded-xl" bgcolor={theme.palette.athensGray}>
          <Calendar />
        </Box>
      </Box>
      <Box className="flex justify-between items-center">
        <Box className="flex flex-col gap-2">
          <Typography
            color={theme.palette.dodgerBlue}
            className="!text-xs !font-medium"
          >
            30 minute call with Client
          </Typography>
          <Typography
            color={theme.palette.portGore}
            className="!text-lg !font-medium"
          >
            Project Discovery Call
          </Typography>
        </Box>
        <Typography
          color={theme.palette.dodgerBlue}
          className="!text-sm !font-semibold hover:cursor-pointer"
        >
          + Invite
        </Typography>
      </Box>
      <CallDetails />

      <Divider orientation="horizontal" />

      <Messages />
      <NewTask />
    </Box>
  );
};
export default RightDrawer;
