import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledHeader = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.magnolia,
}));
