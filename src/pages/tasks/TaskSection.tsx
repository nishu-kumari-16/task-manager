import { Box, Typography, useTheme } from "@mui/material";
import { ReactComponent as EllipsisHorizontal } from "../../assets/icons/ellipsis-horizontal.svg";
import { StyledButton } from "../../components/tasks-card/tasks-card.styles";
import TaskCard from "./TaskCard";

const TaskSection = ({ title, tasks, onDrop }: any) => {
  const theme = useTheme();
  return (
    <Box
      className="flex-1 overflow-y-auto flex flex-col gap-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, title)}
    >
      <Box
        bgcolor={theme.palette.white}
        className="rounded-lg p-4 justify-between flex items-center"
      >
        <Typography color={theme.palette.portGore}>{title}</Typography>
        <Box className="flex gap-4 items-center">
          <EllipsisHorizontal />
          <StyledButton className="!capitalize gap-2.5 h-6 !min-w-0 !p-0 !w-6 rounded-xl">
            <Typography className="text-xs font-medium">+</Typography>
          </StyledButton>
        </Box>
      </Box>
      <Box className="flex flex-col gap-4 overflow-y-auto h-auto">
        {tasks?.length ? (
          tasks?.map((data: any, index: number) => (
            <TaskCard taskData={data} key={index} />
          ))
        ) : (
          <Box className="flex justify-center items-center gap-2 ">
            <Box
              bgcolor={theme.palette.magnolia}
              className="h-8 w-8 rounded-full flex justify-center items-center font-extrabold"
            >
              !
            </Box>
            <Typography className="text-center">No Tasks available</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default TaskSection;
