import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledDashboard = styled(Box)(({ theme }) => ({
  ".header": {
    borderBottom: `1px solid ${theme.palette.mystic}`,
    svg: {
      path: {
        fill: `${theme.palette.svgRegentGray} !important`,
      },
      circle: {
        fill: theme.palette.titanWhite,
      },
    },
  },
}));
