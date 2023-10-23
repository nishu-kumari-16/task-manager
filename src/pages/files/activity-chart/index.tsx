import { Typography, useTheme } from "@mui/material";
import Card from "../../../components/card";
import BarGraph from "../../../components/bar-graph";
import { ReactComponent as BlueCircle } from "../../../assets/icons/blue-circle.svg";
import { ReactComponent as PurpleCircle } from "../../../assets/icons/purple-circle.svg";
import { ReactComponent as OrangeCircle } from "../../../assets/icons/orange-circle.svg";

const labels = [
  { name: "Media", icon: <PurpleCircle /> },
  { name: "Photos", icon: <BlueCircle /> },
  { name: "Docs", icon: <OrangeCircle /> },
];

const ActivityChart = () => {
  const theme = useTheme();
  return (
    <div className="flex-1 h-full flex w-full">
      <Card className=" flex flex-col py-8 px-6 flex-1 gap-8">
        <Typography
          color={theme.palette.portGore}
          className="!text-3xl !font-bold"
        >
          Activity Chart
        </Typography>
        <div className=" flex flex-col gap-4 h-full">
          <BarGraph />
          <div className="flex justify-around">
            {labels.map((data, index) => (
              <div className="flex gap-2 items-center">
                {data.icon}{" "}
                <Typography color={theme.palette.portGore}>
                  {data.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ActivityChart;
