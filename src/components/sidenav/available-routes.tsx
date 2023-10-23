import { ReactComponent as DashboardIcon } from "../../assets/icons/widget.svg";
import { ReactComponent as TimelineIcon } from "../../assets/icons/timeline.svg";
import { ReactComponent as TaskIcon } from "../../assets/icons/book.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/send.svg";
import { ReactComponent as FilesIcon } from "../../assets/icons/files.svg";

export const availableRoutes = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
  // { name: "Timeline", icon: <TimelineIcon />, path: "/timeline" },
  { name: "Tasks", icon: <TaskIcon />, path: "/tasks" },
  { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  // { name: "Share", icon: <ShareIcon />, path: "/share" },
  { name: "Files", icon: <FilesIcon />, path: "/files" },
];
