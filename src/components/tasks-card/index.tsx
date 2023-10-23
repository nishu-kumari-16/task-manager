import Box from "@mui/material/Box";
import { ReactComponent as PlayButton } from "../../assets/icons/play.svg";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import { ReactComponent as Hyperlink } from "../../assets/icons/hyperlink.svg";
import { ReactComponent as Comments } from "../../assets/icons/comments.svg";
import { ReactComponent as Stopwatch } from "../../assets/icons/stopwatch.svg";
import { LinearProgress, Typography, useTheme } from "@mui/material";
import { StyledButton } from "./tasks-card.styles";

const TasksCard = ({
  time,
  title,
  link,
  commentsCount,
  completionPercentage,
}: any) => {
  const theme = useTheme();

  return (
    <Box
      className="flex rounded-xl overflow-hidden"
      bgcolor={theme.palette.white}
    >
      <Box
        bgcolor={theme.palette.magnolia}
        className="flex items-center justify-center px-6 gap-2 py-[1.125rem] overflow-x-auto"
      >
        <PlayButton className="flex items-center min-w-[30px] min-h-[32px]" />
        <Box className="flex flex-col gap-1">
          <Typography
            color={theme.palette.black}
            className="text-sm font-medium whitespace-nowrap"
          >
            Start from
          </Typography>
          <div className="flex gap-2 items-center">
            <Timer />
            <Typography
              color={theme.palette.slateGray}
              className="text-xs font-medium whitespace-nowrap"
            >
              {time}
            </Typography>
          </div>
        </Box>
      </Box>
      <Box className="flex gap-8 items-center justify-between px-6 py-[1.125rem] flex-1 overflow-x-auto">
        <Box className="flex flex-col gap-1 w-fit">
          <Typography
            color={theme.palette.portGore}
            className="text-sm font-medium"
          >
            {title}
          </Typography>
          <div className="flex items-center">
            <div className="flex gap-2 items-center">
              <Hyperlink />
              <Typography
                color={theme.palette.royalBlue}
                className="text-xs font-medium "
              >
                {link}
              </Typography>
            </div>

            <Box bgcolor={theme.palette.codGray} className="w-[1px] h-4 mx-4" />

            <div className="flex gap-2 items-center">
              <Comments />
              <Typography
                color={theme.palette.slateGray}
                className="text-xs font-medium"
              >
                {`${commentsCount} comments`}
              </Typography>
            </div>
          </div>
        </Box>
        <Box className="flex flex-col gap-2 flex-1">
          <Typography
            color={theme.palette.portGore}
            className="text-sm !font-semibold"
          >
            {`${completionPercentage}% complete`}
          </Typography>
          <Box
            color={
              completionPercentage > 50
                ? theme.palette.royalBlue
                : theme.palette.dodgerBlue
            }
          >
            <LinearProgress
              variant="determinate"
              value={completionPercentage}
              color="inherit"
              className="!h-1.5 rounded-md w-inherit"
            />
          </Box>
        </Box>
        <StyledButton className="!capitalize gap-2.5 h-[2.5rem] rounded-xl !px-4 !min-w-[7rem]">
          <Stopwatch />
          <Typography className="text-xs font-medium">Reminder</Typography>
        </StyledButton>
      </Box>
    </Box>
  );
};
export default TasksCard;
