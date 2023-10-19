import Header from "../../components/header";
import SideNav from "../../components/sidenav";
import { StyledLayout } from "./index.styles";

const Layout = ({ component }: any) => {
  return (
    <StyledLayout className="flex h-full">
      <SideNav />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="flex-1 overflow-y-auto">{component}</div>
      </div>
    </StyledLayout>
  );
};
export default Layout;
