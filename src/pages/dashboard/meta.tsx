import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import { ReactComponent as ClipboardIcon } from "../../assets/icons/clipboard.svg";

export const taskOverViewData = [
  {
    title: "Task Completed",
    icon: <StarIcon />,
    count: 8,
    overviewText: "from last week",
    color: "#5051F9",
    chartData: [
      {
        name: "",
        uv: 2,
      },
      {
        name: "",
        uv: 5,
      },
      {
        name: "",
        uv: 1,
      },
      {
        name: "",
        uv: 7,
      },
      {
        name: "",
        uv: 5,
      },
      {
        name: "",
        uv: 15,
      },
      {
        name: "",
        uv: 3,
      },
    ],
  },
  {
    title: "New Task",
    icon: <CopyIcon />,
    count: 10,
    overviewText: "from last week",
    color: "#1EA7FF",
    chartData: [
      {
        name: "",
        uv: 2,
      },
      {
        name: "",
        uv: 5,
      },
      {
        name: "",
        uv: 1,
      },
      {
        name: "",
        uv: 7,
      },
      {
        name: "",
        uv: 5,
      },
      {
        name: "",
        uv: 9,
      },
      {
        name: "",
        uv: 3,
      },
    ],
  },
  {
    title: "Project Done",
    icon: <ClipboardIcon />,
    count: 10,
    overviewText: "from last week",
    color: "#FF614C",
    chartData: [
      {
        name: "a",
        uv: 2,
        amt: 2,
      },
      {
        name: "b",
        uv: 5,
        amt: 2,
      },
      {
        name: "c",
        uv: 1,
        amt: 2,
      },
      {
        name: "d",
        uv: 7,
      },
      {
        name: "",
        uv: 5,
      },
      {
        name: "",
        uv: 9,
      },
      {
        name: "",
        uv: 3,
      },
    ],
  },
];

export const monthlyTaskData = [
  {
    name: "May",
    primaryData: 20,
    secondaryData: 50,
  },
  {
    name: "Jun",
    primaryData: 150,
    secondaryData: 120,
  },
  {
    name: "Jul",
    primaryData: 100,
    secondaryData: 130,
  },
  {
    name: "Aug",
    primaryData: 380,
    secondaryData: 200,
  },
  {
    name: "Sep",
    primaryData: 260,
    secondaryData: 170,
  },
  {
    name: "Oct",
    primaryData: 180,
    secondaryData: 390,
  },
  {
    name: "Nov",
    primaryData: 220,
    secondaryData: 220,
  },
  {
    name: "Dec",
    primaryData: 120,
    secondaryData: 110,
  },
  {
    name: "Jan",
    primaryData: 300,
    secondaryData: 180,
  },
  {
    name: "Feb",
    primaryData: 120,
    secondaryData: 310,
  },
  {
    name: "Mar",
    primaryData: 230,
    secondaryData: 200,
  },
  {
    name: "Apr",
    primaryData: 110,
    secondaryData: 200,
  },
];

export const weeklyTaskData = [
  {
    name: "Mon",
    primaryData: 20,
    secondaryData: 50,
  },
  {
    name: "Tues",
    primaryData: 150,
    secondaryData: 120,
  },
  {
    name: "Wed",
    primaryData: 100,
    secondaryData: 130,
  },
  {
    name: "Thur",
    primaryData: 380,
    secondaryData: 200,
  },
  {
    name: "Fri",
    primaryData: 260,
    secondaryData: 170,
  },
  {
    name: "Sat",
    primaryData: 180,
    secondaryData: 390,
  },
  {
    name: "Sun",
    primaryData: 220,
    secondaryData: 220,
  },
];

export const dailyTaskData = [
  {
    name: "9:00 AM",
    primaryData: 20,
    secondaryData: 50,
  },
  {
    name: "11:00 AM",
    primaryData: 150,
    secondaryData: 120,
  },
  {
    name: "01:00 PM",
    primaryData: 100,
    secondaryData: 130,
  },
  {
    name: "03:00 PM",
    primaryData: 380,
    secondaryData: 200,
  },
  {
    name: "05:00 PM",
    primaryData: 260,
    secondaryData: 170,
  },
  {
    name: "07:00 PM",
    primaryData: 180,
    secondaryData: 390,
  },
];
