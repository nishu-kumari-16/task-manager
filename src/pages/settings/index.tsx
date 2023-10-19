import { Box, Typography, useTheme } from "@mui/material";
import { ReactComponent as SettingsBackground } from "../../assets/icons/settings-background.svg";
import { StyledSettings } from "./index.style";
import ProfileImage from "../../assets/icons/self-profile.jpg";
import Button from "../../components/button";
import { useState } from "react";
import { settingsData } from "./meta";

const Settings = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <StyledSettings className="p-6 flex flex-col gap-3">
      <SettingsBackground className="w-full h-full hero-section" />
      <Box className="flex justify-between items-center relative">
        <Box className="flex gap-6">
          <img
            src={ProfileImage}
            className="w-[137px] h-[137px] rounded-full border-[0.375rem] border-white absolute bottom-[-2rem] left-[4rem] object-cover"
            alt="profile"
          />
          <Typography
            color={theme.palette.portGore}
            className="!font-bold !text-[1.5rem] !ml-[14rem]"
          >
            Settings
          </Typography>
        </Box>

        <Box className="flex gap-4">
          <Button variant="outlined" className="!capitalize">
            Cancel
          </Button>
          <Button variant="contained" className="!capitalize">
            Save
          </Button>
        </Box>
      </Box>
      <Box className="mt-[3rem] flex flex-col gap-6 ml-[4rem]">
        <Box className="flex gap-6">
          {settingsData.tabData.map((data, index) => (
            <Typography
              className="!text-md hover:cursor-pointer"
              onClick={() => setActiveTab(index)}
              key={index}
              fontWeight={activeTab === index ? 600 : 500}
              color={
                activeTab === index
                  ? theme.palette.portGore
                  : theme.palette.paleSky
              }
            >
              {data.name}
            </Typography>
          ))}
        </Box>
        {settingsData.tabData[activeTab]?.component}
      </Box>
    </StyledSettings>
  );
};
export default Settings;
