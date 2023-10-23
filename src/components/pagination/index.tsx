import { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import { getPaginationOptions } from "./pagination-helper";
import { PaginationProps } from "./pagination.types";
import { Button } from "@mui/material";
import Select from "../select";

const Pagination: FC<PaginationProps> = ({ total, tableApi }) => {
  const {
    getPageSize,
    setPageSize,
    getPageIndex,
    getColumnLength,
    goToPreviousPage,
    canGoToPreviousPage,
    goToNextPage,
    canGoToNextPage,
  } = getPaginationOptions(tableApi);

  const getResultText = () =>
    `Results ${getPageIndex() * getPageSize() + 1} - ${Math.min(
      getPageIndex() * getPageSize() + getPageSize(),
      total
    )} of ${total}`;

  return (
    <TableFooter>
      <TableRow>
        <TableCell variant="footer" colSpan={getColumnLength()}>
          <Box className="flex justify-between items-center">
            <Box className="flex gap-4 items-center">
              Rows Per Page
              <Select
                options={[
                  { value: 10, label: 10 },
                  { value: 50, label: 50 },
                  { value: 100, label: 100 },
                  { value: 200, label: 200 },
                ]}
                onChange={(e) => setPageSize(Number(e.target.value))}
                value={getPageSize()}
                className="max-w-[0.75rem]"
              />
            </Box>
            <Box className="flex gap-3 items-center">
              <Button
                onClick={goToPreviousPage}
                disabled={!canGoToPreviousPage()}
                className="h-8 min-w-[2rem] p-0"
              >
                <ArrowBackIcon fontSize="inherit" />
              </Button>
              {getResultText()}
              <Button
                className="h-8 min-w-[2rem] p-0"
                onClick={goToNextPage}
                disabled={!canGoToNextPage()}
              >
                <ArrowForwardIcon fontSize="inherit" />
              </Button>
            </Box>
          </Box>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default Pagination;
