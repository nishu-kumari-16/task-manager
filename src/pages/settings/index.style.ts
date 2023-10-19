import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledSettings = styled(Box)(({ theme }) => ({
  ".header": {
    borderBottom: `1px solid ${theme.palette.mystic}`,
    ".hero-section": {},
  },
}));
