import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  borderRadius: "1rem",
  ".svg": {
    path: {
      fill: theme.palette.white,
    },
    circle: {
      fill: theme.palette.titanWhite,
    },
  },
}));
