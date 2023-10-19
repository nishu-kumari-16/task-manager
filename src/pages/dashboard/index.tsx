import Card from "../../components/card";
import { StyledDashboard } from "./index.style";
import { taskOverViewData } from "./meta";
import TaskOverviewCard from "./TaskOverviewCard";
import TaskDoneSection from "./TaskDoneSection";
import Tasks from "./Task";
import RightDrawer from "../../components/right-drawer";

const Dashboard = () => {
  return (
    <StyledDashboard className="flex gap-[2.5rem] relative">
      <div className="py-[1.5rem] pl-[1.5rem] flex flex-col gap-6 w-[calc(100%-420px)]">
        <div className="flex gap-6  overflow-hidden">
          {taskOverViewData.map((data, index) => (
            <Card key={index} className="flex-1 max-w-full overflow-hidden">
              <TaskOverviewCard data={data} />
            </Card>
          ))}
        </div>
        <Card className="flex flex-1 flex-col gap-6">
          <TaskDoneSection />
        </Card>
        <Tasks />
      </div>
      <RightDrawer />
    </StyledDashboard>
  );
};
export default Dashboard;
