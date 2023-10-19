import { Typography, useTheme } from "@mui/material";
import React from "react";
import SingleLineAreaChart from "../../components/singleLineAreaChart";

const TaskOverviewCard = ({ data }: any) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <div className="flex gap-3 flex-1 items-center header pb-[1.5rem]">
        {data.icon}
        <Typography color={theme.palette.regentGray} className="!font-medium">
          {data.title}
        </Typography>
        <Typography
          color={theme.palette.codGray}
          className="!font-bold !text-[1.5rem] self-end flex flex-1 justify-end"
        >
          {data.count.toString().padStart(2, "0")}
        </Typography>
      </div>
      <div className="flex justify-between pt-6">
        <SingleLineAreaChart data={data.chartData} color={data.color} />
        <div className="flex flex-col gap-1 items-start justify-end">
          <div className="flex gap-1">
            <Typography
              className="!font-bold"
              color={theme.palette.japaneseLaurel}
            >
              {`${data.count}+`}
            </Typography>
            <Typography
              color={theme.palette.slateGray}
              className="!font-medium"
            >
              more
            </Typography>
          </div>
          <Typography color={theme.palette.slateGray} className="!font-medium">
            {data.overviewText}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TaskOverviewCard;
