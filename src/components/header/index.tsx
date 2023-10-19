import React from "react";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification-icon.svg";
import { ReactComponent as DownChevron } from "../../assets/icons/down-chevron.svg";
import ProfileIcon from "../../assets/icons/profile.png";
import { ColorModeContext } from "../../context/ColorModeContext";
import { StyledHeader } from "./header.styles";
import Input from "../input";

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <StyledHeader
      className={`flex items-center  px-6 w-full h-fit py-4 justify-between`}
    >
      <div className="flex-1 flex justify-center">
        <Input
          endAdornment={<SearchIcon />}
          placeholder="Search anything..."
          className="w-[20rem]"
        />
      </div>
      <div className="flex gap-6 items-center">
        <NotificationIcon />
        <div className="flex gap-2 items-center">
          <div className="p-1.5 rounded-[50%] bg-[#E7E7FF]">
            <img src={ProfileIcon} alt="img" />
          </div>
          <DownChevron className="hover:cursor-pointer" />
        </div>

        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
    </StyledHeader>
  );
};
export default Header;
