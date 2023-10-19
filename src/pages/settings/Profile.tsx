import { Box, Input, Typography, useTheme } from "@mui/material";
import { settingsData } from "./meta";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import FileUploader from "../../components/file-uploader";

const Profile = () => {
  const theme = useTheme();
  const { firstName, lastName, email, role } =
    settingsData.tabData[0].data ?? {};
  return (
    <Box className="flex flex-col gap-6 ">
      <Box className="flex flex-1 gap-6">
        <Box className="flex flex-col gap-1">
          <Typography
            color={theme.palette.portGore}
            className="!text-sm !font-medium "
          >
            First name
          </Typography>
          <Input value={firstName} disabled />
        </Box>
        <Box className="flex flex-col gap-1">
          <Typography
            color={theme.palette.portGore}
            className="!text-sm !font-medium "
          >
            Last name
          </Typography>
          <Input value={lastName} disabled />
        </Box>
      </Box>
      <Box className="flex flex-col gap-1">
        <Typography
          color={theme.palette.portGore}
          className="!text-sm !font-medium "
        >
          Email
        </Typography>
        <Input value={email} disabled startAdornment={<Email />} />
      </Box>
      <FileUploader />
      <Box className="flex flex-col gap-1">
        <Typography
          color={theme.palette.portGore}
          className="!text-sm !font-medium "
        >
          Role
        </Typography>
        <Input value={role} disabled />
      </Box>
    </Box>
  );
};
export default Profile;
