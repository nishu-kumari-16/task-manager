import { Box, Typography, useTheme } from "@mui/material";
import StackedImages from "../../components/stacked-images";
import { TASK_TYPE, members, tasksMetaData } from "./meta";
import TaskSection from "./TaskSection";
import { useState } from "react";
import TasksChat from "./TaskChats";

const TaskPage = () => {
  const theme = useTheme();

  const [tasksData, setTaskData] = useState<any>(tasksMetaData);

  const handleDrop = (e: any, category: any) => {
    let id = e.dataTransfer.getData("id");

    let data = tasksData.filter((task: any) => {
      if (task.id === parseInt(id)) {
        task.taskType = category;
      }
      return task;
    });
    setTaskData(data);
  };

  return (
    <Box className="flex  gap-2 max-h-full h-full overflow-hidden">
      <Box className="flex flex-col p-6 gap-6 overflow-hidden flex-1">
        <Box className="flex justify-between w-full items-center">
          <Typography
            color={theme.palette.portGore}
            className="!text-3xl font-medium"
          >
            Task
          </Typography>
          <div className="flex gap-1">
            <StackedImages images={members} showMax={5} />
            <Box
              className="rounded-full w-8 h-8 !text-lg !font-bold flex justify-center items-center border-spacing-1 hover:cursor-pointer"
              bgcolor={theme.palette.blackSqueeze}
              color={theme.palette.royalBlue}
              borderColor={`${theme.palette.brightGray} !important`}
              border="2px dotted"
            >
              +
            </Box>
          </div>
        </Box>
        <Box className="flex gap-4 overflow-hidden">
          <TaskSection
            title={TASK_TYPE.BACKLOG}
            tasks={tasksData.filter(
              (data: any) => data.taskType === TASK_TYPE.BACKLOG
            )}
            onDrop={handleDrop}
          />
          <TaskSection
            title={TASK_TYPE.TO_DO}
            tasks={tasksData.filter(
              (data: any) => data.taskType === TASK_TYPE.TO_DO
            )}
            onDrop={handleDrop}
          />
          <TaskSection
            title={TASK_TYPE.IN_PROGRESS}
            tasks={tasksData.filter(
              (data: any) => data.taskType === TASK_TYPE.IN_PROGRESS
            )}
            onDrop={handleDrop}
          />
          <TaskSection
            title={TASK_TYPE.REVIEW}
            tasks={tasksData.filter(
              (data: any) => data.taskType === TASK_TYPE.REVIEW
            )}
            onDrop={handleDrop}
          />
        </Box>
      </Box>
      <TasksChat />
    </Box>
  );
};
export default TaskPage;
