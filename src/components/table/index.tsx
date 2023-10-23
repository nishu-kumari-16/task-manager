import React, {
  FC,
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTheme } from "@mui/material/styles";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import {
  Table as ITable,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  RowData,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
import { Skeleton } from "@mui/material";
import Pagination from "../pagination";
import { getModifiedColumns } from "./column-registry.";
import Card from "../card";
import { getPageCountFromTotal, throttle } from "../../helpers/utils";

// added a custom key to the column meta data for filterType
declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {}
}
export const DefaulPagination = {
  pageIndex: 0,
  pageSize: 10,
};
export type PaginationConfig = { pageIndex: number; pageSize: number };

export type ICustomColumnsProp = ColumnDef<any> | any;

export type TableProps = {
  data?: any;
  columns: Array<ICustomColumnsProp>;
  onRowSelectionChange?: (
    rowDataModel: any[],
    selectedRowIds: string[]
  ) => void;
  pagination?: {
    total: number;
    pageIndex?: number;
    pageSize?: number;
  };
  enableRowSelection?: boolean;
  enableMultiRowSelection?: boolean;
  enableColumnFilters?: boolean;
  enableSorting?: boolean;
  manualPagination?: boolean;
  isGridPaginated?: boolean;
  onPaginationChange?: (paginationConfig: PaginationState) => void;
  onRowClick?: (row: any) => void;
  onColumnSearch?: (columnId: string, value: string) => void;
  className?: string;
  isLoading?: boolean;
  emptyMessage?: string | ReactNode;
  rowSelectionId?: string;
  onReady?: (api: ITable<any>) => void;
  autoResize?: boolean;
  heightToSubtract?: number;
  disableKey?: string;
};

const Default_Height_To_Subtract = 105;

