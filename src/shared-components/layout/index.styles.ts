import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledLayout = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.athensGray,
}));
