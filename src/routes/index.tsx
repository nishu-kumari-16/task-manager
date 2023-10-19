import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import TaskPage from "../pages/tasks";

const getComponent = (component: React.ReactNode) => {
  return <App component={component} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: getComponent(<Dashboard />),
  },
  {
    path: "/timeline",
    element: getComponent(<div>TimeLine</div>),
  },
  {
    path: "/tasks",
    element: getComponent(<TaskPage />),
  },
  {
    path: "/settings",
    element: getComponent(<Settings />),
  },
  {
    path: "/share",
    element: getComponent(<div>Share</div>),
  },
  {
    path: "/files",
    element: getComponent(<div>Files</div>),
  },
]);
