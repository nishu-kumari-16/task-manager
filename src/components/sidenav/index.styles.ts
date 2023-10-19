import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledSideNav = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.magnolia,

  ".sidebar-active": {
    path: {
      fill: "white",
    },
  },
}));
