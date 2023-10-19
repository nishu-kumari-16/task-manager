import { Tab, Tabs, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultiLineAreaChart from "../../components/multiLineAreaChart";
import { dailyTaskData, monthlyTaskData, weeklyTaskData } from "./meta";

const TaskDoneSection = () => {
  const theme = useTheme();
  const [value, setValue] = useState<number>(2);
  const [taskData, setTaskData] = useState<any>(monthlyTaskData);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        setTaskData(dailyTaskData);
        break;
      case 1:
        setTaskData(weeklyTaskData);
        break;
      case 2:
        setTaskData(monthlyTaskData);
        break;
    }
  }, [value]);

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <Typography
          color={theme.palette.portGore}
          className="!font-bold !text-[1.5rem]"
        >
          Task Done
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Daily" className="!capitalize !text-sm" />
          <Tab label="Weekly" className="!capitalize  !text-sm" />
          <Tab label="Monthly" className="!capitalize  !text-sm" />
        </Tabs>
      </div>
      <MultiLineAreaChart
        data={taskData}
        primaryColor="#5051F9"
        secondaryColor="#1EA7FF"
      />
    </React.Fragment>
  );
};
export default TaskDoneSection;
