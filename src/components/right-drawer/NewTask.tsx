import { Badge, Box, Divider, Typography, useTheme } from "@mui/material";
import Input from "../input";
import { ReactComponent as EllipsisHorizontal } from "../../assets/icons/ellipsis-horizontal.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import { ReactComponent as RightChevron } from "../../assets/icons/right-chevron.svg";
import { rightDrawerData } from "./meta";
import { useEffect, useState } from "react";

const NewTask = () => {
  const theme = useTheme();

  const [selectedCollaborator, setSelectedCollaboratorData] = useState<
    { id: number; name: string; image: string; isSelected: boolean }[]
  >([]);

  useEffect(() => {
    setSelectedCollaboratorData(
      rightDrawerData.collaboratorsOptions.filter((value) => value.isSelected)
    );
  }, []);

  return (
    <Box className="w-full flex flex-col gap-4 justify-between ">
      <Box className="w-full flex justify-between items-center">
        <Typography
          color={theme.palette.portGore}
          className="!text-lg !font-bold"
        >
          New Task
        </Typography>
        <EllipsisHorizontal />
      </Box>

      <Typography
        color={theme.palette.slateGray}
        className="!text-xs !font-medium "
      >
        Task Title
      </Typography>
      <Input placeholder="Add title here.." />

      <Divider orientation="horizontal" />

      <Typography
        color={theme.palette.slateGray}
        className="!text-xs !font-medium "
      >
        Add Collaborators
      </Typography>
      <Box className="flex gap-4">
        {selectedCollaborator
          .filter((value) => value.isSelected)
          ?.map((data, index) => (
            <Badge key={index}>
              <Box
                className="flex gap-2 items-center p-2 rounded-3xl"
                bgcolor={theme.palette.titanWhite}
              >
                <img
                  src={data.image}
                  alt="img"
                  className="w-6 h-6 rounded-full"
                />
                <Typography color={theme.palette.royalBlueText}>
                  {data.name}
                </Typography>
                <CrossIcon />
              </Box>
            </Badge>
          ))}
        <Box
          className="w-[35px] h-[35px] flex justify-center items-center rounded-full"
          bgcolor={theme.palette.mystic}
        >
          +
        </Box>
        <RightChevron />
      </Box>
    </Box>
  );
};
export default NewTask;
