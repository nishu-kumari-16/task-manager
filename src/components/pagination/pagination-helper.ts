import { Table as ITable } from "@tanstack/react-table";
import { IGetPaginationOptions } from "./pagination.types";

export const getPaginationOptions = (table: ITable<any>): IGetPaginationOptions => ({
	getPageSize: () => table.getState().pagination.pageSize,
	setPageSize: (value: number) => table.setPageSize(value),
	getPageIndex: () => table.getState().pagination.pageIndex,
	getColumnLength: () => table.getAllColumns().length,
	goToPreviousPage: () => table.previousPage(),
	canGoToPreviousPage: () => table.getCanPreviousPage(),
	goToNextPage: () => table.nextPage(),
	canGoToNextPage: () => table.getCanNextPage(),
});
