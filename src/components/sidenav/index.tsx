import Typography from "@mui/material/Typography";
import Logo from "../../assets/icons/logo.svg";
import { StyledSideNav } from "./index.styles";
import { useTheme } from "@mui/material/styles";
import { availableRoutes } from "./available-routes";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <StyledSideNav
      className={`flex flex-col items-center p-6 w-fit h-full shadow-md justify-center`}
    >
      <div className="flex flex-col absolute top-3 items-center">
        <img src={Logo} alt="logo" className="w-fit" />
        <Typography
          color={theme.palette.text.primary}
          className="font-bold text-[1rem]"
        >
          OCTOM.
        </Typography>
      </div>
      <div className="flex flex-col gap-6">
        {availableRoutes.map((data, index) => (
          <Link
            className={`hover:bg-[#5050f970] hover:cursor-pointer p-3 rounded-lg sidebar-icon ${
              location.pathname === data.path && "!bg-[#5051F9] sidebar-active"
            }`}
            key={index}
            to={data.path}
          >
            {data.icon}
          </Link>
        ))}
      </div>
    </StyledSideNav>
  );
};
export default SideNav;
