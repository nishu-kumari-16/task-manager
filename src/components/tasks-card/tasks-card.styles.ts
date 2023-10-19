import { styled } from "@mui/material/styles";
import Button from "../button";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.titanWhite,
  color: theme.palette.royalBlueText,
  textTransform: "capitalize",
  svg: {
    path: {
      fill: theme.palette.dodgerBlueIcon,
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.royalBlueText,
    color: theme.palette.white,
    svg: {
      path: {
        fill: theme.palette.white,
      },
    },
  },
}));
