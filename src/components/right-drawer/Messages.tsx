import { Box, Typography, useTheme } from "@mui/material";
import { rightDrawerData } from "./meta";

const Messages = () => {
  const theme = useTheme();
  return (
    <Box className="flex flex-col gap-4">
      <Typography
        color={theme.palette.portGore}
        className="!text-lg !font-bold "
      >
        Messages
      </Typography>
      {rightDrawerData.messages.map((data, index) => (
        <div className="flex gap-5 items-center" key={index}>
          <img
            src={data.image}
            alt={data.name}
            className="w-[48px] h-[48px] rounded-full border"
          />
          <div className="flex flex-col gap-[2px]">
            <Typography
              color={theme.palette.portGore}
              className="!text-sm !font-medium "
            >
              {data.name}
            </Typography>
            <Typography
              color={theme.palette.slateGray}
              className="!text-xs !font-medium "
            >
              {data.message}
            </Typography>
          </div>
        </div>
      ))}
    </Box>
  );
};
export default Messages;
