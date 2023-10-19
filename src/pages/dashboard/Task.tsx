import { Typography, useTheme } from "@mui/material";
import TasksCard from "../../components/tasks-card";
import { dashboardTasksData } from "../../components/tasks-card/meta";

const Tasks = () => {
  const theme = useTheme();
  return (
    <div className="flex flex-col gap-8">
      <Typography
        color={theme.palette.portGore}
        className="!font-bold !text-[1.5rem]"
      >
        Task
      </Typography>
      {dashboardTasksData?.map((data, index) => (
        <TasksCard
          time={data.startTime}
          link={data.link}
          title={data.title}
          key={index}
          commentsCount={data.commentsCount}
          completionPercentage={data.completionPercentage}
        />
      ))}
    </div>
  );
};
export default Tasks;
