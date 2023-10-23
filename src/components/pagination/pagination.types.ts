import { Table as ITable } from "@tanstack/react-table";

export interface IGetPaginationOptions {
	getPageSize: () => number;
	setPageSize: (value: number) => void;
	getPageIndex: () => number;
	getColumnLength: () => number;
	goToPreviousPage: () => void;
	canGoToPreviousPage: () => boolean;
	goToNextPage: () => void;
	canGoToNextPage: () => boolean;
}

export type PaginationProps = {
	total: number;
	tableApi: ITable<any>;
};
