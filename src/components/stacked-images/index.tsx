import { Box, Typography, useTheme } from "@mui/material";

const StackedImages = ({
  images,
  width = 30,
  height = 30,
  borderWidth = 3,
  showMax,
}: any) => {
  const maxLength = showMax || images.length;
  const theme = useTheme();

  return (
    <Box className="flex items-center">
      {images.slice(0, maxLength).map((data: any, index: number) => (
        <img
          src={data?.image || data}
          alt="img"
          key={index}
          style={{
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            borderWidth: `${borderWidth}px`,
          }}
          className={`rounded-full ml-[-5px]`}
        />
      ))}
      {showMax && (
        <Typography
          className="!text-2xl !font-medium !ml-2"
          color={theme.palette.manatee}
        >
          +{images.length - showMax}
        </Typography>
      )}
    </Box>
  );
};
export default StackedImages;