const Table: FC<TableProps> = (props) => {
  const {
    data,
    columns,
    onRowSelectionChange,
    pagination,
    enableRowSelection = false,
    enableMultiRowSelection = false,
    onPaginationChange,
    manualPagination,
    isGridPaginated = false,
    onRowClick,
    enableColumnFilters = false,
    enableSorting = false,
    onColumnSearch,
    className,
    isLoading,
    emptyMessage,
    rowSelectionId,
    onReady,
    autoResize = false,
    disableKey,
    heightToSubtract = Default_Height_To_Subtract,
    ...restConfig
  } = props;
  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [sortedData, setSortedData] = useState<any[]>([]);
  const [paginationConfig, setPaginationConfig] = useState<PaginationState>({
    pageIndex: pagination?.pageIndex || DefaulPagination.pageIndex,
    pageSize: pagination?.pageSize || DefaulPagination.pageSize,
  });

  const modifiedColumns = useMemo(
    () =>
      getModifiedColumns(columns, {
        enableRowSelection,
        enableMultiRowSelection,
      }),
    []
  );

  const getRowId = (row: any, relativeIndex: number, parent: any) => {
    return rowSelectionId && row[rowSelectionId];
  };

  const table: ITable<any> = useReactTable({
    data: sortedData,
    columns: modifiedColumns,
    state: {
      rowSelection,
      pagination: paginationConfig,
      sorting: sorting,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    ...(isGridPaginated
      ? {
          getPaginationRowModel: getPaginationRowModel(),
        }
      : {}),
    manualPagination: manualPagination,
    pageCount: getPageCountFromTotal(
      pagination?.total || data.length,
      paginationConfig?.pageSize
    ),
    onPaginationChange: (updater: any) => {
      const nextPaginationState = updater(paginationConfig);
      setPaginationConfig(nextPaginationState);
      onPaginationChange?.(nextPaginationState);
    },
    onSortingChange: setSorting,
    getRowId: getRowId,
    enableRowSelection: enableRowSelection,
    enableMultiRowSelection: enableMultiRowSelection,
    enableColumnFilters: enableColumnFilters,
    enableSorting: enableSorting,
    ...restConfig,
  });

  const theme = useTheme();

  onReady?.(table);

  const rowClassName = `${onRowClick ? "cursor-pointer" : ""} ${
    enableColumnFilters ? "search-row" : ""
  }`;

  const getArrow = (className: string) => (
    <ArrowBackIcon
      className={`${className} !w-4`}
      htmlColor={theme.palette.codGray}
    />
  );

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: any
  ) => {
    event.stopPropagation();
    onRowClick && onRowClick(row);
  };

  const handleColumnSearch = (columnId: string, value: string) => {
    onColumnSearch && onColumnSearch(columnId, value);
  };

  const renderLoader = () =>
    Array.from({ length: 5 }).map(() =>
      table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => {
            return (
              <TableCell
                key={header.id}
                colSpan={header.colSpan}
                style={header.column.columnDef.headerStyle}
              >
                <Skeleton height="1rem" />
              </TableCell>
            );
          })}
        </TableRow>
      ))
    );

  const sortData = () => {
    if (sorting.length) {
      const [{ id, desc }] = sorting;

      const sortedArr = [...data].sort((previousRow, currentRow) => {
        const rowA = desc ? previousRow : currentRow;
        const rowB = desc ? currentRow : previousRow;
        return rowA?.[id]
          ?.toLowerCase()
          .localeCompare(rowB?.[id]?.toLowerCase());
      });
      setSortedData(sortedArr);
      return;
    }
    setSortedData(data);
  };

  const renderArrow = (isSorted: "asc" | "desc" | false) => {
    const arrows = {
      asc: getArrow("rotate-90"),
      desc: getArrow("-rotate-90"),
    };

    return isSorted ? arrows[isSorted] : null;
  };

  useEffect(() => {
    sortData();
  }, [sorting, data]);

  useEffect(() => {
    const rowDataModel = table
      .getSelectedRowModel()
      .flatRows.map(({ original }) => original);
    onRowSelectionChange?.(rowDataModel, Object.keys(rowSelection));
  }, [rowSelection]);

  const resizeTable = () => {
    const windowHeight = window.innerHeight;
    if (tableContainerRef.current?.style) {
      tableContainerRef.current.style.maxHeight = `${
        (windowHeight || 0) - heightToSubtract
      }px`;
    }
  };

  console.log(enableSorting);

  useEffect(() => {
    if (tableContainerRef.current && autoResize) {
      resizeTable();
      const throttledResizeTable = throttle(resizeTable, 600);
      window.addEventListener("resize", throttledResizeTable);
      return () => {
        window.removeEventListener("resize", throttledResizeTable);
      };
    }
  }, []);

  return (
    <Box className="overflow-hidden !shadow-none">
      <TableContainer className={className} ref={tableContainerRef}>
        <MUITable>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  const canSort = header.column.columnDef.sortColumn;
                  return (
                    <TableCell
                      key={header.id}
                      colSpan={header.colSpan}
                      style={header.column.columnDef.headerStyle}
                      onClick={
                        canSort
                          ? header.column.getToggleSortingHandler()
                          : () => {}
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <Box
                          {...{
                            className: ` ${
                              canSort
                                ? "cursor-pointer select-none flex gap-1 items-center"
                                : ""
                            }`,
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {canSort ? (
                            <Box className="flex justify-center items-center">
                              {renderArrow(header.column.getIsSorted())}
                              {!header.column.getIsSorted() && (
                                <Box className=" flex justify-center items-center">
                                  {getArrow("rotate-90")}
                                </Box>
                              )}
                            </Box>
                          ) : null}
                        </Box>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            <Fragment>
              {enableColumnFilters &&
                table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="search-row">
                    {headerGroup.headers.map((header) => {
                      const meta = header.column.columnDef?.meta;
                      return (
                        <TableCell
                          key={header.id}
                          colSpan={header.colSpan}
                          className="px-2 py-3"
                        ></TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              {isLoading ? (
                renderLoader()
              ) : (
                <>
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <TableRow
                        key={row.id}
                        onClick={(event) => handleRowClick(event, row.original)}
                        className={rowClassName}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <TableCell
                              key={cell.id}
                              className={
                                disableKey &&
                                row.original[disableKey] &&
                                `opacity-[0.4]`
                              }
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </>
              )}
            </Fragment>
          </TableBody>
          {isGridPaginated && data.length ? (
            <Pagination total={pagination?.total || 0} tableApi={table} />
          ) : null}
          {!(data.length || isLoading) && (
            <TableBody>
              <TableRow>
                <TableCell
                  className="!text-center py-[1.5rem]"
                  colSpan={columns.length}
                >
                  {emptyMessage || "no data found"}
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </MUITable>
      </TableContainer>
    </Box>
  );
};

export default Table;
