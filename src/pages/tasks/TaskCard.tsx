import { Box, Typography, useTheme } from "@mui/material";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as AttachmentIcon } from "../../assets/icons/attachment.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import StackedImages from "../../components/stacked-images";

const TaskCard = ({ taskData }: any) => {
  const theme = useTheme();

  const {
    id,
    tag,
    tagType,
    title,
    description,
    date,
    collaborators,
    completedCount,
    comments,
    fileCount,
    image,
  } = taskData;

  return (
    <Box
      className="flex flex-col gap-3  px-5 py-4 rounded-lg cursor-grabbing"
      bgcolor={theme.palette.white}
      onDragStart={(e) => e.dataTransfer.setData("id", id)}
      draggable
    >
      <Box
        bgcolor={tagType}
        color="white"
        className="text-xs px-2 py-1 w-fit rounded-md"
      >
        {tag}
      </Box>
      {image}
      <Typography
        color={theme.palette.portGore}
        className="!text-sm !font-medium"
      >
        {title}
      </Typography>
      <Typography
        color={theme.palette.slateGray}
        className="!text-xs !font-medium"
      >
        {description}
      </Typography>

      <Box
        borderColor={theme.palette.regentGray}
        className="border w-fit rounded-md py-[2px] px-1 !text-xs"
        color={theme.palette.royalBlueText}
      >
        {date}
      </Box>
      <Box className="flex justify-between items-center">
        {collaborators?.length && (
          <StackedImages
            images={collaborators}
            width={20}
            height={20}
            borderWidth={1}
          />
        )}
        {completedCount && (
          <Box className="flex gap-2">
            <CheckIcon />
            <Typography
              color={theme.palette.slateGray}
              className="!text-xs !font-medium"
            >
              {completedCount}
            </Typography>
          </Box>
        )}
      </Box>
      <Box className="flex justify-between items-center">
        {comments && (
          <Box className="flex gap-2 items-center">
            <MessageIcon />
            <Typography
              color={theme.palette.slateGray}
              className="!text-xs !font-medium"
            >
              {`${comments} Comments`}
            </Typography>
          </Box>
        )}
        {fileCount && (
          <Box className="flex gap-2 items-center">
            <AttachmentIcon />
            <Typography
              color={theme.palette.slateGray}
              className="!text-xs !font-medium"
            >
              {`${fileCount} file`}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default TaskCard;
