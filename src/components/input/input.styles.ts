import { styled } from "@mui/material/styles";
import MUIInput from "@mui/material/Input";

export const StyledInput = styled(MUIInput)(({ theme }) => ({
  color: theme.palette.slateGray,
  backgroundColor: theme.palette.catskillWhite,
  border: "none",
}));
